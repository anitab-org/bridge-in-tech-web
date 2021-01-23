import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { BASE_API } from "../config";
import "./MySpace.css";
import { SERVICE_UNAVAILABLE_ERROR } from "../messages";


export default function PersonalDetails() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [personalDetails, setPersonalDetails] = useState({});
  const { access_token } = useContext(AuthContext);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);


  const requestPersonalDetails = {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${access_token}`,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    fetch(`${BASE_API}/user/personal_details`, requestPersonalDetails)
      .then(async response => {
        const data = await response.json();
        if (response.ok)
          return setPersonalDetails(data);
        setErrorMessage(data.message);
      })
      .catch(() =>
        setErrorMessage(SERVICE_UNAVAILABLE_ERROR)
      )
  }, [requestPersonalDetails]);

  const handleSubmit = async e => {
    e.preventDefault();

    let payload = {
      need_mentoring: false,
      available_to_mentor: false
    }
    new FormData(e.target).forEach((value, key) => {
      if (key === "email")
        return;
      if (key === "need_mentoring" || key === "available_to_mentor")
        value = (value === "true");
      payload[key] = value;
    });
    const requestUpdateDetails = {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${access_token}`,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    };
    fetch(`${BASE_API}/user/personal_details`, requestUpdateDetails)
      .then(async response => {
        let data = await response.json();
        if (response.ok) {
          return setSuccessMessage(data.message)
        }
        setErrorMessage(data.message);
      })
      .catch(() => setErrorMessage(SERVICE_UNAVAILABLE_ERROR));
  }

  const validateName = e => {
    setIsValidName(e.target.checkValidity());
  };
  const validateUsername = e => {
      setIsValidUsername(e.target.checkValidity());
  };

  return errorMessage ?
    <div className="container-fluid" id="personalDetails">
      <div className="top">
        <h1>
          {errorMessage}
        </h1>
      </div>
    </div>
    :
    <>
      <div className="container" id="personalDetails">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Personal Details</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form className="myspace-form mx-auto" onSubmit={handleSubmit}>
              <form-group controlId="formUserame">
                <p className="input-control">
                  <label id="username">Username :</label>
                  <input className="field"
                    type="text"
                    aria-labelledby="username"
                    name="username"
                    defaultValue={personalDetails.username}
                    minLength={5}
                    maxLength={25}
                    pattern="^[a-zA-Z0-9/_]+$"
                    onChange={validateUsername}
                    required
                  />
                </p>
                {!isValidUsername && (
                    <span className="error">Must be between 5-25 characters long. Can only contain alphabets, numbers and underscore '_'</span>
                )}
              </form-group>
              <div><br></br></div>
              <form-group controlId="formEmail">
                <p className="input-control">
                  <label id="email">Email :</label>
                  <input className="field"
                    type="email"
                    aria-labelledby="email"
                    name="email"
                    defaultValue={personalDetails.email}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formName">
                <p className="input-control">
                  <label id="name">Name :</label>
                  <input className="field"
                    type="text"
                    aria-labelledby="name"
                    name="name"
                    defaultValue={personalDetails.name}
                    minLength={2}
                    maxLength={30}
                    pattern="^[a-zA-Z\s\-]+$"
                    onChange={validateName}
                    required
                  />
                </p>
                {!isValidName && (
                    <span className="error">Must be between 2-30 characters long. Can only contain alphabets, whitespace and dash '-'</span>
                )}
              </form-group>
              <div><br></br></div>
              <form-group controlId="formIrcId">
                <p className="input-control">
                  <label id="ircId">IRC ID :</label>
                  <input className="field"
                    type="text"
                    aria-labelledby="ircId"
                    name="slack_username"
                    defaultValue={personalDetails.slack_username}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formIrcId">
                <p className="input-control">
                  <label id="socialMediaLink">Social Media Links :</label>
                  <input className="field"
                    type="text"
                    aria-labelledby="socialMediaLink"
                    name="social_media_links"
                    defaultValue={personalDetails.social_media_links}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group>
                <div className="row">
                  <div className="col-sm text-center">
                    <label htmlFor="availability">Available to be a :</label>
                    <form-group>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-sm">
                              <input
                                name="available_to_mentor"
                                aria-label="mentor"
                                type="checkbox"
                                defaultChecked={personalDetails.available_to_mentor}
                                value={"on" ? true : false}
                              />
                              <label htmlFor="mentor">Mentor</label>
                            </div>
                            <div className="col-sm">
                              <input
                                name="need_mentoring"
                                aria-label="mentee"
                                type="checkbox"
                                defaultChecked={personalDetails.need_mentoring}
                                value={"on" ? true : false}
                              />
                              <label htmlFor="mentee">Mentee</label>
                            </div>
                          </div>
                        </div>
                    </form-group>
                  </div>
                </div>
              </form-group>
              <form-group controlId="formInterests">
                <p className="input-control">
                  <label id="interests">Interests :</label>
                  <input className="field"
                    type="text"
                    aria-labelledby="interests"
                    name="interests"
                    defaultValue={personalDetails.interests}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formBio">
                <p className="input-control">
                  <label id="bio">Bio :</label>
                  <input className="field"
                    type="text"
                    aria-labelledby="bio"
                    name="bio"
                    defaultValue={personalDetails.bio}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formLocation">
                <p className="input-control">
                  <label id="location">Location :</label>
                  <input className="field"
                    type="text"
                    aria-labelledby="location"
                    name="location"
                    defaultValue={personalDetails.location}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formOccupation">
                <p className="input-control">
                  <label id="occupation">Occupation :</label>
                  <input className="field"
                    type="text"
                         aria-labelledby="occupation"
                    name="occupation"
                    defaultValue={personalDetails.occupation}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formCurrentOrganization">
                <p className="input-control">
                  <label id="currentOrganization">Current Organization :</label>
                  <input className="field"
                    type="text"
                    aria-labelledby="currentOrganization"
                    name="current_organization"
                    defaultValue={personalDetails.current_organization}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formSkills">
                <p className="input-control">
                  <label id="skills">Skills :</label>
                  <input className="field"
                    type="text"
                    aria-labelledby="skills"
                    name="skills"
                    defaultValue={personalDetails.skills}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formResumeUrl">
                <p className="input-control">
                  <label id="resumeUrl">Resume Url :</label>
                  <input className="field"
                    type="text"
                    aria-labelledby="resumeUrl"
                    name="resume_url"
                    defaultValue={personalDetails.resume_url}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formPhotoUrl">
                <p className="input-control">
                  <label id="photoUrl">Photo Url :</label>
                  <input className="field"
                    type="text"
                    aria-labelledby="photoUrl"
                    name="photo_url"
                    defaultValue={personalDetails.photo_url}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <div>
                  {successMessage && <span className="error" name="response" aria-label="response" role="alert">{successMessage}</span>}
              </div>
              <div className="row">
                <div className="col-sm-6 offset-sm-9">
                  <button className="btn btn-success"
                    variant="success"
                    type="submit"
                    name="submit"
                    value="Save"
                  >Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
}
