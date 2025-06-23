import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

const AddRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    title: "",
    type: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurant),
      });
      if (response.ok) {
        alert("Restaurant added successfully!");
        setRestaurant({ title: "", type: "", img: "" }); // Reset form
        // In real app, redirect to home or show success message
      } else {
        alert("Failed to add restaurant. Please try again.");
      }
    } catch (error) {
        console.error("Error adding restaurant:", error);
        alert("An error occurred while adding the restaurant. Please try again.");
    }
  };

  const handleCancel = () => {
    // In real app, redirect to home here
    alert("Cancelled. Returning to home page.");
  };

  return (
    <div className="mx-auto min-h-screen ">
      <Navbar />
      <div>
        {/* Header Section */}
        <h1 className="font-bold text-3xl text-center mt-8 mb-4 text-primary">
          Add Restaurant
        </h1>

        {/* restaurant Section */}
        <restaurant
          className="card  w-full max-w-md mx-auto shadow-xl rounded-lg p-8 bg-img"
          onSubmit={handleSubmit}
        >
          <div className="card-body items-center">
            <label className="w-full mb-2 text-left font-semibold">
              Menu Name
            </label>
            <input
              type="text"
              name="title"
              value={restaurant.title}
              onChange={handleChange}
              placeholder="Enter restaurant name"
              className="input input-bordered input-lg w-full mb-4"
              required
            />

            <label className="w-full mb-2 text-left font-semibold">
              Food Type
            </label>
            <input
              type="text"
              name="type"
              value={restaurant.type}
              onChange={handleChange}
              placeholder="e.g. ชาไข่มุก, กาแฟ"
              className="input input-bordered input-lg w-full mb-4"
              required
            />

            <label className="w-full mb-2 text-left font-semibold">
              Picture URL
            </label>
            <input
              type="text"
              name="img"
              value={restaurant.img}
              onChange={handleChange}
              placeholder="Paste image URL here"
              className="input input-bordered input-lg w-full mb-4"
              required
            />

            {restaurant.img && (
              <img
                src={restaurant.img}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-lg border mb-4"
              />
            )}

            <div className="flex w-full gap-2 mt-2">
              <button type="submit" className="btn btn-primary flex-1">
                Add Restaurant
              </button>
              <button
                type="button"
                className="btn btn-outline flex-1"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
            <button
              type="button"
              className="btn btn-link w-full mt-4 text-blue-600"
              onClick={handleCancel}
            >
              &larr; Return to Home
            </button>
          </div>
        </restaurant>
      </div>
    </div>
  );
};

export default AddRestaurant;
