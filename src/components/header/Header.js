import React from "react";
import "./Header.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Logo from "./../../assets/logo.png";

const Header = () => {
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
          <NavbarBrand href="#" className="mr-auto ml-md-5 h-25">
            <img src={Logo} className="logo" alt="Logo" />
          </NavbarBrand>
          <Nav className="mr-md-5">
            <NavItem>
              <NavLink href="#" className="NavLink">
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="NavLink">
                Menu 1
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#" className="NavLink">
                Menu 2
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="NavLink">
                Menu 3
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};
export default Header;
