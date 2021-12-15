import React from "react";
import "./game-store.css";
import { BiStoreAlt } from "react-icons/bi";

export const GameStore = () => {
  return (
    <div className="game-store">
      <BiStoreAlt size={30} className="game-store_icon" />
      <span className="game-store_tag"> Game Store </span>
    </div>
  );
};
