import React from "react";

import MenuItemCard from "../../components/MenuItemCard";

import styles from "./home.module.scss";

import samplMenuData from "./../../sampleData.json";

const Home = () => {
  return (
    <main className={styles.container}>
      <section className={styles["food-card-container"]}>
        {samplMenuData.food_items.map((item) => {
          return <MenuItemCard key={item.id} itemDetails={item} />;
        })}
      </section>
    </main>
  );
};

export default Home;
