import React, { useState, useEffect, useContext } from "react";
import { BASE_API } from "../config";
import { AuthContext } from "../AuthContext";
import "./MySpace.css";
import { SERVICE_UNAVAILABLE_ERROR } from "../messages";
import {
  GENDER,
  AGE,
  ETHNICITY,
  SEXUAL_ORIENTATION,
  RELIGION,
  PHYSICAL_ABILITY,
  MENTAL_ABILITY,
  SOCIO_ECONOMIC,
  HIGHEST_EDUCATION,
  YEARS_OF_EXPERIENCE
} from "../backgrounds";

export default function PersonalBackground() {
  const [responseMessage, setResponseMessage] = useState(null);
  const [personalBackground, setPersonalBackground] = useState({});
  const { access_token, user } = useContext(AuthContext);

  const requestPersonalBackground = {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${access_token}`,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    fetch(`${BASE_API}/user/personal_background`, requestPersonalBackground)
    .then(async response => {
      const data = await response.json();
      if (response.ok) 
        return setPersonalBackground(data);
      setResponseMessage(data.message);
    })
    .catch(() => 
      setResponseMessage(SERVICE_UNAVAILABLE_ERROR)
    )

  }, [] );

  const handleSubmit = async e => {
    e.preventDefault();

    let payload = {
      is_public: false
    }
    new FormData(e.target).forEach((value, key) => {
      if (key === "username")
        return;
      if (key === "is_public")
        value = (value === "true") ? true : false;
      if (key === "gender" ||
          key === "age" ||
          key === "ethnicity" ||
          key === "sexual_orientation" ||
          key === "religion" ||
          key === "physical_ability" ||
          key === "mental_ability" ||
          key === "socio_economic" ||
          key === "highest_education" ||
          key === "years_of_experience")
        value = value ? value : "Prefer not to say"; 
      payload[key] = value;
    });
    const requestUpdateBackground = {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${access_token}`,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    };

    fetch(`${BASE_API}/user/personal_background`, requestUpdateBackground)
      .then(async response => {
        let data = await response.json();
        if (response.ok)
          return setResponseMessage(data.message)
        setResponseMessage(data.message)
      })
      .catch(() => setResponseMessage(SERVICE_UNAVAILABLE_ERROR));
  }

  return (
      <div className="container" id="personalBckground">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Personal Background</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form className="myspace-form mx-auto" onSubmit={handleSubmit}>
              <form-group controlId="formUsername">
                <p className="input-control">
                  <label htmlFor="username">Username :</label>
                  <input className="field"
                    type="text"
                    name="username"
                    placeholder={user}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <div className="input-group mb-3">
                <p className="input-control">
                  <label htmlFor="gender">Gender</label>
                  <select className="custom-select" name="gender" id="gender">
                    <option 
                      defaultValue="Prefer not to say">{personalBackground.gender}
                    </option>
                      {GENDER.map((gender) => <option key={gender} value={gender}>{gender}</option>)}
                  </select>
                </p>
              </div>
              <div><br></br></div>
              <form-group controlId="formGenderOther">
                <p className="input-control">
                  <label htmlFor="genderOther">Other information on Gender :</label>
                  <input className="field"
                    type="text"
                    name="gender_other"
                    defaultValue={personalBackground.gender_other}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <div className="input-group mb-3">
                <p className="input-control">
                  <label htmlFor="age">Age</label>
                  <select className="custom-select" name="age" id="age">
                    <option 
                      defaultValue="Prefer not to say">{personalBackground.age}
                    </option>
                      {AGE.map((age) => <option key={age} value={age}>{age}</option>)}
                  </select>
                </p>
              </div>
              <div><br></br></div>
              <div className="input-group mb-3">
                <p className="input-control">
                  <label htmlFor="ethnicity">Ethnicity</label>
                  <select className="custom-select" name="ethnicity" id="ethnicity">
                    <option 
                      defaultValue="Prefer not to say">{personalBackground.ethnicity}
                    </option>
                      {ETHNICITY.map((ethnicity) => <option key={ethnicity} value={ethnicity}>{ethnicity}</option>)}
                  </select>
                </p>
              </div>
              <div><br></br></div>
              <form-group controlId="formEthnicityOther">
                <p className="input-control">
                  <label htmlFor="ethnicityOther">Other information on Ethnicity :</label>
                  <input className="field"
                    type="text"
                    name="ethnicity_other"
                    defaultValue={personalBackground.ethnicity_other}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <div className="input-group mb-3">
                <p className="input-control">
                  <label htmlFor="sexualOrientation">Sexual_orientation</label>
                  <select className="custom-select" name="sexual_orientation" id="sexualOrientation">
                    <option 
                      defaultValue="Prefer not to say">{personalBackground.sexual_orientation}
                    </option>
                      {SEXUAL_ORIENTATION.map((sexualOrientation) => <option key={sexualOrientation} value={sexualOrientation}>{sexualOrientation}</option>)}
                  </select>
                </p>
              </div>
              <div><br></br></div>
              <form-group controlId="formSexualOrientationOther">
                <p className="input-control">
                  <label htmlFor="sexualOrientationOther">Other information on Sexual Orientation :</label>
                  <input className="field"
                    type="text"
                    name="sexual_orientation_other"
                    defaultValue={personalBackground.sexual_orientation_other}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <div className="input-group mb-3">
                <p className="input-control">
                  <label htmlFor="religion">Religion</label>
                  <select className="custom-select" name="religion" id="religion">
                    <option 
                      defaultValue="Prefer not to say">{personalBackground.religion}
                    </option>
                      {RELIGION.map((religion) => <option key={religion} value={religion}>{religion}</option>)}
                  </select>
                </p>
              </div>
              <div><br></br></div>
              <form-group controlId="formReligionOther">
                <p className="input-control">
                  <label htmlFor="religionOther">Other information on Religion :</label>
                  <input className="field"
                    type="text"
                    name="religion_other"
                    defaultValue={personalBackground.religion_other}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <div className="input-group mb-3">
                <p className="input-control">
                  <label htmlFor="physicalAbility">Physical Ability</label>
                  <select className="custom-select" name="physical_ability" id="physicalAbility">
                    <option 
                      defaultValue="Prefer not to say">{personalBackground.physical_ability}
                    </option>
                      {PHYSICAL_ABILITY.map((physicalAbility) => <option key={physicalAbility} value={physicalAbility}>{physicalAbility}</option>)}
                  </select>
                </p>
              </div>
              <div><br></br></div>
              <form-group controlId="formPhysicalAbilityOther">
                <p className="input-control">
                  <label htmlFor="physicalAbilityOther">Other information on Physical Ability :</label>
                  <input className="field"
                    type="text"
                    name="physical_ability_other"
                    defaultValue={personalBackground.physical_ability_other}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <div className="input-group mb-3">
                <p className="input-control">
                  <label htmlFor="mentalAbility">Mental Ability</label>
                  <select className="custom-select" name="mental_ability" id="mentalAbility">
                    <option 
                      defaultValue="Prefer not to say">{personalBackground.mental_ability}
                    </option>
                      {MENTAL_ABILITY.map((mentalAbility) => <option key={mentalAbility} value={mentalAbility}>{mentalAbility}</option>)}
                  </select>
                </p>
              </div>
              <div><br></br></div>
              <form-group controlId="formMentalAbilityOther">
                <p className="input-control">
                  <label htmlFor="mentalAbilityOther">Other information on Mental Ability :</label>
                  <input className="field"
                    type="text"
                    name="mental_ability_other"
                    defaultValue={personalBackground.mental_ability_other}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <div className="input-group mb-3">
                <p className="input-control">
                  <label htmlFor="socioEconomic">Socio Economic</label>
                  <select className="custom-select" name="socio_economic" id="socioEconomic">
                    <option 
                      defaultValue="Prefer not to say">{personalBackground.socio_economic}
                    </option>
                      {SOCIO_ECONOMIC.map((socioEconomic) => <option key={socioEconomic} value={socioEconomic}>{socioEconomic}</option>)}
                  </select>
                </p>
              </div>
              <div><br></br></div>
              <form-group controlId="formSocioEconomicOther">
                <p className="input-control">
                  <label htmlFor="socioEconomicOther">Other information on Socio Economic :</label>
                  <input className="field"
                    type="text"
                    name="socio_economic_other"
                    defaultValue={personalBackground.socio_economic_other}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <div className="input-group mb-3">
                <p className="input-control">
                  <label htmlFor="highestEducation">Highest Education</label>
                  <select className="custom-select" name="highest_education" id="highestEducation">
                    <option 
                      defaultValue="Prefer not to say">{personalBackground.highest_education}
                    </option>
                      {HIGHEST_EDUCATION.map((highestEducation) => <option key={highestEducation} value={highestEducation}>{highestEducation}</option>)}
                  </select>
                </p>
              </div>
              <div><br></br></div>
              <form-group controlId="formHighestEducationOther">
                <p className="input-control">
                  <label htmlFor="highestEducationOther">Other information on Highest Education :</label>
                  <input className="field"
                    type="text"
                    name="highest_education_other"
                    defaultValue={personalBackground.highest_education_other}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <div className="input-group mb-3">
                <p className="input-control">
                  <label htmlFor="yearsOfExperience">Years of Experience</label>
                  <select className="custom-select" name="years_of_experience" id="yearsOfExperience">
                    <option 
                      defaultValue="Prefer not to say">{personalBackground.years_of_experience}
                    </option>
                      {YEARS_OF_EXPERIENCE.map((yearsOfExperience) => <option key={yearsOfExperience} value={yearsOfExperience}>{yearsOfExperience}</option>)}
                  </select>
                </p>
              </div>
              <div><br></br></div>
              <div>
                <p>WARNING! By ticking the box below you are declaring that you have agreed for BridgeInTech to share your personal background information with its members</p>
              </div>
              <div><br></br></div>
              <form-group controlId="formIsPublic">
                <div className="row">
                  <div className="col-sm">
                    <p className="input-control">
                      <input
                        type="checkbox"
                        name="is_public"
                        aria-label="isPublic"
                        value={"on" ? true : false}
                        defaultChecked={personalBackground.is_public}
                      />
                    </p>
                  </div>
                  <div className="col-sm-10">
                    <label>
                      I allow other members of BridgeInTech to view my personal background information.  
                    </label>
                  </div>
                </div>
              </form-group>
              <div><br></br></div>
              <div>
                  {responseMessage && <span className="error" name="response" aria-label="response" role="alert">{responseMessage}</span>}
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
  )
}