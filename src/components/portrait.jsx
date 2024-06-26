import React, { useState, useEffect } from "react";
import portraitImg from "/images/Portrait.jpg";
import Description from "./Description";
import data from "../assets/datas/text.json";
import Legend from "./Legend";

function Portrait({ isNightMode, mode }) {
  let rectangleColor;
  let modeAvailabilityText;

  if (mode === "available") {
    rectangleColor = isNightMode
      ? "bg-purple-800"
      : "texture-effect bg-purple-300 ";
    modeAvailabilityText = data.text4.available;
  } else if (mode === "unavailable") {
    rectangleColor = isNightMode
      ? "bg-teal-600"
      : "texture-effect bg-teal-400 ";
    modeAvailabilityText = data.text4.unavailable;
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
    <div className="relative sm:mt-32 mt-10 sm:pb-40 pb-12 flex">
      <div
        className={`top-0 left-0 ${rectangleColor} w-32 h-44 sm:w-64 sm:h-96`}
      />
      <div className="absolute left-10 sm:left-20 flex items-center">
        <img
          src={portraitImg}
          alt="Portrait"
          className="w-44 h-44 sm:w-96 sm:h-96 rounded-full object-cover opacity-60"
        />
        <Description
          text1={data.text1}
          text2={data.text2}
          text3={data.text3}
          text4={modeAvailabilityText}
          text5={data.text5}
        />
      </div>
      <div
        className={`hidden sm:block absolute top-52 bottom-0 left-0 rounded-r-lg ${progressBarColor} h-10 animate-progressBarAnimation`}
        style={{
          width: `${progressWidth}%`,
          transition: "width 0.8s ease-in-out",
        }}>
        <Legend legend1={data.legend1} legend2={data.legend2} />
      </div>
    </div>
  );
}

export default Portrait;
