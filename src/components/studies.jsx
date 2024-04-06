import React from "react";
import data from "../assets/datas/text.json";

function Studies() {
  return (
    <div className="pb-32 flex space-x-3 justify-center">
      {data.Studies.map((study, index) => (
        <div key={index} className="max-w-md rounded-xl border overflow-hidden">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{study.title}</div>
            <p className="text-gray-700 text-base">{study.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Studies;
