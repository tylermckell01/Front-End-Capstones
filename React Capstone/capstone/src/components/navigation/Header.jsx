import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import Products from "../pages/Products";
import Contact from "../pages/Contact";
import MyCart from "../pages/MyCart";
import About from "../pages/About";
import Home from "../pages/Home";

export default function Header(props) {
  return (
    <div className="navbar-container">
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/my-cart" component={MyCart} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>

        <NavLink to="/home">
          <div className="home-wrapper">Home</div>
        </NavLink>

        <NavLink to="/products">
          <div className="products-wrapper">Products</div>
        </NavLink>

        <NavLink to="/my-cart">
          <div className="my-cart-wrapper">My Cart</div>
        </NavLink>

        <NavLink to="/contact">
          <div className="contact-wrapper">Contact</div>
        </NavLink>

        <NavLink to="/about">
          <div className="about">About</div>
        </NavLink>
      </Router>
    </div>
  );
}
