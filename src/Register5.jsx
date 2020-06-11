import React, { useState } from "react";
import styled from 'styled-components';
import { Form, Button, Col, Row } from 'react-bootstrap';


const CONTAINER = styled.div`
  background: #F7F9FA;
  height: auto;
  width: 90%;
  margin: 5em auto;
  color: snow;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media(min-width: 786px) {
    width: 60%;
  }

  label {
    color: #24B9B6;
    font-size: 1.2em;
    font-weight: 400;
  }

  h1 {
    color: #24B9B6;
    padding-top: .5em;
  }

  .form-group {
    margin-bottom: 2.5em;
  }
  .error {
    border: 2px solid #FF6565;
  }
  .error-message {
    color: #FF6565;
    padding: .5em .2em;
    height: 1em;
    position: absolute;
    font-size: .8em;
  }

`;

const REGISTERFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 2em;

  @media(min-width: 786px) {
    width: 50%;
  }
`;


export default function Register() {
  // set user data state
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [terms_and_conditions_checked, setTermsCheck] = useState(false);
  const [need_mentoring, setNeedMentoring] = useState(false);
  const [available_to_mentor, setAvailableToMentor] = useState(false);


  const handleSubmit = (event) => {
    console.log(`
        name: ${name}
        username: ${username}
        password: ${password}
        email: ${email}
        terms_and_conditions_checked: ${terms_and_conditions_checked}
        need_mentoring: ${need_mentoring}
        available_to_mentor: ${available_to_mentor}
    `);

    event.preventDefault();
  }

  return (
        <CONTAINER>
            <REGISTERFORM onSubmit={handleSubmit} className="mx-auto">
                            <Form.Group controlId="formName">
                                <Form.Label>Name :</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    onChange={e => setName(e.target.value)}
                                    // onBlur={handleBlur}
                                    value={name}
                                    // className={touched.name && errors.name ? "error" : null}
                                    required
                                />
                                {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
                                {/* {touched.name && errors.name ? ( */}
                                    {/* <div className="error-message">{errors.name}</div> */}
                                {/* ) : null} */}
                                />
                            </Form.Group>
                            <Form.Group controlId="formUserame">
                                <Form.Label>Username :</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    onChange={e => setUsername(e.target.value)}
                                    // onBlur={handleBlur}
                                    value={username}
                                    // className={touched.username && errors.username ? "error" : null}
                                    required
                                />
                                {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
                                {/* {touched.username && errors.username ? (
                                    <div className="error-message">{errors.username}</div>
                                ) : null} */}
                                />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password :</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="password"
                                    placeholder="password"
                                    onChange={e => setPassword(e.target.value)}
                                    // onBlur={handleBlur}
                                    value={password}
                                    // className={touched.password && errors.password ? "error" : null}
                                    required
                                />
                                {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
                                {/* {touched.password && errors.password ? (
                                    <div className="error-message">{errors.password}</div>
                                ) : null} */}
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email :</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={e => setEmail(e.target.value)}
                                    // onBlur={handleBlur}
                                    value={email}
                                    // className={touched.email && errors.email ? "error" : null}
                                    required
                                />
                                {/* {touched.email && errors.email ? (
                                    <div className="error-message">{errors.email}</div>
                                ) : null} */}
                            />
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col className="text-center">
                                        <Form.Label>Available to be a : <br></br> (you can select more than one option)</Form.Label>
                                        <Form.Group>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check 
                                                inline 
                                                name="available_to_mentor" 
                                                label="Mentor" 
                                                type={type} 
                                                checked={available_to_mentor}
                                                onChange={e => setAvailableToMentor(e.target.value)}
                                                id={`inline-${type}-1`} />
                                            <Form.Check 
                                                inline 
                                                name="need_mentoring"
                                                label="Mentee" 
                                                type={type} 
                                                checked={need_mentoring}
                                                onChange={e => setNeedMentoring(e.target.value)}
                                                id={`inline-${type}-2`} />
                                            <Form.Check
                                                inline
                                                label="Both"
                                                type={type}
                                                id={`inline-${type}-3`}
                                            />
                                            </div>
                                        ))}
                                        </Form.Group>
                                        <Form.Group>
                                            <Row></Row>
                                            <Row>
                                                <Col>
                                                    <Form.Control
                                                        type="checkbox"
                                                        name="available_to_mentor"
                                                        // checked={available_to_mentor}
                                                        // onChange={e => setAvailableToMentor(e.target.value)}
                                                        // onBlur={handleBlur}
                                                        // value={false}
                                                        // className={touched.available_to_mentor && errors.available_to_mentor ? "error" : null}
                                                    />
                                                </Col>
                                                <Col>
                                                    <Form.Label>
                                                        Mentor
                                                    {/* {touched.available_to_mentor && errors.available_to_mentor ? (
                                                            <div className="error-message">{errors.available_to_mentor}</div>
                                                        ) : null} */}
                                                    </Form.Label>
                                                </Col>
                                                <Col>
                                                    <Form.Control
                                                        type="checkbox"
                                                        name="need_mentoring"
                                                        // checked={need_mentoring}
                                                        // onChange={e => setNeedMentoring(e.target.value)}
                                                        // onBlur={handleBlur}
                                                        // value={false}
                                                        // className={touched.need_mentoring && errors.need_mentoring ? "error" : null}
                                                    />
                                                </Col>
                                                <Col>
                                                    <Form.Label>
                                                        Mentee
                                                    {/* {touched.need_mentoring && errors.need_mentoring ? (
                                                            <div className="error-message">{errors.need_mentoring}</div>
                                                        ) : null} */}
                                                    </Form.Label>
                                                </Col>
                                            </Row>
                                        </Form.Group>

                                    </Col>


                                </Row>
                            </Form.Group>
                            <Form.Group controlId="formTermsCheck">
                                <Row>
                                    <Col>
                                        <Form.Control
                                            type="checkbox"
                                            name="terms_and_conditions_checked"
                                            checked={terms_and_conditions_checked}
                                            onChange={e => setTermsCheck(e.target.value)}
                                            // onBlur={handleBlur}
                                            // value={false}
                                            // className={touched.terms_and_conditions_checked && errors.terms_and_conditions_checked ? "error" : null}
                                            required
                                        />
                                    </Col>
                                    <Col sm={10}>
                                        <Form.Label>
                                            By checking this box, I affirm that I have read and accept
                                            to be bound by the AnitaB.org Code of Conduct, Terms, and
                                            Privacy Policy. Further I consent to the use of my
                                            information for the stated purpose.
                                                {/* {touched.terms_and_conditions_checked && errors.terms_and_conditions_checked ? (
                                                <div className="error-message">{errors.terms_and_conditions_checked}</div>
                                            ) : null} */}
                                        </Form.Label>
                                    </Col>
                                </Row>
                                />
                            </Form.Group>
                            <Row>
                                <Form.Label>Already register? Login here.</Form.Label>
                            </Row>
                            <Row>
                                <Col sm={4}>

                                    <Row>
                                        <Button variant="primary" href="/login">Login</Button>
                                    </Row>
                                </Col>

                                <Col></Col>
                                <Col sm={4}>
                                    <Button
                                        variant="success"
                                        type="submit"
                                        name="submit"
                                        value="Signup"
                                        // disabled={isSubmitting}>
                                        // {isSubmitting ? "Please wait..." : "Submit"}
                                       
                                    >Sign Up
                                    </Button>
                                </Col>
                            </Row>


                        </REGISTERFORM>
      
    </CONTAINER> 
  );
}