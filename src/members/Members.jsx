import React, { useState, useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { BASE_API } from "../config";
import { SERVICE_UNAVAILABLE_ERROR } from "../messages";
import "./Member.css";

export default function Members() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [members, setMembers] = useState([]);
  const { access_token } = useContext(AuthContext);

  const requestMembersList = {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${access_token}`,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    fetch(`${BASE_API}/users`, requestMembersList)
      .then(async response => {
        const data = await response.json();
        if (response.ok) {
          return setMembers(data);
        }
        setErrorMessage(data.message);
      })
      .catch(() =>
        setErrorMessage(SERVICE_UNAVAILABLE_ERROR)
      )

  }, [requestMembersList]);

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
      <div className="container-members">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Members List</h1>
          </div>
        </div>
        <Table striped bordered hover className="membersList">
          <thead>
            <tr>
              <th>Name</th>
              <th>Skills</th>
              <th>Need Mentoring</th>
              <th>Available To Mentor</th>
              <th>Programs Completed</th>
              <th>Current Availability</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td><Link to={{
                  pathname: `/members/profile/${member.username}`,
                  state: { member }
                }}>{member.name}</Link></td>
                <td>{member.skills}</td>
                <td>{member.need_mentoring ? "True" : "False"}</td>
                <td>{member.available_to_mentor ? "True" : "False"}</td>
                <td>tba</td>
                <td>tba</td>
                <td>{member.location}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
}
