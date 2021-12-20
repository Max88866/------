import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { CartBlock } from "../../components/cart-block";
import { GameStore } from "../../components/game-store";
import { SkinStore } from "../../components/skin-store";

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header_store-title">
          <GameStore />
        </Link>
      </div>
      <div className="wrapper ">
        <Link to="/" className="header_skin-title">
          <SkinStore />
        </Link>
      </div>
      <div className=" header_cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
};
