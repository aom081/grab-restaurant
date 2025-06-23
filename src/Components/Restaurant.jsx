import React from "react";
import Card from "./Card";

const handleEdit = (id) => {
  alert(`Edit restaurant with id: ${id}`);
};

const handleDelete = (id) => {
  alert(`Delete restaurant with id: ${id}`);
};

const Restaurant = ({ restaurants }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-6">
        {restaurants &&
          restaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              title={restaurant.title}
              type={restaurant.type}
              img={restaurant.img}
              onEdit={() => handleEdit(restaurant.id)}
              onDelete={() => handleDelete(restaurant.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Restaurant;
