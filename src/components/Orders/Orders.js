import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actionCreators";
import Order from "./Order/Order";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import Spinner from "../spinner/Spinner";

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    orderLoading: state.orderLoading,
    orderErr: state.orderErr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(fetchOrders()),
  };
};

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  componentDidUpdate() {
    // console.log(this.props);
  }
  render() {
    let orders = null;
    if (this.props.orderErr) {
      orders = (
        <div className="alert alert-danger mt-5" role="alert">
          <strong>Hello User!</strong> Sorry Faild to Load Orders!
        </div>
      );
    } else {
      if (this.props.orders.lenght === 0) {
        orders = (
          <div className="alert alert-danger mt-5" role="alert">
            <strong>Hello User!</strong> You have no Orders!
          </div>
        );
      } else {
        orders = this.props.orders.map((order) => {
          return (
            <tbody key={order.id}>
              <Order order={order} />
            </tbody>
          );
        });
      }
    }
    // console.log(orders);
    return (
      <div className="row mt-5">
        <Table hover>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Mobile</th>
              <th> Price</th>
              <th>Details</th>
            </tr>
          </thead>
          {this.props.orderLoading ? <Spinner /> : orders}
        </Table>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
