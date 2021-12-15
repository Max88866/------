import React from "react";
import "./skin-store.css";
import { AiOutlineSkin } from "react-icons/ai";

export const SkinStore = () => {
  return (
    <div className="skin-store">
      <AiOutlineSkin size={30} className="skin-store_icon" />
      <span className="skin-store_tag"> Skins Store </span>
    </div>
  );
};
