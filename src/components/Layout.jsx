import React from "react";

function Layout({ children, mode }) {
  const nightColor = "bg-gray-900";
  const dayColor = "bg-teal-50";
  const bgColor = mode === "night" ? nightColor : dayColor;

  return (
    <div className={`${bgColor} p-2`}>
      <div className="max-w-screen-2xl mx-auto flex-grow">{children}</div>
    </div>
  );
}

export default Layout;
