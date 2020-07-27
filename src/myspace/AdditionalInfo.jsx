import React, { useState, useEffect, useContext } from "react";
import { BASE_API } from "../config";
import { AuthContext } from "../AuthContext";
import "./MySpace.css";
import { SERVICE_UNAVAILABLE_ERROR } from "../messages";


export default function AdditionalInfo() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState({});
  const { access_token, user } = useContext(AuthContext);
  const [isExist, setIsExist] = useState(false);
  const [validPhone, setValidPhone] = useState(true);
  const [validMobile, setValidMobile] = useState(true);

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
        setErrorMessage(SERVICE_UNAVAILABLE_ERROR)
      )
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    let payload = {
      is_organization_rep: false
    }
    new FormData(e.target).forEach((value, key) => {
      if (key === "username")
        return;
      if (key === "is_organization_rep")
        value = (value === "true") ? true : false;
      payload[key] = value;
    });
    const requestCreateDetails = {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${access_token}`,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    };

    fetch(`${BASE_API}/user/additional_info`, requestCreateDetails)
      .then(async response => {
        let data = await response.json();
        if (response.ok)
          return setResponseMessage(data.message)
        if (response.status === 409)
          return setIsExist(true);
        setErrorMessage(data.message);
      })
      .catch(() => setErrorMessage(SERVICE_UNAVAILABLE_ERROR));

    if (isExist) {
      const requestUpdateDetails = {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${access_token}`,
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      };

      fetch(`${BASE_API}/user/additional_info`, requestUpdateDetails)
        .then(async response => {
          let data = await response.json();
          if (response.ok)
            return setResponseMessage(data.message)
          if (response.status === 409)
            return setIsExist(true);
          setErrorMessage(data.message);
        })
        .catch(() => setErrorMessage("The service is temporarily unavailable, please try again later."));
    }
  }

  const validatePhone = e => {
    setValidPhone(e.target.checkValidity());
  };
  const validateMobile = e => {
    setValidMobile(e.target.checkValidity());
  };

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
                    placeholder={additionalInfo.phone}
                    pattern="^[0-9\s\-\+]+$"
                    onChange={validatePhone}
                  />
                </p>
                {!validPhone && (
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
                    placeholder={additionalInfo.mobile}
                    pattern="^[0-9\s\-\+]+$"
                    onChange={validateMobile}
                  />
                </p>
                {!validMobile && (
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
                    placeholder={additionalInfo.personal_website}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <div className="input-group mb-3">
                <p className="input-control">
                  <label htmlFor="timezone" for="inputGroupSelect01">Timezone</label>
                  <select className="custom-select" id="inputGroupSelect01">
                    <option
                      selected
                      defaultValue="UTC+00:00/Greenwich Mean Time and Western European Time">{additionalInfo.timezone}</option>
                    <option value="UTC-01:00/Cape Verde Time">UTC-01:00/Cape Verde Time</option>
                    <option value="UTC-03:30/NewFoundland_Standard_Time">UTC-03:30/NewFoundland_Standard_Time</option>
                    <option value="UTC-04:00/Atlantic Standard Time">UTC-04:00/Atlantic Standard Time</option>
                    <option value="UTC-05:00/Eastern Standard Time">UTC-05:00/Eastern Standard Time</option>
                    <option value="UTC-06:00/Central Standard Time">UTC-06:00/Central Standard Time</option>
                    <option value="UTC-07:00/Mountain Standard Time">UTC-07:00/Mountain Standard Time</option>
                    <option value="UTC-08:00/Pacific Standard Time">UTC-08:00/Pacific Standard Time</option>
                    <option value="UTC-09:00/Alaska Standard Time">UTC-09:00/Alaska Standard Time</option>
                    <option value="UTC-10:00/Hawaii-Aleutian Standard Time">UTC-10:00/Hawaii-Aleutian Standard Time</option>
                    <option value="UTC-11:00/Samoa Standard Time">UTC-11:00/Samoa Standard Time</option>
                    <option value="UTC+00:00/Greenwich Mean Time and Western European Time">UTC+00:00/Greenwich Mean Time and Western European Time</option>
                    <option value="UTC+01:00/Central European Time">UTC+01:00/Central European Time</option>
                    <option value="UTC+01:00/West Africa Time">UTC+01:00/West Africa Time</option>
                    <option value="UTC+02:00/Eastern European Time">UTC+02:00/Eastern European Time</option>
                    <option value="UTC+02:00/Central and South Africa Standard Time">UTC+02:00/Central and South Africa Standard Timee</option>
                    <option value="UTC+03:00/East Africa Time">UTC+03:00/East Africa Time</option>
                    <option value="UTC+03:00/Moskow Time">UTC+03:00/Moskow Time</option>
                    <option value="UTC+03:00/Charlie Time - Middle East Time">UTC+03:00/Charlie Time - Middle East Time</option>
                    <option value="UTC+04:00/Delta Time - Middle East Time">UTC+04:00/Delta Time - Middle East Time</option>
                    <option value="UTC+03:00/Charlie Time - Middle East Time">UTC+03:00/Charlie Time - Middle East Time</option>
                    <option value="UTC+05:30/India Standard Time">UTC+05:30/India Standard Time</option>
                    <option value="UTC+08:00/China Standard TIme">UTC+08:00/China Standard TIme</option>
                    <option value="UTC+08:00/Australian Western Standard Time">UTC+08:00/Australian Western Standard Time</option>
                    <option value="UTC+09:30/Australian Central and South Standard Time">UTC+09:30/Australian Central and South Standard Time</option>
                    <option value="UTC+10:00/Australian Eastern Standard Time">UTC+10:00/Australian Eastern Standard Time</option>
                    <option value="UTC+12:00/New Zealand Standard Time">UTC+12:00/New Zealand Standard Time</option>
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
                        defaultChecked={additionalInfo.is_organization_rep ? "on" : "off"}
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
    </>
}