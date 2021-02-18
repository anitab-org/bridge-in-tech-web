import React, { useState, useEffect, useContext } from "react";
import { BASE_API } from "../config";
import { AuthContext } from "../AuthContext";
import "./MySpace.css";
import { SERVICE_UNAVAILABLE_ERROR } from "../messages";
import { TIMEZONES } from "../timezones";


export default function AdditionalInfo() {
  const [responseMessage, setResponseMessage] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState({});
  const { access_token, user } = useContext(AuthContext);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isValidMobile, setIsValidMobile] = useState(true);


  useEffect(() => {
    const requestAdditionalInfo = {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${access_token}`,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    };

    fetch(`${BASE_API}/user/additional_info`, requestAdditionalInfo)
      .then(async response => {
        const data = await response.json();
        if (response.ok) {
          return setAdditionalInfo(data);
        }
        return setResponseMessage(data.message);
      })
      .catch(() =>
        setResponseMessage(SERVICE_UNAVAILABLE_ERROR)
      )
  }, [access_token]);

  const handleSubmit = async e => {
    e.preventDefault();

    let payload = {
      is_organization_rep: false,
      timezone: "GMT0"
    }
    new FormData(e.target).forEach((value, key) => {
      if (key === "username")
        return;
      if (key === "is_organization_rep")
        value = (value === "true") ? true : false;
      if (key === "timezone")
        value = value ? value : "GMT0";
      payload[key] = value;
    });
    const requestUpdateAdditionalInfo = {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${access_token}`,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    };
    fetch(`${BASE_API}/user/additional_info`, requestUpdateAdditionalInfo)
      .then(async response => {
        let data = await response.json();
        if (response.ok)
          return setResponseMessage(data.message)
        setResponseMessage(data.message)
      })
      .catch(() => setResponseMessage(SERVICE_UNAVAILABLE_ERROR));
  }

  const validatePhone = e => {
    setIsValidPhone(e.target.checkValidity());
  };
  const validateMobile = e => {
    setIsValidMobile(e.target.checkValidity());
  };

  return (
      <div className="container" id="additionalInfo">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Additional Info</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form className="myspace-form mx-auto" onSubmit={handleSubmit}>
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
                    defaultValue={additionalInfo.phone}
                    pattern="^[0-9\s\-\+]+$"
                    onChange={validatePhone}
                  />
                </p>
                {!isValidPhone && (
                  <span className="error">
                    Must only contain numbers between 0-9, may start with plus "+" before country code, and may have dash "-"
                  </span>
                )}
              </form-group>
              <div><br></br></div>
              <form-group controlId="formMobile">
                <p className="input-control">
                  <label htmlFor="mobile">Mobile :</label>
                  <input className="field"
                    type="text"
                    name="mobile"
                    defaultValue={additionalInfo.mobile}
                    pattern="^[0-9\s\-\+]+$"
                    onChange={validateMobile}
                  />
                </p>
                {!isValidMobile && (
                  <span className="error">
                    Must only contain numbers between 0-9, may start with plus "+" before country code, and may have dash "-"
                  </span>
                )}
              </form-group>
              <div><br></br></div>
              <form-group controlId="formPersonalWebsite">
                <p className="input-control">
                  <label htmlFor="personalWebsite">Personal Website :</label>
                  <input className="field"
                    type="url"
                    name="personal_website"
                    defaultValue={additionalInfo.personal_website}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <div className="input-group mb-3">
                <p className="input-control">
                  <label htmlFor="timezone">Timezone</label>
                  <select className="custom-select" name="timezone" id="timezone">
                    <option
                      defaultValue="GMT0">{additionalInfo.timezone}
                    </option>
                      {TIMEZONES.map((timezone) => <option key={timezone} value={timezone}>{timezone}</option>)}
                  </select>
                </p>
              </div>
              <div><br></br></div>
              <form-group controlId="formIsOrganizationRep">
                            <div className="row">
                                <div className="col-sm">
                                    <p className="input-control">
                                        <input
                                            type="checkbox"
                                            name="is_organization_rep"
                                            aria-label="isOrganizationRep"
                                            value={"on" ? true : false}
                                            defaultChecked={additionalInfo.is_organization_rep}
                                        />
                                    </p>
                                </div>
                                <div className="col-sm-10">
                                    <label>
                                        I am a representative of an organization
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
