import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./../pages/Home";
import Checkout from "./../pages/Checkout";
import Order from "./../pages/Order";

const publicRoutes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/checkout",
    Component: Checkout,
  },
  {
    path: "/order",
    Component: Order,
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}
    </Routes>
  );
};

export default AppRoutes;
