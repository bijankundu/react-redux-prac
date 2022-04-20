import React from "react";
import { useSelector } from "react-redux";

import vegIcon from "./../../assets/vegicon.png";
import nonvegIcon from "./../../assets/nonvegicon.png";

import styles from "./cartItemsRow.module.scss";

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
        {food_type === "nonveg" ? (
          promoCode.toUpperCase() === "NONVEG50" ? (
            <>
              <h6 className={styles["discounted"]}>{`₹${price}`}</h6>
              <h6>{`₹${Number(price) / 2}`}</h6>
            </>
          ) : (
            <h6>{`₹${price}`}</h6>
          )
        ) : (
          <h6>{`₹${price}`}</h6>
        )}
      </div>
    </div>
  );
};

export default CartItemsRow;
