import React, { Component } from "react";
import Burger from "./Burger/Burger";

export default class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Burger />
        <p>Burger</p>
      </div>
    );
  }
}
