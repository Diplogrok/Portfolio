import React from "react";
import { useModeContext } from "../context/ModeContext";

function Description({ text1, text2, text3, text4, text5 }) {
  const { textColor } = useModeContext();
  return (
    <div className="z-50">
      <div className={`pl-56 pt-56 text-2xl ${textColor}`}>
        <p className="font-black">{text1}</p>
        <p className="font-bold">{text2}</p>
        <p>{text3}</p>
        <p className="pt-1 font-bold">{text4}</p>
        <p className="pt-1">{text5}</p>
      </div>
    </div>
  );
}

export default Description;
