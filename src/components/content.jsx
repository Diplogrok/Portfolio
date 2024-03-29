import React from "react";

function Content({ children }) {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col">{children}</div>
  );
}

export default Content;
