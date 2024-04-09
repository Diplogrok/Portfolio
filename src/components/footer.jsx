import React from "react";
import { useModeContext } from "../context/ModeContext";

function Footer() {
  const { isNight } = useModeContext();

  return (
    <footer className="relative">
      <div
        className={`absolute left-0 bottom-24 w-full h-0.5 ${
          isNight() ? "bg-teal-50" : "bg-gray-900"
        }`}
      />
      <div
        className={`text-center py-4 ${
          isNight() ? "text-teal-50" : "text-gray-900"
        }`}>
        <div className="absolute left-0 bottom-3 w-full text-center">
          <div className="font-bold text-2xl">All rights reserved©</div>
          <div className="text-2xl">alexiaStephan</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
