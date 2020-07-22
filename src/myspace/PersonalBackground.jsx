import React, { useState, useEffect, useContext } from "react";
import { BASE_API } from "../config";
import { AuthContext } from "../AuthContext";
import "./MySpace.css";

export default function PersonalBackground() {
  const [errorMessage, setErrorMessage] = useState(null);
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

  let data = "";
  useEffect(() => {
    fetch(`${BASE_API}/user/personal_background`, requestPersonalBackground)
      .then(async response => {
        data = await response.json();
        if (response.ok) {
          setPersonalBackground(data);
        } else {
          throw new Error(data);
        }
      })
      .catch(error => {
        setErrorMessage(data.message);
      });

  });

  return errorMessage ?
    <div className="container-fluid" id="personalBackground">
      <div className="top">
        <h1>
          {errorMessage}
        </h1>
      </div>
    </div>
    :
    <>
      <div className="container" id="personalBckground">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Personal Background</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form className="myspace-form mx-auto">
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
              <form-group controlId="formGender">
                <p className="input-control">
                  <label htmlFor="gender">Gender :</label>
                  <input className="field"
                    type="text"
                    name="gender"
                    placeholder={personalBackground.gender}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formGenderOther">
                <p className="input-control">
                  <label htmlFor="genderOther">Other information on Gender :</label>
                  <input className="field"
                    type="text"
                    name="genderOther"
                    placeholder={personalBackground.gender_other}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formAge">
                <p className="input-control">
                  <label htmlFor="age">Age :</label>
                  <input className="field"
                    type="text"
                    name="age"
                    placeholder={personalBackground.age}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formEthnicity">
                <p className="input-control">
                  <label htmlFor="ethnicity">Ethnicity :</label>
                  <input className="field"
                    type="text"
                    name="ethnicity"
                    placeholder={personalBackground.ethnicity}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formEthnicityOther">
                <p className="input-control">
                  <label htmlFor="ethnicityOther">Other information on Ethnicity :</label>
                  <input className="field"
                    type="text"
                    name="ethnicityOther"
                    placeholder={personalBackground.ethnicity_other}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formSexualOrientation">
                <p className="input-control">
                  <label htmlFor="sexualOrientation">Sexual Orientation :</label>
                  <input className="field"
                    type="text"
                    name="sexualOrientation"
                    placeholder={personalBackground.sexual_orientation}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formSexualOrientationOther">
                <p className="input-control">
                  <label htmlFor="sexualOrientationOther">Other information on Sexual Orientation :</label>
                  <input className="field"
                    type="text"
                    name="sexualOrientationOther"
                    placeholder={personalBackground.sexual_orientation_other}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formReligion">
                <p className="input-control">
                  <label htmlFor="religion">Religion :</label>
                  <input className="field"
                    type="text"
                    name="religion"
                    placeholder={personalBackground.religion}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formReligionOther">
                <p className="input-control">
                  <label htmlFor="religionOther">Other information on Religion :</label>
                  <input className="field"
                    type="text"
                    name="religionOther"
                    placeholder={personalBackground.religion_other}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formPhysicalAbility">
                <p className="input-control">
                  <label htmlFor="physicalAbility">Physical Ability :</label>
                  <input className="field"
                    type="text"
                    name="physicalAbility"
                    placeholder={personalBackground.physical_ability}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formPhysicalAbilityOther">
                <p className="input-control">
                  <label htmlFor="physicalAbilityOther">Other information on Physical Ability :</label>
                  <input className="field"
                    type="text"
                    name="physicalAbilityOther"
                    placeholder={personalBackground.physical_ability_other}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formMentalAbility">
                <p className="input-control">
                  <label htmlFor="mentalAbility">Mental Ability :</label>
                  <input className="field"
                    type="text"
                    name="mentalAbility"
                    placeholder={personalBackground.mental_ability}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formMentalAbilityOther">
                <p className="input-control">
                  <label htmlFor="mentalAbilityOther">Other information on Mental Ability :</label>
                  <input className="field"
                    type="text"
                    name="mentalAbilityOther"
                    placeholder={personalBackground.mental_ability_other}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formSociooEconomic">
                <p className="input-control">
                  <label htmlFor="socioEconomic">Socio Economic :</label>
                  <input className="field"
                    type="text"
                    name="socioEconomic"
                    placeholder={personalBackground.socio_economic}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formSocioEconomicOther">
                <p className="input-control">
                  <label htmlFor="socioEconomicOther">Other information on Socio Economic :</label>
                  <input className="field"
                    type="text"
                    name="socioEconomicOther"
                    placeholder={personalBackground.socio_economic_other}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formHighestEducation">
                <p className="input-control">
                  <label htmlFor="highestEducation">Highest Education :</label>
                  <input className="field"
                    type="text"
                    name="highestEducation"
                    placeholder={personalBackground.highest_education}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formHighestEducationOther">
                <p className="input-control">
                  <label htmlFor="highestEducationOther">Other information on Highest Education :</label>
                  <input className="field"
                    type="text"
                    name="highestEducationOther"
                    placeholder={personalBackground.highest_education_other}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formYearsOfExperience">
                <p className="input-control">
                  <label htmlFor="yearsOfExperience">Years Of Experience :</label>
                  <input className="field"
                    type="text"
                    name="yearsOfExperience"
                    placeholder={personalBackground.years_of_experience}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formIsPublic">
                <div className="row">
                  <div className="col-sm">
                    <p className="input-control">
                      <input
                        type="checkbox"
                        name="isPublic"
                        aria-label="isPublic"
                        defaultChecked={personalBackground.is_public}
                        disabled
                      />
                    </p>
                  </div>
                  <div className="col-sm-11">
                    {personalBackground.is_public ?
                      <label>
                        You have declared that you agree to make your personal background public
                      </label>
                      :
                      <label>
                        You have declared that you do not agree to make your personal background public
                      </label>
                    }
                  </div>
                </div>
              </form-group>
            </form>
          </div>
        </div>
      </div>
    </>
}