import React from "react";

import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const RegisterForm = ({ values, errors, touched, isSubmitting }) => (
  <div className="container">
    <div className="row mb-5">
      <div className="col-lg-12 text-center">
        <h1 className="mt-5">Register Form</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <Form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <Field
                type="text"
                name="name"
                placeholder="Enter full name"
                className={`form-control ${
                    touched.name && errors.name ? "is-invalid" : ""
                }`}
                />
                <ErrorMessage
                component="div"
                name="name"
                className="invalid-feedback"
                />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <Field
                type="text"
                name="username"
                placeholder="Enter a username"
                className={`form-control ${
                    touched.username && errors.username ? "is-invalid" : ""
                }`}
                />
                <ErrorMessage
                component="div"
                name="username"
                className="invalid-feedback"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                type="email"
                name="email"
                placeholder="Enter email"
                className={`form-control ${
                    touched.email && errors.email ? "is-invalid" : ""
                }`}
                />
                <ErrorMessage
                component="div"
                name="email"
                className="invalid-feedback"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                type={values.togglePassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                className={`form-control ${
                    touched.password && errors.password ? "is-invalid" : ""
                }`}
                />
                <ErrorMessage
                component="div"
                name="password"
                className="invalid-feedback"
                />
            </div>
            <label>
                <Field
                type="checkbox"
                name="togglePassword"
                checked={values.togglePassword}
                />
                Show Password
            </label>
            <br></br>
            <br></br>
            <div className="form-group">
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <Field
                type={values.togglePassword ? "text" : "password"}
                name="passwordConfirm"
                placeholder="Confirm password"
                className={`form-control ${
                    touched.passwordConfirm && errors.passwordConfirm
                    ? "is-invalid"
                    : ""
                }`}
                />
                <ErrorMessage
                component="div"
                name="passwordConfirm"
                className="invalid-feedback"
                />
            </div>
            <div>
                <a className="btn btn-danger" id="cancelbtn" href="/" role="button">
                Cancel
                </a>
                <button
                className="btn btn-success"
                type="submit"
                name="submit"
                value="Signup"
                disabled={isSubmitting}
                >
                {isSubmitting ? "Please wait..." : "Submit"}
                </button>
            </div>
        </Form>
      </div>
    </div>
  </div>
);

const RegisterFormik = withFormik({
  mapPropsToValues({ name, username, email, password, passwordConfirm, togglePassword }) {
    return {
        name: name || "",
        username: username || "",
        email: email || "",
        password: password || "",
        passwordConfirm: passwordConfirm || "",
        togglePassword: togglePassword || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
        .required("name is required")
        .min(2, "Name must be 2 characters at minimum")
        .max(30, "Name must be 30 characters at maximum")
        .matches(
            /^[a-zA-Z/\s/-]+$/,
            "Must only contains alphabet but may have whtespace and dash '-' " 
        ),
    username: Yup.string()
        .required("Username is required")
        .min(5, "Username must be 5 characters at minimum")
        .max(25, "Username must be 25 characters at maximum")
        .matches(
            /^[a-zA-Z0-9/_]+$/,
            "May contain alphabets or numbers or undescore '_' "
        ),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
      .matches(
          /^[a-zA-Z0-9/_/./+/-]+@+[a-zA-Z0-9/-]+\.[a-zA-Z0-9/-/.]+$/,
          "May contain alphabets, numbers, characters '_ . + -' and proper email format 'xxx@xxx.com'"
      ),
    password: Yup.string()
      .min(8, "Password must be 8 characters at minimum")
      .max(64, "Password must be 64 characters at maximum")
      .required("Password is required"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === "test@test.com") {
        setErrors({ email: "User already exist" });
      } else {
        console.log(values);
        resetForm();
      }
      setSubmitting(false);
    }, 100000); // 
  }
})(RegisterForm);

export default function Register() {
    return <RegisterFormik />;
}