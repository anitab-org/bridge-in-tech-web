import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

import image from "../assets/images/AnitaBLogo.png";

const Sidebar = (props) => {
  const [isActive, setActive] = useState("true");
  const [isDropdownActive, setDropdownActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <div className="wrapper">
        <nav id="sidebar" className={isActive ? "active" : ""}>
          <button
            type="button"
            id="sidebarCollapse"
            onClick={handleToggle}
            className="btn btn-custom"
          >
            <i className={isActive ? "fas fa-bars" : "fas fa-times-circle"}></i>
          </button>
          <div className="sidebar-header">
            <img
              src={image}
              className="rounded-circle usr-image"
              height={isActive ? "20" : "70"}
              width={isActive ? "20" : "70"}
            ></img>
            <h3>User Name</h3>
          </div>

          <ul className="list-unstyled components">
            <li className="list-item">
              <i className="fas fa-briefcase icon-color"></i>
              <Link to="/members">Members</Link>
            </li>
            <li className="list-item">
              <i className="fas fa-building icon-color"></i>
              <Link to="/organizations">Organizations</Link>
            </li>
            <li className="list-item">
              <i className="fas fa-user-alt icon-color"></i>
              <Link
                to="/portfolio"
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
                onClick={() => setDropdownActive(!isDropdownActive)}
              >
                My Space
              </Link>
              <ul
                className={
                  isDropdownActive ? "list-unstyled  collapse" : "list-unstyled"
                }
                id="homeSubmenu"
              >
                <li className="dropdown-item">
                  <Link to="/portfolio">Portfolio</Link>
                  <a href="#">Portfolio</a>
                </li>
                <li className="dropdown-item">
                  <Link to="/personal-details">Personal Details</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/additional-info">Additional Info</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/personal-background">Personal Background</Link>
                </li>
              </ul>
            </li>
            <li className="list-item">
              <i className="fas fa-history icon-color"></i>
              <Link to="/request-history">Request History</Link>
            </li>
            <li className="list-item">
              <i className="fas fa-sitemap icon-color"></i>
              <Link to="/organization-profile">Organization</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
