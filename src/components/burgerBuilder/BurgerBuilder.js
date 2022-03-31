import React, { Component, Fragment } from "react";
import Burger from "./Burger/Burger";
import Controls from "./controls/Controls";
import Summary from "./summary/Summary";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const INGREDIENT_PRICE = {
  salad: 20,
  cheese: 40,
  meat: 90,
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: [
      { type: "salad", amount: 0 },
      { type: "cheese", amount: 0 },
      { type: "meat", amount: 0 },
    ],
    totalPrice: 80,
    modalOpen: false,
    purchasable: false,
  };

  updatePurchasable = (ingredients) => {
    const sum = ingredients.reduce((sum, element) => {
      return sum + element.amount;
    }, 0);
    this.setState({
      purchasable: sum > 0,
    });
  };

  addIngredientHandle = (type) => {
    const ingredients = [...this.state.ingredients];
    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    for (let item of ingredients) {
      if (item.type === type) item.amount++;
    }

    this.setState({
      ingredients: ingredients,
      totalPrice: newPrice,
    });
    this.updatePurchasable(ingredients);
  };

  removeIngredientHandle = (type) => {
    const ingredients = [...this.state.ingredients];
    const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    for (let item of ingredients) {
      if (item.type === type) {
        if (item.amount <= 0) return;
        item.amount--;
      }
    }

    this.setState({
      ingredients: ingredients,
      totalPrice: newPrice,
    });
    this.updatePurchasable(ingredients);
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
          <Burger ingredients={this.state.ingredients} />
          <Controls
            ingredientAdded={this.addIngredientHandle}
            ingredientRemove={this.removeIngredientHandle}
            price={this.state.totalPrice}
            toggleModal={this.toggleModal}
            purchasable={this.state.purchasable}
          />
        </div>
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader>Your Order Summery</ModalHeader>
          <ModalBody>
            <Summary ingredients={this.state.ingredients} />
            <h5>Total Price: {this.state.totalPrice.toFixed(2)} BDT</h5>
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
