import React from "react";
import ClassNames from "classnames";
import "./button.css";

export const Button = ({ onClick, type, children, size = "s" }) => {
  const btnClass = ClassNames({
    btn: true,
    "btn--secondary": type === "secondary",
    "btn--primary": type === "primary",
    "btn--small": size === "s",
    "btn--medium": size === "m",
  });
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
