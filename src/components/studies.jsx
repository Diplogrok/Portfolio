import React from "react";
import { useModeContext } from "../context/ModeContext";
import data from "../assets/datas/text.json";

function Studies() {
  const { textColor } = useModeContext();

  return (
    <div className="pb-32 flex space-x-3 justify-center">
      {data.Studies.map((study, index) => (
        <div key={index} className="max-w-md rounded-xl border overflow-hidden">
          <div className="px-6 py-4">
            <div className={`font-bold text-xl mb-2 ${textColor}`}>
              {study.title}
            </div>
            <p className={`text-ml font-light ${textColor}`}>
              {study.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Studies;
