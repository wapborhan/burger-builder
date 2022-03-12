import React from "react";
import BreadTop from "../../../assets/burger/top.png";
import BreadBottom from "../../../assets/burger/bottom.png";
import Meat from "../../../assets/burger/meat.png";
import Salad from "../../../assets/burger/salad.png";
import Cheese from "../../../assets/burger/cheese.png";
import "./Ingredient.css";

const Ingredient = (props) => {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom":
      ingredient = (
        <div>
          <img src={BreadBottom} alt="BreadBottom" />
        </div>
      );
      break;
    case "bread-top":
      ingredient = (
        <div>
          <img src={BreadTop} alt="BreadTop" />
        </div>
      );
      break;
    case "meat":
      ingredient = (
        <div>
          <img src={Meat} alt="Meat" />
        </div>
      );
      break;
    case "cheese":
      ingredient = (
        <div>
          <img src={Cheese} alt="Cheese" />
        </div>
      );
      break;
    case "salad":
      ingredient = (
        <div>
          <img src={Salad} alt="Salad" />
        </div>
      );
      break;
    default:
      ingredient = null;
  }
  return <div className="Ingredient">{ingredient}</div>;
};
export default Ingredient;
