import React, { Fragment } from "react";

const Order = (props) => {
  // console.log(props);
  const ingredients = props.order.ingredients.map((item) => {
    return (
      <span
        className="border border-secondary mx-2 rounded p-2"
        key={item.type}
      >
        {item.amount} x <span className="text-capitalize"> {item.type}</span>
      </span>
    );
  });
  return (
    <Fragment>
      <div className="card mt-3 mb-3 shadow">
        <div className="card-header">Order Number: {props.order.id}</div>
        <div className="card-body">
          <div>
            <h3>Customer Details</h3>
            <p>Order Time: {props.order.orderTime}</p>
            <p>Phone: {props.order.customer.phone}</p>
            <p>Payment Type: {props.order.customer.paymentType}</p>
            <p>Delivery Address: {props.order.customer.deliveryAddress}</p>
          </div>
          <hr />
          {ingredients}
        </div>
        <div className="card-footer">
          <h5>Total Price: {props.order.price} BDT</h5>
        </div>
      </div>
    </Fragment>
  );
};
export default Order;
