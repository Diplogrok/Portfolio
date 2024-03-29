import React from "react";

function Background({ children, mode }) {
  const nightColor = "bg-gray-900";
  const dayColor = "bg-teal-50";
  const bgColor = mode === "night" ? nightColor : dayColor;
  return <div className={`${bgColor} min-h-screen w-screen`}>{children}</div>;
}

export default Background;
