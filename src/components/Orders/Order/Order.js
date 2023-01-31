import React, { Fragment, useState } from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import Ingredient from "../../burgerBuilder/Ingrediant/Ingredient";

const Order = (props) => {
  const [modal, setModal] = useState(false);

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  let ingredients = props.order.ingredients
    .map((item) => {
      let amountArr = [...Array(item.amount).keys()];
      return amountArr.map((_) => {
        return <Ingredient type={item.type} key={Math.random()} />;
      });
    })
    .reduce((arr, element) => {
      return arr.concat(element);
    }, []);

  return (
    <Fragment>
      <tr>
        <th>{props.order.id}</th>
        <td>{props.order.customer.phone}</td>
        <td> {props.order.price} BDT</td>
        <td>
          <Button color="danger" onClick={handleShow}>
            View
          </Button>
        </td>
      </tr>

      <Modal isOpen={modal} toggle={handleShow} className="modal-lg">
        <ModalHeader toggle={handleClose}>Customer Details</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-md-6">
              <p>Order Time: {props.order.orderTime}</p>
              <p>Phone: {props.order.customer.phone}</p>
              <p>Payment Type: {props.order.customer.paymentType}</p>
              <p>Delivery Address: {props.order.customer.deliveryAddress}</p>
            </div>
            <div className="col-md-6">
              <Ingredient type="bread-top" />
              {ingredients}
              <Ingredient type="bread-bottom" />
            </div>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default Order;
