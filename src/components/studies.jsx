import React from "react";
import { useModeContext } from "../context/ModeContext";
import data from "../assets/datas/text.json";

function Studies() {
  const { textColor } = useModeContext();

  return (
    <div className="pb-40 flex space-x-3 justify-center">
      {data.Studies.map((study, index) => (
        <div key={index} className="max-w-md rounded-xl border overflow-hidden">
          <div className="px-6 py-4">
            <div className={`font-bold text-xl ${textColor}`}>
              {study.title}
            </div>
            <p className={`text-ml font-light italic ${textColor}`}>
              {study.description === "👉 Click here to learn more about it" ? (
                <a
                  href="https://openclassrooms.com/fr/paths/900-integrateur-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 font-bold not-italic">
                  {study.description}
                </a>
              ) : (
                study.description
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Studies;
