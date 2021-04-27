import React  from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import './Nav.css'


export default function Navigation() {
    return (
      <div className="topnav">
               <Navbar collapseOnSelect className="ml-auto" expand="lg">
               <Navbar.Toggle aria-controls='responsive-navbar-nav' />
               <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                
                      <Link to="/" className="li">
                         <li >About Us</li>
                      </Link>
                      <Link to="/" className="li">
                          <li >Services</li>
                      </Link>
                      <Link to="/" className="li">
                          <li >Membership</li>
                      </Link>
                      <Link to="/" className="li">
                          <li>FAQs</li>
                      </Link>
                      <Link to="/" className="li">
                          <li>Blogs</li>
                      </Link>
                      <Link to="/" className="li">
                          <li>Contact Us</li>
                      </Link>
                      <Link to="/" className="li">
                          <li className="li_signIn">Sign In</li>
                      </Link>
                      <Link to="/" className="li">
                          <li className="active" >Sign Up</li>
                      </Link>
                 
                  
                </Nav>
                </Navbar.Collapse>
                </Navbar>
             </div>
         

       
    )
}
