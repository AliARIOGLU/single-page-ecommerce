import React, { useState } from "react";

import logo from "../assets/logo.svg";
import iconCart from "../assets/iconCart.svg";
import avatar from "../assets/avatar.png";
import Cart from "./Cart";

const Navbar = ({ state, dispatch }) => {
  const [openCart, setOpenCart] = useState(false);

  const { cart } = state;

  const myCount = cart.reduce((acc, cur) => (acc += cur.count), 0);

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="logo">
          <img src={logo} alt="Sneakers Logo" />
        </div>
        <nav>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="user-profile">
          <div className="cart-icon" onClick={() => setOpenCart(!openCart)}>
            {cart.length > 0 && <div className="count-icon">{myCount}</div>}
            <img src={iconCart} alt="" />
          </div>
          {openCart && <Cart state={state} dispatch={dispatch} />}
          <div className="user">
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
