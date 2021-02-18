import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../AuthContext";
import {BASE_API} from "../config";
import "./EditOrganization.css";
import {SERVICE_UNAVAILABLE_ERROR} from "../messages";
import { ORGANIZATION_STATUS} from "../enums";
import { TIMEZONES } from "../timezones";


export default function EditOrganization() {
  const [responseMessage, setResponseMessage] = useState(null);
  const [organization, setOrganization] = useState({});
  const {access_token} = useContext(AuthContext);
  const [isValidPhone, setIsValidPhone] = useState(true);


  useEffect(() => {
    const requestOrganization = {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${access_token}`,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    };

    fetch(`${BASE_API}/organization`, requestOrganization)
      .then(async response => {
        const data = await response.json();
        if (response.ok) {
          return setOrganization(data);
        }
        return setResponseMessage(data.message);
      })
      .catch(() =>
        setResponseMessage(SERVICE_UNAVAILABLE_ERROR)
      )
  }, [access_token]);

  const handleSubmit = async e => {
    e.preventDefault();

    let payload = {}
    new FormData(e.target).forEach((value, key) => {
      if (key === "representativeName")
        return;
      payload[key] = value;
    });
    const requestUpdateOrganization = {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${access_token}`,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    };
    fetch(`${BASE_API}/organization`, requestUpdateOrganization)
      .then(async response => {
        let data = await response.json();
        if (response.ok)
          return setResponseMessage(data.message);
        setResponseMessage(data.message);
      })
      .catch(() =>
        setResponseMessage(SERVICE_UNAVAILABLE_ERROR)
      )
  }

  const validatePhone = e => {
    setIsValidPhone(e.target.checkValidity());
  };

  const optionsWithDefaultSelection = (value, receivedValue) => {
    if (value === "GMT0" && !receivedValue){
      return <option key={value} value={value} selected>{value}</option>
    }
    if (value === "Draft" && !receivedValue) {
      return <option key={value} value={value} selected>{value}</option>
    }
    return <option key={value} value={value}>{value}</option>
  };

  return (
      <div className="container" id="organizationProfile">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">{organization.organization_name} Profile</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form className="organization-form mx-auto" onSubmit={handleSubmit}>
              <form-group controlId="formRespresentativeName">
                <p className="input-control">
                  <label id="representativeName">Representative name :</label>
                  <input className="field"
                         type="text"
                         aria-labelledby="representativeName"
                         name="representative_name"
                         defaultValue={organization.representative_name}
                         disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formRRepresentativeDepartment">
                <p className="input-control">
                  <label id="representativeDepartment">Representative Department :</label>
                  <input className="field"
                         type="text"
                         aria-labelledby="representativeDepartment"
                         name="representative_department"
                         maxLength="150"
                         defaultValue={organization.representative_department}
                         required
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formName">
                <p className="input-control">
                  <label id="name">Organization Name :</label>
                  <input className="field"
                         type="text"
                         aria-labelledby="name"
                         name="name"
                         maxLength="150"
                         defaultValue={organization.organization_name}
                         required
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formEmail">
                <p className="input-control">
                  <label id="email">Email :</label>
                  <input className="field"
                         type="email"
                         aria-labelledby="email"
                         name="email"
                         maxLength="254"
                         defaultValue={organization.email}
                         required
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formAbout">
                <p className="input-control">
                  <label id="about">About the organization :</label>
                  <textarea className="field"
                         type="text"
                         aria-labelledby="about"
                         name="about"
                         maxLength="500"
                         defaultValue={organization.about}
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formAddress">
                <p className="input-control">
                  <label id="address">Organization Address :</label>
                  <textarea className="field"
                         type="text"
                         aria-labelledby="address"
                         name="address"
                         defaultValue={organization.address}
                         maxLength="254"
                         required
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <form-group controlId="formWebsite">
                <p className="input-control">
                  <label id="website">Website :</label>
                  <input className="field"
                         type="url"
                         aria-labelledby="website"
                         name="website"
                         maxLength="150"
                         defaultValue={organization.website}
                         required
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <div className="input-group mb-3">
                <p className="input-control">
                  <label htmlFor="timezone">Timezone</label>
                  <select className="custom-select" name="timezone" id="timezone">
                    <option
                    defaultValue="GMT0">{organization.timezone}
                    </option>
                    {TIMEZONES.map((timezone) => optionsWithDefaultSelection(timezone, organization.timezone))}
                  </select>
                </p>
              </div>
              <form-group controlId="formPhone">
                <p className="input-control">
                  <label htmlFor="phone">Phone :</label>
                  <input className="field"
                         type="text"
                         name="phone"
                         defaultValue={organization.phone}
                         maxLength="20"
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
              <div className="input-group mb-3">
                <p className="input-control">
                  <label htmlFor="status">Status</label>
                  <select className="custom-select" name="status" id="status">
                    <option
                      defaultValue="Draft">{organization.status}
                    </option>
                      {ORGANIZATION_STATUS.map((status) => optionsWithDefaultSelection(status, organization.status))}
                  </select>
                </p>
              </div>
              <div><br></br></div>
              <form-group controlId="formJoinDate">
                <p className="input-control">
                  <label id="joinDate">Join date :</label>
                  <input className="field"
                    type="url"
                    aria-labelledby="joinDate"
                    name="joinDate"
                    defaultValue={organization.join_date}
                    disabled
                  />
                </p>
              </form-group>
              <div><br></br></div>
              <div><br></br></div>
              <div className="row justify-content-between">
                <div className="col-sm-6">
                {responseMessage
                  ?<Link to={{
                      pathname: `/organization-portfolio`,
                      state: { organization }
                      }}
                    className="btn btn-primary disabled-link"
                    variant="primary"
                    name="toPrograms"
                    organization={organization}
                  >Go to Programs
                  </Link>
                  : <Link to={{
                      pathname: `/organization-portfolio`,
                      state: { organization }
                      }}
                    className="btn btn-primary"
                    variant="primary"
                    name="toPrograms"
                    organization={organization}
                  >Go to Programs
                  </Link>
                }
                </div>
                <div>
                {responseMessage &&
                <span className="error" name="response" aria-label="response" role="alert">{responseMessage}</span>}
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <button className="btn btn-success"
                          variant="success"
                          type="submit"
                          name="submit"
                          value="Save"
                  >Save
                  </button>
                </div>
              </div>
              </div>
              <div><br></br></div>
            </form>
          </div>
        </div>
      </div>
    )
}
