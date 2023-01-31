import React, { Fragment } from "react";
import Ingredient from "../../burgerBuilder/Ingrediant/Ingredient";

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
        <div className="card-header">
          Order Number: <b>{props.order.id}</b>
        </div>
        <div className="card-body">
          <div>
            <h5>Customer Details</h5>
            <hr />
            <p>Order Time: {props.order.orderTime}</p>
            <p>Phone: {props.order.customer.phone}</p>
            <p>Payment Type: {props.order.customer.paymentType}</p>
            <p>Delivery Address: {props.order.customer.deliveryAddress}</p>
          </div>
          <hr />
          {/* <Ingredient type="bread-top" /> */}
          {ingredients}
          {/* <Ingredient type="bread-bottom" /> */}
        </div>
        <div className="card-footer">
          <h5>Total Price: {props.order.price} BDT</h5>
        </div>
      </div>
    </Fragment>
  );
};
export default Order;
