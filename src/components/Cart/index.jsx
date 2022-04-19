import React from "react";
import { useSelector } from "react-redux";

import vegIcon from "./../../assets/vegicon.png";
import nonvegIcon from "./../../assets/nonvegicon.png";

import styles from "./cart.module.scss";

const CartItemsRow = ({ quantity, name, food_type, price }) => {
  const { promoCode } = useSelector((state) => state.cartItems);

  return (
    <div className={styles["cart-items-row"]}>
      <h5>
        <img src={food_type === "veg" ? vegIcon : nonvegIcon} alt="" className={styles["food-type-icon"]} />
        {name}
      </h5>
      <p>{quantity}</p>
      <div className={styles["price-container"]}>
        {food_type === "nonveg" && promoCode.toUpperCase() === "NONVEG50" && (
          <h6 className={styles["discounted"]}>{`₹${price}`}</h6>
        )}
        <h6>{`₹${Number(price) / 2}`}</h6>
      </div>
    </div>
  );
};

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
