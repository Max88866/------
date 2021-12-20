import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router/";
import { FaOpencart } from "react-icons/fa";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import "./cart-block.css";
import { calcTotalPrice } from "../utils";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.curt.itemInCart);
  const totalPrice = calcTotalPrice(items);
  const history = useHistory();
  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    history.push(`/order`);
  }, [history]);
  return (
    <div>
      <div
        className="cart-block"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      >
        <ItemsInCart quantity={items.length} className="cart-block_items" />
        <FaOpencart size={30} className="cart-block_icon" />
        {totalPrice > 0 ? (
          <span className="cart-block_total-price"> {totalPrice} руб. </span>
        ) : null}
      </div>
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
