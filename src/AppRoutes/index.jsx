import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./../pages/Home";

const publicRoutes = [
  {
    path: "/",
    Component: Home,
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
