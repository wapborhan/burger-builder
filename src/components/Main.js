import React from "react";
import Header from "./header/Header";
import BurgerBuilder from "./burgerBuilder/BurgerBuilder";
import Orders from "./Orders/Orders";
import CheckOut from "./Orders/Ckeckout/CheckOut";
import About from "./About/About";
import Auth from "./auth/Auth";

import { Routes, Route } from "react-router";

const Main = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<BurgerBuilder />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};
export default Main;
