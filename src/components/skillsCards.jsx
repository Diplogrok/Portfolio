import React from "react";

function Card({ title, description, imageUrl }) {
  return (
    <div className="max-w-md rounded-xl border overflow-hidden">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}

export default Card;
