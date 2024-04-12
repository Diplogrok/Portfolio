import React from "react";
import { useModeContext } from "../context/ModeContext";

function Card({ title, description, imageUrl }) {
  const { textColor, getColor } = useModeContext();
  const iconColor = getColor();
  return (
    <div className="rounded-xl border overflow-hidden flex flex-col items-center ">
      <svg
        className="pb-10 pt-10 max-w-44 transition-transform transform hover:scale-110"
        dangerouslySetInnerHTML={{ __html: imageUrl }}
        style={{ fill: iconColor }}
        alt="logo"
      />
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
