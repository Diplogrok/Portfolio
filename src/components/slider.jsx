import React, { useState } from "react";
import data from "../assets/datas/content.json";

// SVG pour la flèche droite
const RightArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 512"
    className="w-6 h-6">
    <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
  </svg>
);

// SVG pour la flèche gauche
const LeftArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 512"
    className="w-6 h-6">
    <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
  </svg>
);

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform duration-700 ease-in-out "
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {data.map((item) => (
          <div
            key={item.id}
            className="min-w-full flex justify-center opacity-20 ">
            <img src={item.picture} alt={`Slide ${item.id}`} />
          </div>
        ))}
      </div>
      <div
        onClick={() => handleSlideChange("prev")}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer">
        <LeftArrowIcon />
      </div>
      <div
        onClick={() => handleSlideChange("next")}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer">
        <RightArrowIcon />
      </div>
    </div>
  );
}

export default Slider;
