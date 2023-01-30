import React, { Component } from "react";
import { Formik } from "formik";
import { Alert } from "reactstrap";
import { auth } from "../../redux/authActionCreators";
import { connect } from "react-redux";
import "./auth.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Spinner from "../spinner/Spinner";

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (email, password, mode) => dispatch(auth(email, password, mode)),
  };
};

const mapStatetoProps = (state) => {
  return {
    authLoading: state.authLoading,
    authFailedMsg: state.authFailedMsg,
  };
};

class Auth extends Component {
  state = {
    mode: "Sign Up",
    showPassword: "password",
  };
  switchModeHandler = () => {
    this.setState({
      mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up",
    });
  };
  switchShowpasswordHandler = () => {
    this.setState({
      showPassword:
        this.state.showPassword === "password" ? "text" : "password",
    });
  };
  render() {
    let err = null;
    if (this.props.authFailedMsg !== null) {
      err = (
        <Alert color="danger" className="mt-3">
          {this.props.authFailedMsg}
        </Alert>
      );
    }

    let form = null;
    if (this.props.authLoading) {
      form = <Spinner />;
    } else {
      form = (
        <Formik
          initialValues={{
            email: "test@gmail.com",
            password: "123456",
            passwordconfirm: "123456",
          }}
          onSubmit={(values) => {
            this.props.auth(values.email, values.password, this.state.mode);
          }}
          validate={(values) => {
            const errors = {};
            // Email Validation
            if (!values.email) {
              errors.email = "Requred";
            } else if (
              !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                values.email
              )
            ) {
              errors.email = "Invalid Email";
            }
            // Password Validation
            if (!values.password) {
              errors.password = "Requred";
            } else if (values.password.length < 6) {
              errors.password = "Must be atleast 6 Characters";
            }
            if (this.state.mode === "Sign Up") {
              // Confirm Password
              if (!values.passwordconfirm) {
                errors.passwordconfirm = "Requred";
              } else if (values.password !== values.passwordconfirm) {
                errors.passwordconfirm = "Password does not match!";
              }
            }

            //
            // console.log(errors);
            return errors;
          }}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <div className="mt-4 border rounded p-4 shadow">
              <button
                className="btn mb-3 text-white w-100"
                style={{ backgroundColor: "#D70F64" }}
                onClick={this.switchModeHandler}
              >
                Switch to
                {this.state.mode === "Sign Up" ? " Login" : " Sign Up"}
              </button>
              <form onSubmit={handleSubmit}>
                <span className="text-danger">{errors.email}</span>
                <input
                  name="email"
                  className="form-control"
                  placeholder="Enter your Email"
                  value={values.email}
                  onChange={handleChange}
                />

                <br />
                <span className="text-danger">{errors.password}</span>
                <div className="pass">
                  <input
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    type={
                      this.state.showPassword === "password"
                        ? "password"
                        : "text"
                    }
                  />
                  <span type="button" onClick={this.switchShowpasswordHandler}>
                    {this.state.showPassword === "password" ? (
                      <FaEye />
                    ) : (
                      <FaEyeSlash />
                    )}
                  </span>
                </div>
                <br />
                {this.state.mode === "Sign Up" ? (
                  <div>
                    <span className="text-danger">
                      {errors.passwordconfirm}
                    </span>
                    <div className="pass">
                      {" "}
                      <input
                        name="passwordconfirm"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={values.passwordconfirm}
                        onChange={handleChange}
                        type={
                          this.state.showPassword === "password"
                            ? "password"
                            : "text"
                        }
                      />
                      <span
                        type="button"
                        onClick={this.switchShowpasswordHandler}
                      >
                        {this.state.showPassword === "password" ? (
                          <FaEye />
                        ) : (
                          <FaEyeSlash />
                        )}
                      </span>
                    </div>
                  </div>
                ) : null}

                <br />
                <button type="submit" className="btn btn-success w-100">
                  {this.state.mode === "Sign Up" ? "Sign Up" : "Login"}
                </button>
              </form>
            </div>
          )}
        </Formik>
      );
    }

    return (
      <div className="w-50 m-auto">
        {err}
        {form}
      </div>
    );
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Auth);
