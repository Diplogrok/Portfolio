import React from "react";
import { useModeContext } from "../context/ModeContext";

function Description({ text1, text2, text3, text4, text5 }) {
  const { textColor } = useModeContext();
  return (
    <div className="z-50">
      <div className={`${textColor}`}>
        <p className="font-black text-sm sm:text-3xl font-mono">{text1}</p>
        <p className="font-bold text-sm sm:text-2xl font-mono">{text2}</p>
        <p className="text-xs sm:text-2xl font-mono">{text3}</p>
        <p className="pt-0 sm:pt-2 font-bold text-sm sm:text-2xl font-mono">
          {text4}
        </p>
        <p className="pt-1 text-sm sm:text-2xl font-mono">{text5}</p>
      </div>
    </div>
  );
}

export default Description;
