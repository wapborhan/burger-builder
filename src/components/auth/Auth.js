import React, { Component } from "react";
import { Formik } from "formik";

export default class Auth extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordconfirm: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <div className="mt-4">
              <form onSubmit={handleSubmit}>
                <input
                  name="email"
                  className="form-control"
                  placeholder="Enter your Email"
                  value={values.email}
                  onChange={handleChange}
                />
                <br />
                <input
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                />
                <br />
                <input
                  name="passwordconfirm"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={values.passwordconfirm}
                  onChange={handleChange}
                />
                <br />
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}
