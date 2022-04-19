import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import MenuItemCard from "../../components/MenuItemCard";

import styles from "./home.module.scss";

import samplMenuData from "./../../sampleData.json";

const Home = () => {
  const totalQty = useSelector((state) => state.cartItems.totalQty);
  const navigate = useNavigate();

  return (
    <main className={styles.container}>
      <section className={styles["food-card-container"]}>
        {samplMenuData.food_items.map((item) => {
          return <MenuItemCard key={item.id} itemDetails={item} />;
        })}
      </section>

      {totalQty > 0 && (
        <div className={styles["bottom-fixed-container"]}>
          <p>{`Total Items : ${totalQty}`}</p>
          <button onClick={() => navigate("/checkout")}>Go to cart</button>
        </div>
      )}
    </main>
  );
};

export default Home;
