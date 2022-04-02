import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actionCreators";
import Order from "./Order/Order";

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
        <div class="alert alert-danger mt-5" role="alert">
          <strong>Hello User!</strong> Sorry Faild to Load Orders!
        </div>
      );
    } else {
      if (this.props.orders.lenght === 0) {
        orders = (
          <div class="alert alert-danger mt-5" role="alert">
            <strong>Hello User!</strong> You have no Orders!
          </div>
        );
      } else {
        orders = this.props.orders.map((order) => {
          return <Order order={order} key={order.id} />;
        });
      }
    }

    return (
      <div className="d-flex flex-wrap">
        {this.props.orderLoading ? <Spinner /> : orders}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
