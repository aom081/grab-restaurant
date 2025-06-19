import React from "react";

const Card = ({ title, type, img, onDelete, onEdit }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg">
        <figure>
          <img
            src={img}
            alt={title}
            className="rounded-t-lg object-cover w-full h-56" // Fixed size for picture
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{type}</p>
          <div className="card-actions justify-end gap-2">
            <button className="btn btn-error" onClick={onDelete}>
              Delete
            </button>
            <button className="btn btn-warning" onClick={onEdit}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
