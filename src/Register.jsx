import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";

//  Form Style guide
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

// Form Validation rules

// RegEx for validation
const nameRegEx = /^[a-zA-Z/\s/-]+$/
const usernameRegEx = /^[a-zA-Z0-9/_]+$/
const emailRegEx = /^[a-zA-Z0-9/_/./+/-]+@+[a-zA-Z0-9/-]+\.[a-zA-Z0-9/-/.]+$/

// Schema for yup
const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be 2 characters at minimum")
        .max(30, "Name must be 30 characters at maximum")
        .matches(
            nameRegEx,
            "Must only contains alphabet but may have whtespace and dash '-' "
        ),
    username: Yup.string()
        .required("Username is required")
        .min(5, "Username must be 5 characters at minimum")
        .max(25, "Username must be 25 characters at maximum")
        .matches(
            usernameRegEx,
            "May contain alphabets or numbers or undescore '_' "
        ),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required")
        .matches(
            emailRegEx,
            "May contain alphabets, numbers, characters '_ . + -' and proper email format 'xxx@xxx.com'"
        ),
    password: Yup.string()
        .min(8, "Password must be 8 characters at minimum")
        .max(64, "Password must be 64 characters at maximum")
        .required("Password is required"),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    terms_and_conditions_checked: Yup.bool().oneOf(
        [true],
        "You must agree to AnitaB.Org Terms and Conditions"
    ),
    availability: Yup.string().required(
        "You must select on of these options. You can always change it later."
    ),
});

const RegisterUser = () => {


    // Grab values and submitForm from context
    const { values, submitForm } = useFormikContext();
    useEffect(() => {

        // POST request using fetch inside useEffect React hook
        const requestRegister = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: values.name,
                username: values.username,
                password: values.password,
                email: values.email,
                terms_and_conditions_checked: values.terms_and_conditions_checked,
                need_mentoring: values.need_mentoring,
                available_to_mentor: values.available_to_mentor
            })
        };
        fetch("http://127.0.0.1:5000/register", requestRegister)
        .then(async response => {
            const data = await response.json();
            if (!response.ok) {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            console.error("There was an error", error);
            });
    
        
    }, [values, submitForm]);
    return null;
};

const Register = () => {
    return (
        <CONTAINER>
            <Formik initialValues={{
                name: "",
                username: "",
                password: "",
                email: "",
                terms_and_conditions_checked: false,
                need_mentoring: false,
                available_to_mentor: false,
            }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));

                        resetForm();
                        setSubmitting(false);
                    }, 1000);
                }}
            >
                {({ values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting }) => (
                        <REGISTERFORM onSubmit={handleSubmit} className="mx-auto">
                            {console.log(values)}
                            <Form.Group controlId="formName">
                                <Form.Label>Name :</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    className={touched.name && errors.name ? "error" : null}
                                />
                                {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
                                {touched.name && errors.name ? (
                                    <div className="error-message">{errors.name}</div>
                                ) : null}
                                />
                            </Form.Group>
                            <Form.Group controlId="formUserame">
                                <Form.Label>Username :</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                    className={touched.username && errors.username ? "error" : null}
                                />
                                {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
                                {touched.username && errors.username ? (
                                    <div className="error-message">{errors.username}</div>
                                ) : null}
                                />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password :</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="password"
                                    placeholder="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className={touched.password && errors.password ? "error" : null}
                                />
                                {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
                                {touched.password && errors.password ? (
                                    <div className="error-message">{errors.password}</div>
                                ) : null}
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email :</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className={touched.email && errors.email ? "error" : null}
                                />
                                {touched.email && errors.email ? (
                                    <div className="error-message">{errors.email}</div>
                                ) : null}
                            />
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col className="text-center">
                                        <Form.Label>Available to be a : <br></br> (you can select more than one option)</Form.Label>

                                        <Form.Group>
                                            <Row></Row>
                                            <Row>
                                                <Col>
                                                    <Form.Control
                                                        type="checkbox"
                                                        name="available_to_mentor"
                                                        checked={values.available_to_mentor}
                                                        onChange={handleChange}
                                                        // onBlur={handleBlur}
                                                        value={values.available_to_mentor}
                                                        className={touched.available_to_mentor && errors.available_to_mentor ? "error" : null}
                                                    />
                                                </Col>
                                                <Col>
                                                    <Form.Label>
                                                        Mentor
                                                    {touched.available_to_mentor && errors.available_to_mentor ? (
                                                            <div className="error-message">{errors.available_to_mentor}</div>
                                                        ) : null}
                                                    </Form.Label>
                                                </Col>
                                                <Col>
                                                    <Form.Control
                                                        type="checkbox"
                                                        name="need_mentoring"
                                                        checked={values.need_mentoring}
                                                        onChange={handleChange}
                                                        // onBlur={handleBlur}
                                                        value={values.need_mentoring}
                                                        className={touched.need_mentoring && errors.need_mentoring ? "error" : null}
                                                    />
                                                </Col>
                                                <Col>
                                                    <Form.Label>
                                                        Mentee
                                                    {touched.need_mentoring && errors.need_mentoring ? (
                                                            <div className="error-message">{errors.need_mentoring}</div>
                                                        ) : null}
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
                                            checked={values.terms_and_conditions_checked}
                                            onChange={handleChange}
                                            // onBlur={handleBlur}
                                            value={values.terms_and_conditions_checked}
                                            className={touched.terms_and_conditions_checked && errors.terms_and_conditions_checked ? "error" : null}
                                        />
                                    </Col>
                                    <Col sm={10}>
                                        <Form.Label>
                                            By checking this box, I affirm that I have read and accept
                                            to be bound by the AnitaB.org Code of Conduct, Terms, and
                                            Privacy Policy. Further I consent to the use of my
                                            information for the stated purpose.
                                                {touched.terms_and_conditions_checked && errors.terms_and_conditions_checked ? (
                                                <div className="error-message">{errors.terms_and_conditions_checked}</div>
                                            ) : null}
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
                                        disabled={isSubmitting}>
                                        {isSubmitting ? "Please wait..." : "Submit"}
                                        <RegisterUser />
                                    </Button>
                                </Col>
                            </Row>


                        </REGISTERFORM>
                    )}
            </Formik>
        </CONTAINER>
    );
}


export default Register;
