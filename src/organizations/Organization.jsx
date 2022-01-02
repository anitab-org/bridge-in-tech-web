import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Organization() {
  const { state } = useLocation();
  const organization = state.organization;

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">{organization.organization_name} Profile</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form className="myorganization-form mx-auto">
            <form-group controlId="formRepresentativeName">
              <p className="input-control">
                <label htmlFor="representativeName">Representative Name : </label>
                {organization.representative_name}
              </p>
            </form-group>
            <div>
              <br></br>
            </div>
            <form-group controlId="formRepresentative_department">
              <p className="input-control">
                <label htmlFor="">Representative Department : </label>
                {organization.representative_department}
              </p>
            </form-group>
            <div>
              <br></br>
            </div>
            <form-group controlId="formName">
              <p className="input-control">
                <label htmlFor="name">Organization Name : </label>
                {organization.name}
              </p>
            </form-group>
            <div>
              <br></br>
            </div>
            <form-group controlId="formEmail">
              <p className="input-control">
                <label htmlFor="email">Email : </label>
                {organization.email}
              </p>
            </form-group>
            <div>
              <br></br>
            </div>
            <form-group controlId="formAbout">
              <p className="input-control">
                <label htmlFor="about">About the organization : </label>
                {organization.about}
              </p>
            </form-group>
            <div>
              <br></br>
            </div>
            <form-group controlId="formAddress">
              <p className="input-control">
                <label htmlFor="Address">Address : </label>
                {organization.address}
              </p>
            </form-group>
            <div>
              <br></br>
            </div>
            <form-group controlId="formWebsite">
              <p className="input-control">
                <label htmlFor="website">Website :</label>
                {organization.website}
              </p>
            </form-group>
            <div>
              <br></br>
            </div>
            <form-group controlId="formTimezone">
              <p className="input-control">
                <label htmlFor="timezone">Timezone : </label>
                {organization.timezone}
              </p>
            </form-group>
            <div>
              <br></br>
            </div>
            <form-group controlId="formPhone">
              <p className="input-control">
                <label htmlFor="phone">Phone : </label>
                {organization.phone}
              </p>
            </form-group>
            <div>
              <br></br>
            </div>
            <form-group controlId="formStatus">
              <p className="input-control">
                <label htmlFor="status">Status : </label>
                {organization.status}
              </p>
            </form-group>
            <div>
              <br></br>
            </div>
            <form-group controlId="formJoinDate">
              <p className="input-control">
                <label htmlFor="joinDate">Join Date : </label>
                {organization.join_date}
              </p>
            </form-group>
          </form>
        </div>
      </div>
    </div>
  );
}
