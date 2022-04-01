import React, { Component } from "react";
import { Button } from "reactstrap";
import GoBack from "./GoBack";
import axios from "axios";

import { connect } from "react-redux";

import Spinner from "../../spinner/Spinner";

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    purchasable: state.purchasable,
    totalPrice: state.totalPrice,
  };
};

class CheckOut extends Component {
  state = {
    values: {
      deliveryAddress: "",
      phone: "",
      paymentType: "Cash on Delivery",
    },
    isLoading: false,
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
    this.setState({ isLoading: true });
    const order = {
      ingredients: this.props.ingredients,
      customer: this.state.values,
      price: this.props.totalPrice,
      orderTime: new Date(),
    };

    axios
      .post(
        "https://burger-builder-b6aa1-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
        order
      )
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            isLoading: false,
          });
        } else {
          this.setState({
            isLoading: false,
          });
        }
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
    let form = (
      <div>
        <h4 className="border border-secondary shadow-1 rounded p-3">
          Payment : {this.props.totalPrice} BDT
        </h4>
        <form className="border border-secondary shadow-1 rounded p-4">
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
            disabled={!this.props.purchasable}
          >
            Place Order
          </Button>
          <GoBack />
        </form>
      </div>
    );
    return (
      <div className="mt-3">{this.state.isLoading ? <Spinner /> : form}</div>
    );
  }
}

export default connect(mapStateToProps)(CheckOut);
