import React, { useContext } from "react";
import { Navbar, Nav, Card, Accordion, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom"
import { AuthContext } from "./AuthContext";
import DropdownMenu from "react-bootstrap/DropdownMenu";


export default function Navigation() {
    const { user, isAuth, login, logout } = useContext(AuthContext);

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
                <Nav className="mr-auto" id="mainNav">
                    <Nav.Item>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Link} to="/" eventKey="0">Home</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Nav>
                                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                                        <Nav.Link as={Link} to="/benefit">Benefit</Nav.Link>
                                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                    </Nav>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Nav.Item>
                    <Nav.Item>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Link} to="/members" eventKey="0">Members</Accordion.Toggle>
                                </Card.Header>
                            </Card>
                        </Accordion>
                    </Nav.Item>
                    <Nav.Item>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Link} to="/organizations" eventKey="0">Organizations</Accordion.Toggle>
                                </Card.Header>
                            </Card>
                        </Accordion>
                    </Nav.Item>
                    <Nav.Item>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Link} eventKey="0">My Space</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Nav>
                                        <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="light" eventKey="0">Profile</Dropdown.Toggle>
                                            <DropdownMenu>
                                                <Nav.Link as={Link} to="/personal-details" eventKey="0">Personal Details</Nav.Link>
                                                <Nav.Link as={Link} to="/additional-info" eventKey="0">Additional Info</Nav.Link>
                                                <Nav.Link as={Link} to="/personal-background" eventKey="0">Personal Background</Nav.Link>
                                            </DropdownMenu>
                                        </Dropdown>
                                        <Nav.Link as={Link} to="/request-history">Request History</Nav.Link>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="light" eventKey="0">My Organization</Dropdown.Toggle>
                                            <DropdownMenu>
                                                <Nav.Link as={Link} to="/organization-portfolio">Portfolio</Nav.Link>
                                                <Nav.Link as={Link} to="/organization-profile">Profile</Nav.Link>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </Nav>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Nav.Item>
                </Nav>
                <Nav className="mr-sm-2">
                    {!isAuth ?
                        <>
                            <Nav.Item>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Link} to="/register" eventKey="0">Register</Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                            </Nav.Item>
                            <Nav.Item>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Link} to="/login" eventKey="0" onClick={login}>Login</Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                            </Nav.Item>
                        </>
                        :
                        <Nav.Item>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Link} to="/" eventKey="0" onClick={logout}>Logout</Accordion.Toggle>
                                </Card.Header>
                            </Card>
                        </Nav.Item>
                    }
                    {isAuth && <Nav.Item>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Link} to="/" eventKey="0">Welcome back, {user}!</Accordion.Toggle>
                            </Card.Header>
                        </Card>
                    </Nav.Item>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
