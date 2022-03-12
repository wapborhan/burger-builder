import React from "react";
import Header from "./header/Header";
import BurgerBuilder from "./burgerBuilder/BurgerBuilder";

const Main = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <BurgerBuilder />
      </div>
    </div>
  );
};
export default Main;
