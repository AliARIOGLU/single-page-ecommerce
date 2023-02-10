import React from "react";

import iconDelete from "../assets/iconDelete.svg";

const Cart = ({ state, dispatch }) => {
  console.log("cart", state);
  const { cart } = state;

  const myCount = cart.reduce((acc, cur) => (acc += cur.count), 0);
  console.log("count", myCount);

  return (
    <div className="cart">
      <div className="cart-header">Cart</div>
      {cart.length > 0 ? (
        <>
          <div className="cart-body">
            <div className="cart-img">
              <img src={cart[0].image} alt="" />
            </div>
            <div className="cart-desc">
              <p className="cart-name">{cart[0].name}</p>
              <div className="cart-price">
                <p>{`$${cart[0].price}.00 X ${myCount}`}</p>
                <span>{`$${cart[0].price * myCount}.00`}</span>
              </div>
            </div>
            <div
              className="delete"
              onClick={() => dispatch({ type: "DELETE_FROM_CART" })}
            >
              <img src={iconDelete} alt="" />
            </div>
          </div>
          <div className="cart-footer">
            <button>Checkout</button>
          </div>
        </>
      ) : (
        <p className="cart-message">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
