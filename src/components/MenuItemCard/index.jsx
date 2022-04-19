import React from "react";
import { FaStar } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";

import vegIcon from "./../../assets/vegicon.png";
import nonvegIcon from "./../../assets/nonvegicon.png";

import styles from "./menuItemCard.module.scss";

const MenuItemCard = ({ itemDetails }) => {
  const { food_type, name, rating, vote_count, description, price, image } = itemDetails;

  return (
    <div className={styles["container"]}>
      <div className={styles["food-img-wrapper"]}>
        <img src={image} alt="" />
      </div>
      <div className={styles["details-wrapper"]}>
        <h4>
          {name} <img src={food_type === "veg" ? vegIcon : nonvegIcon} alt="" className={styles["food-type-icon"]} />
        </h4>
        <p>{description}</p>
        <div className={styles["ratings-container"]}>
          {[...Array(5)].map((_, idx) => {
            return <FaStar key={idx} color={idx + 1 <= rating ? "#f8b400" : "#ecf0f1"} />;
          })}
          <p className={styles["vote-count"]}>{`${vote_count} votes`}</p>
        </div>
      </div>
      <div className={styles["price-quantity-container"]}>
        <h4 className={styles["price"]}>{`₹${price}`}</h4>
        <div className={styles["quantity-container"]}>
          <p>ADD</p>
          {/* <div className={styles["quantity-update-icon"]}>
            <FiMinus color="#95a5a6" />
          </div>
          <p className={styles["quantity"]}>333</p>
          <div className={styles["quantity-update-icon"]}>
            <FiPlus color="#125b50" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
