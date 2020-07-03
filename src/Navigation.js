import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom"
import Cookies from "js-cookie";
import _ from "underscore";


function Navigation() {
    const user = Cookies.get("user");
    console.log(user);
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        className="d-inline-block align-top"
                        src="public/assets/images/AnitaBLogo.png"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link tag={Link} href="/">Home</Nav.Link>
                        <Nav.Link tag={Link} href="/members">Members</Nav.Link>
                        <Nav.Link tag={Link} href="/my-space">My Space</Nav.Link>
                        {_.isEmpty(user) &&
                            <Nav>
                                <Nav.Link tag={Link} href="/register">Register</Nav.Link>
                                <Nav.Link tag={Link} href="/login">Login</Nav.Link>
                            </Nav>}
                        {!_.isEmpty(user) &&
                            <Nav>
                                <Nav.Link tag={Link} href="/logout">Logout</Nav.Link>
                            </Nav>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default withRouter(Navigation);
