import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

import { AuthContext } from "../AuthContext";
import "./sidebar.css";

import image from "../assets/images/AnitaBLogo.png";

const Sidebar = (props) => {
  const { user, isAuth, login, logout } = useContext(AuthContext);
  const [isNotActive, setNotActive] = useState("true");
  const [isDropdownActive, setDropdownActive] = useState("false");
  var barsIcon = <i className="fas fa-bars"></i>;
  var crossIcon = <i className="fas fa-times-circle"></i>;
  return (
    <div>
      <div className="wrapper">
        <nav id="sidebar" className={isNotActive ? "active" : ""}>
          <button
            type="button"
            id="sidebarCollapse"
            onClick={() => setNotActive(!isNotActive)}
            className="btn btn-custom"
          >
            <span className={isNotActive ? "" : "hidden"}>{barsIcon}</span>
            <span className={isNotActive ? "hidden" : ""}>{crossIcon}</span>
          </button>
          {isAuth && (
            <div className="sidebar-header">
              <img
                alt="user_logo"
                src={image}
                className="rounded-circle usr-image"
                height={isNotActive ? "20" : "70"}
                width={isNotActive ? "20" : "70"}
              ></img>
              <h3>{user}</h3>
            </div>
          )}

          <ul className = {isAuth ? "list-unstyled components" : "list-unstyled components margin-list"}>
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
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id={`tooltip-$'bottom'`}>{!isAuth ? `Login to Open` : ""}</Tooltip>
                }
              >
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
              </OverlayTrigger>
              <ul
                className={
                  isDropdownActive ? "list-unstyled  collapse" : "list-unstyled" +
                  !isAuth ? "collapse" : ""
                }
                id="homeSubmenu"
              >
                <li className="dropdown-item">
                  <Link to="/portfolio">Portfolio</Link>
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
              <Link to="/organization-profile">My Organization</Link>
            </li>
            {!isAuth ? (
              <>
                <li className="list-item">
                  <i className="fas fa-edit icon-color"></i>
                  <Link to="/register">Register</Link>
                </li>
                <li className="list-item">
                <i class="fas fa-sign-in-alt icon-color"></i>
                  <Link to="/login" onClick={login}>
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <li className="list-item">
                <i className="fas fa-building icon-color"></i>
                <Link to="/" onClick={logout}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
