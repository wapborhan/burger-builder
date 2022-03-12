import React from "react";
import Ingredient from "../Ingrediant/Ingredient";

const Burger = (prosp) => {
  return (
    <div>
      <Ingredient type="bread-top" />
      <Ingredient type="meat" />
      <Ingredient type="salad" />
      <Ingredient type="cheese" />
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
