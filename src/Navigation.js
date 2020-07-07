import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link} from "react-router-dom"
import { AuthContext } from "./AuthContext";


export default function Navigation() {
    const {user, isAuth, login, logout } = useContext(AuthContext);

    return (
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
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/members">Members</Nav.Link>
                            <Nav.Link as={Link} to="/my-space">My Space</Nav.Link>
                            {!isAuth ?
                                <>
                                <Nav.Link as={Link} to="/register">
                                    Register
                                </Nav.Link>
                                    <Nav.Link as={Link} to="/login" onClick={login}>
                                    Login
                                </Nav.Link>
                                </>
                                :
                                <Nav.Link as={Link} to="/" onClick={logout} >
                                    Logout
                                </Nav.Link>
                            }
                        </Nav>
                        {isAuth && <Nav>Welcome back, {user}!</Nav>}
                    </Navbar.Collapse>
                </Navbar>
    );
}
