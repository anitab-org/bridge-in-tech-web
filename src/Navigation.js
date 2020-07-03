import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom"
import { SessionUser } from "./Routes";
import Cookies from "js-cookie";
import _ from "underscore";

const authenticationChecker = ({ user }) => {
    return _.isEmpty(user) ?
        <Nav>
            <Nav.Link tag={Link} href="/register">Register</Nav.Link>
            <Nav.Link tag={Link} href="/login">Login</Nav.Link>
        </Nav>
        :
        <Nav>
            <Nav.Link tag={Link} href="/logout">Logout</Nav.Link>
        </Nav>
}

export default function Navigation({ user }) {
    // const user = useContext(SessionUser);
    // const user = Cookies.get("user");
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
                        {authenticationChecker({ user })}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
