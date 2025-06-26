import React from "react";

const Card = ({ id, title, type, img }) => {
  
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/restaurants/${id}`, { 
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("Restaurant deleted successfully!");
          // Optionally, you can refresh the page or update the state to remove the deleted restaurant
          window.location.reload();
        } else {
          alert("Failed to delete restaurant. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error deleting restaurant:", error);
        alert("An error occurred while deleting the restaurant. Please try again.");
      });
  }
  return (
    <div>
      <div className="card bg-base-100 w-96 h-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg">
        <figure>
          <img
            src={img}
            alt={title}
            className="rounded-t-lg object-cover w-full h-56"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{type}</p>
          <div className="card-actions justify-end gap-2">
            <button className="btn btn-error"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
            <a className="btn btn-warning" href={`/edit/${id}`}>
              Edit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
