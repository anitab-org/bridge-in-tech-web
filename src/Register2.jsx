import React, { useEffect } from "react";
import { useFormikContext, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ReactstrapRadio } from "reactstrap-formik";

let user = {
  name: "",
  username: "",
  password: "",
  email: "",
  terms_and_conditions_checked: false,
  need_mentoring: false,
  available_to_mentor: false,
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
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
    .required("Confirm Password is required"),
  termsCheck: Yup.bool().oneOf(
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
    if (values.availability === "mentor") values.available_to_mentor = true;
    else if (values.availability === "mentee") values.need_mentoring = true;
    else if (values.availability === "both") {
      values.available_to_mentor = true;
      values.need_mentoring = true;
    } else {
      values.available_to_mentor = false;
      values.need_mentoring = false;
    }

    console.log(values);

    // POST request using fetch inside useEffect React hook

    user.name = values.name;
    user.username = values.username;
    user.password = values.password;
    user.email = values.email;
    user.terms_and_conditions_checked = values.termsCheck;
    user.need_mentoring = values.mentee;
    user.available_to_mentor = values.mentor;

    fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(user),
    });
  }, [values, submitForm]);
  return null;
};

export default function Register2() {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">Register Form</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{
              name: "",
              username: "",
              password: "",
              passwordConfirm: "",
              email: "",
              termsCheck: false,
              togglePassword: false,
              mentee: false,
              mentor: false,
              both: false,
              availability: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false);
              }, 1000); //
            }}
          >
            {({ values, errors, touched, isSubmitting }) => (
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
                <div>
                  <label>
                    <Field
                      type="checkbox"
                      name="togglePassword"
                      checked={values.togglePassword}
                    />
                    Show Password
                  </label>
                </div>
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
                <div className="row">
                  <div className="col-sm">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-sm">
                          <label htmlFor="availability">
                            Available to be a:
                          </label>
                        </div>
                        <div className="col-sm">
                          <Field
                            component={ReactstrapRadio}
                            name="availability"
                            value="mentor"
                            type="radio"
                            label="Mentor"
                          />
                          <Field
                            component={ReactstrapRadio}
                            name="availability"
                            value="mentee"
                            type="radio"
                            label="Mentee"
                          />
                          <Field
                            component={ReactstrapRadio}
                            name="availability"
                            value="both"
                            type="radio"
                            label="Both"
                          />
                        </div>
                        <ErrorMessage
                          component="div"
                          name="availability"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="form-group">
                      <div className="row">
                        <p>Already registered? Login here.</p>
                      </div>
                      <div className="row">
                        <a
                          className="btn btn-primary"
                          id="loginbtn"
                          href="/login"
                          role="button"
                        >
                          Login
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <label htmlFor="termsCheck">
                      <Field
                        type="checkbox"
                        name="termsCheck"
                        checked={values.termsCheck}
                        values="termsCheck"
                        className={`form-control ${
                          touched.termsCheck && errors.termsCheck
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      By checking this box, I affirm that I have read and accept
                      to be bound by the AnitaB.org Code of Conduct, Terms, and
                      Privacy Policy. Further I consent to the use of my
                      information for the stated purpose.
                      <ErrorMessage
                        component="div"
                        name="termsCheck"
                        className="invalid-feedback"
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <a
                    className="btn btn-danger"
                    id="cancelbtn"
                    href="/"
                    role="button"
                  >
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
                <RegisterUser />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
