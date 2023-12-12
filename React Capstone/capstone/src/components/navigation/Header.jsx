import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="navbar-container">
      <NavLink to="/">
        <div className="home-link">Home</div>
      </NavLink>

      <NavLink to="/products">
        <div className="products-link">Products</div>
      </NavLink>

      <NavLink to="/my-cart">
        <div className="my-cart-link">My Cart</div>
      </NavLink>

      <NavLink to="/contact">
        <div className="contact-link">Contact</div>
      </NavLink>

      <NavLink to="/about">
        <div className="about-link">About</div>
      </NavLink>
    </div>
  );
}
