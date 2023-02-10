import React, { useState } from "react";

import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import iconCartWhite from "../assets/iconCartWhite.svg";
import iconMinus from "../assets/iconMinus.svg";
import iconPlus from "../assets/iconPlus.svg";

const Main = ({ state, dispatch }) => {
  const [image, setImage] = useState(product1);

  const [product, setProduct] = useState({
    name: "Fall Limited Edition Snikers",
    price: 125.0,
    count: 1,
    image,
  });

  const onMinusHandle = () => {
    setProduct({
      ...product,
      count: product.count > 1 ? product.count - 1 : 1,
    });
  };

  const onPlusHandle = () => {
    setProduct({ ...product, count: product.count + 1 });
  };

  const handleClick = (productImage, e) => {
    setImage(productImage);
    document.querySelectorAll(".shortImg").forEach((el) => {
      el.classList.remove("selected");
    });
    e.target.classList.add("selected");
  };

  return (
    <div className="main">
      <div className="main-images">
        <div className="bigImg">
          <img src={image} alt="" />
        </div>
        <div className="images">
          <img
            className="shortImg"
            src={product1}
            alt=""
            onClick={(e) => handleClick(product1, e)}
          />
          <img
            className="shortImg"
            src={product2}
            alt=""
            onClick={(e) => handleClick(product2, e)}
          />
          <img
            className="shortImg"
            src={product3}
            alt=""
            onClick={(e) => handleClick(product3, e)}
          />
          <img
            className="shortImg"
            src={product4}
            alt=""
            onClick={(e) => handleClick(product4, e)}
          />
        </div>
      </div>
      <div className="main-content">
        <h3 className="content-subtitle">SNEAKER COMPANY</h3>
        <h1 className="content-title">
          Fall Limited Edition <br /> Snikers
        </h1>
        <p className="content-desc">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="content-price">
          <div className="price-header">
            <p className="new-price">$125.00</p> <span>50%</span>
          </div>
          <p className="old-price">$250.00</p>
        </div>
        <div className="buttons">
          <div className="left-buttons">
            <button className="minus-btn" onClick={onMinusHandle}>
              <img src={iconMinus} alt="" />
            </button>
            <span className="product-count">{product.count}</span>
            <button className="plus-btn" onClick={onPlusHandle}>
              <img src={iconPlus} alt="" />
            </button>
          </div>
          <div className="right-button">
            <button
              className="cart-btn"
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: product })
              }
            >
              <img src={iconCartWhite} alt="" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
