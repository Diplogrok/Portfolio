import React from "react";
import { useModeContext } from "../context/ModeContext";
import data from "../assets/datas/text.json";

function Studies() {
  const { textColor } = useModeContext();

  return (
    <div className="sm:pb-28 pb-12 grid sm:grid-cols-2 md:grid-cols-3  gap-4 w-full">
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
                  className="not-italic">
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
