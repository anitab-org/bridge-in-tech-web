import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { BASE_API } from "../config";
import "./MySpace.css";


export default function PersonalDetails() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [personalDetails, setPersonalDetails] = useState({});
  const { access_token } = useContext(AuthContext);
  
  const requestPersonalDetails = {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${access_token}`,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  };

  let data = "";
  useEffect(() => {
    fetch(`${BASE_API}/user/personal_details`, requestPersonalDetails)
    .then(async response => {

      data = await response.json();
      setPersonalDetails(data);
    })
    .catch(error => {
      setErrorMessage(data["message"]);
    });

  });
  
  return errorMessage ?
    <div>
      <p>{errorMessage}</p>
    </div>
    :
    <>
      <div className="container" id="personal_details">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Personal Details</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form className="myspace-form mx-auto">
              <form-group controlId="formUserame">
                <p className="input-control">
                  <label htmlFor="username">Username :</label>
                  <input className="field"
                    type="text"
                    name="username"
                    placeholder={personalDetails.username}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formEmail">
                <p className="input-control">
                  <label htmlFor="email">Email :</label>
                  <input className="field"
                    type="text"
                    name="email"
                    placeholder={personalDetails.email}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formName">
                <p className="input-control">
                  <label htmlFor="name">Name :</label>
                  <input className="field"
                    type="text"
                    name="name"
                    placeholder={personalDetails.name}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formIrcId">
                <p className="input-control">
                  <label htmlFor="ircId">IRC ID :</label>
                  <input className="field"
                    type="text"
                    name="ircId"
                    placeholder={personalDetails.slack_username}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group>
                <div className="row">
                  <div className="col-sm text-center">
                    <label htmlFor="availability">Available to be a :</label>
                    <form-group>
                      {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <div className="row">
                            <div className="col-sm">
                              <input
                                name="available_to_mentor"
                                aria-label="mentor"
                                type={type}
                                defaultChecked={personalDetails.available_to_mentor}
                                id={`inline-${type}-1`}
                                disabled
                              />
                              <label htmlFor="mentor">Mentor</label>
                            </div>
                            <div className="col-sm">
                              <input
                                name="need_mentoring"
                                aria-label="mentee"
                                type={type}
                                defaultChecked={personalDetails.need_mentoring}
                                id={`inline-${type}-2`}
                                disabled
                              />
                              <label htmlFor="mentee">Mentee</label>
                            </div>
                          </div>
                        </div>
                      ))}
                    </form-group>
                  </div>
                </div>
              </form-group>
              <form-group controlId="formInterests">
                <p className="input-control">
                  <label htmlFor="interests">Interests :</label>
                  <input className="field"
                    type="text"
                    name="interests"
                    placeholder={personalDetails.interests}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formBio">
                <p className="input-control">
                  <label htmlFor="bio">Bio :</label>
                  <input className="field"
                    type="text"
                    name="bio"
                    placeholder={personalDetails.bio}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formLocation">
                <p className="input-control">
                  <label htmlFor="location">Location :</label>
                  <input className="field"
                    type="text"
                    name="location"
                    placeholder={personalDetails.location}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formOccupation">
                <p className="input-control">
                  <label htmlFor="occupation">Occupation :</label>
                  <input className="field"
                    type="text"
                    name="occupation"
                    placeholder={personalDetails.occupation}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formCurrentOrganization">
                <p className="input-control">
                  <label htmlFor="currentOrganization">Current Organization :</label>
                  <input className="field"
                    type="text"
                    name="current_organization"
                    placeholder={personalDetails.current_organization}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formSkills">
                <p className="input-control">
                  <label htmlFor="skills">Skills :</label>
                  <input className="field"
                    type="text"
                    name="skills"
                    placeholder={personalDetails.skills}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formResumeUrl">
                <p className="input-control">
                  <label htmlFor="resumeUrl">Resume Url :</label>
                  <input className="field"
                    type="text"
                    name="resumeUrl"
                    placeholder={personalDetails.resume_url}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formPhotoUrl">
                <p className="input-control">
                  <label htmlFor="photoUrl">Photo Url :</label>
                  <input className="field"
                    type="text"
                    name="photoUrl"
                    placeholder={personalDetails.photo_url}
                    disabled
                  />
                </p>
              </form-group>
            </form>
          </div>
        </div>
      </div>
    </>
}