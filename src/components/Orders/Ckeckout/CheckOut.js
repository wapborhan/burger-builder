import React, { Component } from "react";
import { Button } from "reactstrap";
import GoBack from "./GoBack";

import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
  };
};

class CheckOut extends Component {
  state = {
    values: {
      deliveryAddress: "",
      phone: "",
      paymentType: "Cash on Delivery",
    },
  };

  goBack = () => {
    this.props.history.goBack("/");
  };
  componentDidMount() {}

  inputChangeHandler = (e) => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });
  };

  submitHandler = () => {
    console.log(this.state.values);
  };

  render() {
    return (
      <div className="mt-3">
        <form className="border border-secondary shadow-1 rounded p-5">
          <textarea
            name="deliveryAddress"
            id="deliveryAddress"
            value={this.state.values.deliveryAddress}
            className="form-control"
            cols="10"
            rows="10"
            placeholder="Your Address"
            onChange={(e) => this.inputChangeHandler(e)}
          ></textarea>
          <br />
          <div className="d-flex w-100">
            <input
              type="text"
              name="phone"
              id="phone"
              value={this.state.values.phone}
              className="form-control w-75 mx-auto"
              onChange={(e) => this.inputChangeHandler(e)}
              placeholder="Your Phone Number"
            />

            <select
              name="paymentType"
              className="form-control w-75 ms-3"
              value={this.state.values.paymentType}
              onChange={(e) => this.inputChangeHandler(e)}
              id=""
            >
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Bkash">Bkash</option>
            </select>
          </div>
          <br />
          <Button
            color="success"
            className="ms-auto"
            onClick={this.submitHandler}
          >
            Place Order
          </Button>
          <GoBack />
        </form>
      </div>
    );
  }
}

export default CheckOut;
