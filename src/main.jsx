import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import Home from "./Pages/Home.jsx";
import AddRestaurant from "./Pages/AddRestaurant.jsx";
import Footer from "./Components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AddRestaurant />,
    <Footer />,
  </StrictMode>
);
