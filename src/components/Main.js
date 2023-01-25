import React from "react";
import Header from "./header/Header";
import BurgerBuilder from "./burgerBuilder/BurgerBuilder";
import Orders from "./Orders/Orders";
import CheckOut from "./Orders/Ckeckout/CheckOut";
import About from "./About/About";
import Auth from "./auth/Auth";
import { Routes, Route, Navigate } from "react-router";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};
const Main = (props) => {
  let routes = null;
  if (props.token === null) {
    routes = (
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<BurgerBuilder />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Navigate replace to="/" />} />
      </Routes>
    );
  }

  return (
    <div>
      <Header />
      <div className="container">{routes}</div>
    </div>
  );
};
export default connect(mapStateToProps)(Main);
