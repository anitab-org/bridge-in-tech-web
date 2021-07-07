import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

import { AuthContext } from "../AuthContext";
import "./sidebar.css";
import image from "../assets/images/AnitaBLogo.png";

export default function Sidebar() {
  const { user, isAuth } = useContext(AuthContext);
  const [isNotActive, setNotActive] = useState("true");
  const [isDropdownActive, setDropdownActive] = useState("false");
  var barsIcon = <i className="fas fa-bars"></i>;
  var crossIcon = <i className="fas fa-times-circle"></i>;
  if(isAuth){
    return (
      <div>
        <div className="wrapper">
          <nav id="sidebar" className={isNotActive ? "sidebar-active" : ""}>
            <button
              type="button"
              id="sidebarCollapse"
              onClick={() => setNotActive(!isNotActive)}
              className="btn btn-custom"
            >
              <span className={isNotActive ? "" : "hidden"}>{barsIcon}</span>
              <span className={isNotActive ? "hidden" : ""}>{crossIcon}</span>
            </button>
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
  
            <ul className="list-unstyled components">
              <li className="list-item">
                <Link to="/members" className="sidebar-link">
                  <i className="fas fa-briefcase icon-color"></i>
                  <span className="sidebar-link-name">Members</span>
                </Link>
              </li>
              <li className="list-item">
                <Link to="/organizations" className="sidebar-link">
                  <i className="fas fa-building icon-color"></i>
                  <span className="sidebar-link-name">Organizations</span>
                </Link>
              </li>
              <li className="list-item">
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={
                    <Tooltip id={`tooltip-$'bottom'`}>
                      {!isDropdownActive ? "Close My Space" : "Open My Space"}
                    </Tooltip>
                  }
                >
                  <Link
                    to="/portfolio"
                    href="#homeSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="dropdown-toggle sidebar-link"
                    onClick={() => setDropdownActive(!isDropdownActive)}
                  >
                    <i className="fas fa-user-alt icon-color"></i>
                    <span className="sidebar-link-name">My Space</span>
                  </Link>
                </OverlayTrigger>
                <ul
                  className={
                    isDropdownActive ? "list-unstyled  collapse" : "list-unstyled"
                  }
                >
                  <li className="dropdown-item">
                    <Link to="/portfolio" className="sidebar-link">Portfolio</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/personal-details" className="sidebar-link">Personal Details</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/additional-info" className="sidebar-link">Additional Info</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/personal-background" className="sidebar-link">Personal Background</Link>
                  </li>
                </ul>
              </li>
              <li className="list-item">
                <Link to="/request-history" className="sidebar-link">
                  <i className="fas fa-history icon-color"></i>
                  <span className="sidebar-link-name">Request History</span>
                </Link>
              </li>
              <li className="list-item">
                <Link to="/organization-profile" className="sidebar-link">
                  <i className="fas fa-sitemap icon-color"></i>
                  <span className="sidebar-link-name">My Organization</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }else{
    return (<></>);
  }
}
