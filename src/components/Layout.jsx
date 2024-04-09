import React from "react";

function Layout({ children, mode }) {
  const nightColor = "bg-gray-900";
  const dayColor = "bg-teal-50";
  const bgColor = mode === "night" ? nightColor : dayColor;

  return (
    <div className={`${bgColor}`}>
      <div className="max-w-screen-2xl m-auto">{children}</div>
    </div>
  );
}

export default Layout;
