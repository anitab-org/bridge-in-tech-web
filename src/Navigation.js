import React, {useContext}  from "react";
import { Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom"
import './Nav.css'
import { AuthContext } from "./AuthContext";


export default function Navigation() {
    const {isAuth, login, logout } = useContext(AuthContext)
    return (
      <div className="topnav">
               <Navbar collapseOnSelect className="ml-auto" expand="lg">
                <div className="button-right">
               <Navbar.Toggle  aria-controls='responsive-navbar-nav' />
               <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ml-auto">
                
                      <Link to="/about" className="li">
                         <li >About Us</li>
                      </Link>
                      <Link to="/" className="li">
                          <li >Services</li>
                      </Link>
                      <Link to="/" className="li">
                          <li >Membership</li>
                      </Link>
                      <Link to="/faq" className="li">
                          <li>FAQs</li>
                      </Link>
                      <Link to="/aboutUs" className="li">
                          <li>Blogs</li>
                      </Link>
                      <Link to="/getInTouch" className="li">
                          <li>Contact Us</li>
                      </Link>
                      {!isAuth ?
                      <>
                      <Link to="/login"  className="li" onClick={login}>
                          <li className="li_signIn">Sign In</li>
                      </Link>
                      <Link as={Link} to="/register" className="li">
                          <li className="active">Sign Up</li>
                      </Link>
                      </>
                      :
                      <Link to="/"  className="li" onClick={logout}>
                      <li className="li_signIn">Sign Out</li>
                    </Link>}
                 
                  
                </Nav>
                </Navbar.Collapse>
                </div>
                </Navbar>

             </div>
         

       
    )
}
