import React from "react";
import { FaOpencart } from "react-icons/fa";
import "./cart-block.css";

export const CartBlock = () => {
  return (
    <div className="cart-block">
      <FaOpencart size={30} className="cart-block_icon" />
      <span className="cart-block_total-price"> 2000 руб. </span>
    </div>
  );
};
