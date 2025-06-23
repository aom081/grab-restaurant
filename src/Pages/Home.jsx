import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Restaurant from "../Components/Restaurant";
import Footer from "../Components/Footer";
import AddRestaurant from "./AddRestaurant";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    //call API: get All Restaurants
    fetch("http://localhost:3000/restaurants")
      .then((res) => {
        //convert response to JSON
        return res.json();
      })
      .then((response) => {
        //save to state
        setRestaurants(response)
      })
      .catch((error) => {
        //catch any errors
        console.error("Error fetching restaurants:", error);
      });
  }, []);
  return (
    <div className="mx-auto"> 
      <Navbar />
      <div>
        {/* Header Section */}
        <h1 className="title justify-center text-3xl text-center m-5 p-5">
          Grad Restaurant
        </h1>
      </div>

      {/* search Section */}
      <div className="mb-5 flex justify-center items-center gap-2 ">
        <label className="input">
          <svg
            className="h-[1em] opacity-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
        </label>
      </div>

      {/* Card Section */}
      <div>
        <Restaurant restaurants={restaurants} />
      </div>
    </div>
  );
};

export default Home;
