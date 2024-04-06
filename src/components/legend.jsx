import React from "react";

function Legend({ legend1, legend2 }) {
  return (
    <div className="text-right text-pink-500 animate-fadeIn pt-10">
      <p className="font-semibold text-2xl ">{legend1}</p>
      <p className="font-semibold text-2xl">{legend2}</p>
    </div>
  );
}

export default Legend;
