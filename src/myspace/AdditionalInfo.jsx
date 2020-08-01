import React, { useState, useEffect, useContext } from "react";
import { BASE_API } from "../config";
import { AuthContext } from "../AuthContext";
import "./MySpace.css";
import { SERVICE_ERROR } from "../Messages";


export default function AdditionalInfo() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState({});
  const { access_token, user } = useContext(AuthContext);

  const requestAdditionalInfo = {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${access_token}`,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  };


  useEffect(() => {
    fetch(`${BASE_API}/user/additional_info`, requestAdditionalInfo)
      .then(async response => {
        const data = await response.json();
        if (response.ok) 
          return setAdditionalInfo(data);
        setErrorMessage(data.message);
      })
      .catch(() => 
        setErrorMessage(SERVICE_ERROR)
      )
  });

  return errorMessage ?
    <div className="container-fluid" id="additionalInfo">
      <div className="top">
        <h1>
          {errorMessage}
        </h1>
      </div>
    </div>
    :
    <>
      <div className="container" id="additionalInfo">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Additional Info</h1>
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
                    placeholder={user}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formPhone">
                <p className="input-control">
                  <label htmlFor="phone">Phone :</label>
                  <input className="field"
                    type="text"
                    name="phone"
                    placeholder={additionalInfo.phone}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formMobile">
                <p className="input-control">
                  <label htmlFor="mobile">Mobile :</label>
                  <input className="field"
                    type="text"
                    name="mobile"
                    placeholder={additionalInfo.mobile}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formPersonalWebsite">
                <p className="input-control">
                  <label htmlFor="personalWebsite">Personal Website :</label>
                  <input className="field"
                    type="text"
                    name="personalWebsite"
                    placeholder={additionalInfo.personal_website}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formTimezone">
                <p className="input-control">
                  <label htmlFor="timezone">Timezone :</label>
                  <input className="field"
                    type="text"
                    name="timezone"
                    placeholder={additionalInfo.timezone}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formIsOrganizationRepCheck">
                <div className="row">
                  <div className="col-sm">
                    <p className="input-control">
                      <input
                        type="checkbox"
                        name="isOrganizationRep"
                        aria-label="isOrganizationRep"
                        defaultChecked={additionalInfo.is_organization_rep}
                        disabled
                      />
                    </p>
                  </div>
                  <div className="col-sm-11">
                    {additionalInfo.is_organization_rep ?
                      <label>
                        You have declared that you are an organization representative
                      </label>
                      :
                      <label>
                        You have declared that you do not represent an organization
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