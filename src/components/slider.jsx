import React, { useState } from "react";
import { useModeContext } from "../context/ModeContext";
import data from "../assets/datas/slider.json";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isMobile = window.innerWidth < 768;
  const { getColor } = useModeContext();

  const bulletColor = getColor();

  const handleBulletClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative m-auto" style={{ width: "80%" }}>
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {data.map((item, index) => (
          <div key={item.id} className="min-w-full flex justify-center">
            <img
              src={
                hoveredIndex === index
                  ? isMobile
                    ? item.mobilePicture
                    : item.focusPicture
                  : item.picture
              }
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
      <div className="pt-4 flex justify-center">
        {data.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full mx-1 cursor-pointer ${
              currentSlide === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
