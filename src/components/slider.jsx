import React, { useState } from "react";
import { useModeContext } from "../context/ModeContext";
import data from "../assets/datas/slider.json";

// SVG pour la flèche droite
const RightArrowIcon = ({ arrowColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 512"
    className="w-16 h-16 ">
    <path
      d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z "
      fill={arrowColor}
    />
  </svg>
);

// SVG pour la flèche gauche
const LeftArrowIcon = ({ arrowColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 512"
    className="w-16 h-16">
    <path
      d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"
      fill={arrowColor}
    />
  </svg>
);

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isNight } = useModeContext();

  const arrowColor = isNight() ? "#F0FDFA" : "#111827";

  const handleSlideChange = (direction) => {
    const lastIndex = data.length - 1;
    let newIndex;
    if (direction === "next") {
      newIndex = currentSlide === lastIndex ? 0 : currentSlide + 1;
    } else {
      newIndex = currentSlide === 0 ? lastIndex : currentSlide - 1;
    }
    setCurrentSlide(newIndex);
  };

  return (
    <div className="overflow-hidden relative m-auto" style={{ width: "80%" }}>
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {data.map((item, index) => (
          <div key={item.id} className="min-w-full flex justify-center">
            <img
              src={hoveredIndex === index ? item.focusPicture : item.picture}
              alt={`Slide ${item.id}`}
              className="rounded-lg cursor-pointer border border-purple-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                opacity: hoveredIndex === index ? 1 : 0.4,
                transition: "opacity 0.3s ease",
              }}
            />
          </div>
        ))}
      </div>
      <div
        onClick={() => handleSlideChange("prev")}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer">
        <LeftArrowIcon arrowColor={arrowColor} />
      </div>
      <div
        onClick={() => handleSlideChange("next")}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
        <RightArrowIcon arrowColor={arrowColor} />
      </div>
    </div>
  );
}

export default Slider;
