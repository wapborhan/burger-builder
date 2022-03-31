import React, { Component, Fragment } from "react";
import Burger from "./Burger/Burger";
import Controls from "./controls/Controls";
import Summary from "./summary/Summary";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import {
  addIngredient,
  removeIngredient,
  updatePurchasable,
} from "../../redux/actionCreators";

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (igtype) => dispatch(addIngredient(igtype)),
    removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
    updatePurchasable: () => dispatch(updatePurchasable()),
  };
};

class BurgerBuilder extends Component {
  state = {
    modalOpen: false,
  };

  addIngredientHandle = (type) => {
    this.props.addIngredient(type);
    this.props.updatePurchasable();
  };

  removeIngredientHandle = (type) => {
    this.props.updatePurchasable();
    this.props.removeIngredient(type);
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };
  handelCheckout = () => {
    // this.props.history.push("/checkout");
    window.location.replace("/checkout");
    // history("/checkout");
  };
  render() {
    return (
      <Fragment>
        <div className="d-flex flex-md-row flex-column">
          <Burger ingredients={this.props.ingredients} />
          <Controls
            ingredientAdded={this.addIngredientHandle}
            ingredientRemove={this.removeIngredientHandle}
            price={this.props.totalPrice}
            toggleModal={this.toggleModal}
            purchasable={this.props.purchasable}
          />
        </div>
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader>Your Order Summery</ModalHeader>
          <ModalBody>
            <Summary ingredients={this.props.ingredients} />
            <h5>Total Price: {this.props.totalPrice.toFixed(2)} BDT</h5>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.handelCheckout}>
              Continue to Checkout
            </Button>
            <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
