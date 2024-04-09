import React from "react";
import { useModeContext } from "../context/ModeContext";

function Card({ title, description, imageUrl }) {
  const { textColor } = useModeContext();
  return (
    <div className="max-w-md rounded-xl border overflow-hidden">
      <img className="" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className={`font-bold text-xl mb-5 ${textColor}`}>{title}</div>
        <p className={`text-ml font-light italic ${textColor}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
