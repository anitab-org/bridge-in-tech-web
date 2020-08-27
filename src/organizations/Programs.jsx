import React, { useEffect, useState, useContext} from "react";
import { Table } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { BASE_API } from "../config";
import { SERVICE_UNAVAILABLE_ERROR } from "../messages";


export default function Programs() {
    const { state } = useLocation();
    const organization = state.organization;
    const [responseMessage, setResponseMessage] = useState(null);
    const [programs, setPrograms] = useState(null);
    const { access_token } = useContext(AuthContext);

    const requestOrganization = {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${access_token}`,
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      };

      useEffect(() => {
          fetch(`${BASE_API}/organizations/${organization.id}/programs`, requestOrganization)
            .then(async response => {
              const data = await response.json();
              if (response.ok)
                return setPrograms(data);
              return setResponseMessage(data.message);
            })
            .catch(() =>
              setResponseMessage(SERVICE_UNAVAILABLE_ERROR)
            )
          }, []);

          return programs ?
          <div className="container-fluid">
            <div className="top">
              <h1>
                  {organization.organization_name}
              </h1>
            </div>
            <div className="middle">
              <h2>The list of programs offered by {organization.organization_name}</h2>
            </div>
            <div className="bottom">
              <div className="container" id="organizationsList">
                <div className="row mb-5">
                  <div className="col-lg-12 text-center">
                    <h3 className="mt-5">Programs List</h3>
                  </div>
                </div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Program Name</th>
                      <th>Start date</th>
                      <th>End date</th>
                      <th>Target Skills</th>
                      <th>Target Candidate</th>
                      <th>Contact Type</th>
                      <th>Zone</th>
                      <th>Status</th>
                      <th>Creation Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs.map((program) => (
                      <tr key={program.id}>
                        <td><Link to={{
                          pathname: `/organizations/programs/${encodeURI(program.organization_name)}/${encodeURI(program.program_name)}`,
                          state: { program }
                        }}>{program.program_name}</Link></td>
                        <td>{program.start_date}</td>
                        <td>{program.end_date}</td>
                        <td>{program.target_skills.join(", ")}</td>
                        <td>{program.target_candidate}</td>
                        <td>{program.contact_type}</td>
                        <td>{program.zone}</td>
                        <td>{program.status}</td>
                        <td>{program.creation_date}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        : 
        <div>
        <span className="error" name="response" aria-label="response" role="alert">{responseMessage}</span>
        </div>
}