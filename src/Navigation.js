import React  from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import './Nav.css'


export default function Navigation() {
    return (
      <div className="topnav">
               <Navbar className="ml-auto" expand="lg" style={{borderTop:' 2px solid #54BCEB'}}>
               <Navbar.Toggle aria-controls='responsive-navbar-nav' />
               <Navbar.Collapse id="responsive-navbar-nav">
               <Nav classname="mr-auto">
                 <div className="nav-items">
                      <Link to="\" style={{textDecoration:"none"}}>
                         <li >About Us</li>
                      </Link>
                      <Link to="\" style={{textDecoration:"none"}}>
                          <li >Services</li>
                      </Link>
                      <Link to="\" style={{textDecoration:"none"}}>
                          <li >Membership</li>
                      </Link>
                      <Link to="\" style={{textDecoration:"none"}}>
                          <li>FaQs</li>
                      </Link>
                      <Link to="\" style={{textDecoration:"none"}}>
                          <li>Contact</li>
                      </Link>
                      <Link to="\" style={{textDecorationColor: "blue",textDecoration:"none"}}>
                          <li >Sign In</li>
                      </Link>
                      <Link to="\" style={{textDecoration:"none"}}>
                          <li className="active" >Sign Up</li>
                      </Link>
                 
                  </div>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
             </div>
         

       
    )
}
