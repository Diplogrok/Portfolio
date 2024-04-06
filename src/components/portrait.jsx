import React, { useState, useEffect } from "react";
import portraitImg from "../assets/images/Portrait.jpg";
import Description from "./description";
import data from "../assets/datas/text.json";

function Portrait({ isNightMode, mode }) {
  const { text1, text2, text3, text4, text5 } = data;
  let rectangleColor;
  if (mode === "available") {
    rectangleColor = isNightMode
      ? "bg-purple-800"
      : "texture-effect bg-purple-300 ";
  } else if (mode === "unavailable") {
    rectangleColor = isNightMode
      ? "bg-teal-600"
      : "texture-effect bg-teal-400 ";
  }

  let progressBarColor;
  if (mode === "available") {
    progressBarColor = isNightMode ? "bg-teal-600" : "bg-teal-400 ";
  } else if (mode === "unavailable") {
    progressBarColor = isNightMode ? "bg-purple-800" : "bg-purple-300 ";
  }

  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgressWidth(100);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative mt-32 mb-32 flex">
      <div className={`top-0 left-0 ${rectangleColor} w-64 h-96`} />
      <div className="absolute top-0 left-20 w-96 h-96 rounded-full overflow-hidden">
        <img
          src={portraitImg}
          alt="Portrait"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <Description
        text1={text1}
        text2={text2}
        text3={text3}
        text4={text4}
        text5={text5}
      />
      <div
        className={`absolute top-80 bottom-0 left-0 rounded-r-lg ${progressBarColor} h-10`}
        style={{
          width: `${progressWidth}%`,
          transition: "width 0.8s ease-in-out",
        }}
      />
    </div>
  );
}

export default Portrait;
