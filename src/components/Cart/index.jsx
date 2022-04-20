import React from "react";
import { useSelector } from "react-redux";

import CartItemsRow from "./../CartItemsRow";

import styles from "./cart.module.scss";

const Cart = () => {
  const totalQty = useSelector((state) => state.cartItems.totalQty);
  const cartItems = useSelector((state) => state.cartItems.cart);

  return (
    <div className={styles["container"]}>
      <div className={styles["heading-container"]}>
        <h1>Cart</h1>
        <p>{`${totalQty} ITEM${totalQty > 1 ? "S" : ""}`}</p>
      </div>
      <div className={styles["cart-items-container"]}>
        {Object.keys(cartItems).map((key) => {
          const { id, quantity, name, food_type, price } = cartItems[key];
          return <CartItemsRow key={id} food_type={food_type} quantity={quantity} name={name} price={price} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
