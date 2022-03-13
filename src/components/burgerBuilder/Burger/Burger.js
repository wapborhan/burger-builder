import React from "react";
import "./Burger.css";
import Ingredient from "../Ingrediant/Ingredient";

const Burger = (props) => {
  let ingrediantArr = props.ingredients
    .map((item) => {
      let amountArr = [...Array(item.amount).keys()];
      return amountArr.map((_) => {
        return <Ingredient type={item.type} key={Math.random()} />;
      });
    })
    .reduce((arr, element) => {
      return arr.concat(element);
    }, []);

  if (ingrediantArr.length === 0) {
    ingrediantArr = <p>Please Add Some Ingredients!</p>;
  }
  console.log(ingrediantArr);
  return (
    <div className="burger">
      <Ingredient type="bread-top" />
      {ingrediantArr}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
