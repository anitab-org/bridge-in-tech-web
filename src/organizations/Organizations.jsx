import React, { useState, useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { BASE_API } from "../config";
import { SERVICE_UNAVAILABLE_ERROR } from "../messages";
import "./Organization.css";

export default function Organizations() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [organizations, setOrganizations] = useState([]);
  const { access_token } = useContext(AuthContext);

  const requestOrganizationsList = {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${access_token}`,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    fetch(`${BASE_API}/organizations`, requestOrganizationsList)
      .then(async response => {
        const data = await response.json();
        if (response.ok) {
          return setOrganizations(data);
        }
        setErrorMessage(data.message);
      })
      .catch(() =>
        setErrorMessage(SERVICE_UNAVAILABLE_ERROR)
      )

  }, [requestOrganizationsList]);

  return errorMessage ?
    <div className="container-fluid">
      <div className="top">
        <h1>
          {errorMessage}
        </h1>
      </div>
    </div>
    :
    <>
      <div className="container-organizations">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Organizations List</h1>
          </div>
        </div>
        <Table striped bordered hover className="organizationsList">
          <thead>
            <tr>
              <th>Representative Name</th>
              <th>Organization Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Timezone</th>
              <th>Phone</th>
              <th>Total Programs</th>
              <th>Available</th>
              <th>In Progress</th>
              <th>Completed</th>
              <th>Programs</th>
            </tr>
          </thead>
          <tbody>
            {organizations.map((organization) => (
              <tr key={organization.id}>
                <td>{organization.representative_name}</td>
                <td><Link to={{
                  pathname: `/organizations/profile/${encodeURI(organization.organization_name)}`,
                  state: { organization }
                }}>{organization.organization_name}</Link></td>
                <td>{organization.email}</td>
                <td>{organization.website}</td>
                <td>{organization.timezone}</td>
                <td>{organization.phone}</td>
                <td>tba</td>
                <td>tba</td>
                <td>tba</td>
                <td>tba</td>
                <td><Link to={{
                  pathname: `/organizations/portfolio/${encodeURI(organization.organization_name)}`,
                  state: { organization }
                }}>View</Link></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
}
