import React, { useState, useEffect } from "react";
import portraitImg from "../assets/images/Portrait.jpg";

function Portrait({ isNightMode, mode }) {
  let rectangleColor;
  if (mode === "available") {
    rectangleColor = isNightMode ? "bg-purple-800" : "bg-purple-300";
  } else if (mode === "unavailable") {
    rectangleColor = isNightMode ? "bg-teal-600" : "bg-teal-400";
  }

  let progressBarColor;
  if (mode === "available") {
    progressBarColor = isNightMode ? "bg-teal-600" : "bg-teal-400";
  } else if (mode === "unavailable") {
    progressBarColor = isNightMode ? "bg-purple-800" : "bg-purple-300";
  }

  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgressWidth(100);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative mt-32 mb-32">
      <div className={`top-0 left-0 ${rectangleColor} w-64 h-96`} />

      <div className="absolute top-0 left-20 w-96 h-96 rounded-full overflow-hidden">
        <img
          src={portraitImg}
          alt="Portrait"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

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
