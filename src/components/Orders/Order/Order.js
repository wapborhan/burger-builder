import React, { Fragment } from "react";

const Order = (props) => {
  console.log(props);
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
      <div className="border border-secondary mt-4 shadow rounded p-3">
        <p>Order Number: {props.order.id}</p>
        <div>
          <h3>Customer Details</h3>
          <p>Order Time: {props.order.orderTime}</p>
          <p>Phone: {props.order.customer.phone}</p>
          <p>Payment Type: {props.order.customer.paymentType}</p>
          <p>Delivery Address: {props.order.customer.deliveryAddress}</p>
        </div>
        <hr />
        {ingredients}
        <hr />
        <p>Total Price: {props.order.price} BDT</p>
      </div>
    </Fragment>
  );
};
export default Order;
