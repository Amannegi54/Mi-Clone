import * as React from "react";
import "../style/preNavbar.css";
import { ShoppingCart, expend } from "../Assets/Svg";

const PreNavbar = () => {
  return (
    <div className="preNav">
      <div id="preNav_right">
        <a href="#">MI INDIA</a>
        <span>|</span>
        <a href="#">GET MI STORE APP</a>
        <span>|</span>
        <a href="#">ONLINE HELP</a>
        <span>|</span>
        <a href="#">RETAIL STORE{expend} </a>
      </div>

      <div id="preNav_left">
        <a href="#">SIGN IN</a>
        <span>|</span>
        <a href="#">SIGN UP</a>
        <span>|</span>
        <a className="shopping-cart" href="#">
          {ShoppingCart} CART (0)
        </a>
      </div>
    </div>
  );
};

export default PreNavbar;
