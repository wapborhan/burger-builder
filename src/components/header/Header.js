import React from "react";
import "./Header.css";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from "./../../assets/logo.png";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};
const Header = (props) => {
  let links = null;
  if (props.token === null) {
    links = (
      <Nav className="mr-md-5">
        <NavItem>
          <NavLink to="/about" className="NavLink">
            About Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login" className="NavLink">
            Login
          </NavLink>
        </NavItem>
      </Nav>
    );
  } else {
    links = (
      <Nav className="mr-md-5">
        <NavItem>
          <NavLink to="/" className="NavLink">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/orders" className="NavLink">
            Orders
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/about" className="NavLink">
            About Us
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
  return (
    <div
      className="nav-menusr"
      style={{
        backgroundColor: "#D70F64",
        color: "#fff",
      }}
    >
      <div className="container">
        <Navbar>
          <NavbarBrand className="mr-auto ml-md-5 h-25">
            <img src={Logo} className="logo" alt="Logo" />
          </NavbarBrand>
          {links}
        </Navbar>
      </div>
    </div>
  );
};
export default connect(mapStateToProps)(Header);
