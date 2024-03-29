import React, { useState } from "react";
import Navbar from "./navbar";
import Background from "./background";
import Content from "./content";
import Portrait from "./portrait";
import Slider from "./slider";

function App() {
  const [mode, setMode] = useState("day");
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "day" ? "night" : "day"));
  };
  const isNightMode = mode === "night";

  const modeAvailability = "available"; // ou "unavailable"

  return (
    <Background mode={mode}>
      <Content>
        <Navbar toggleMode={toggleMode} isNightMode={isNightMode} />
        <Portrait isNightMode={isNightMode} mode={modeAvailability} />
        <Slider isNightMode={isNightMode} />
      </Content>
    </Background>
  );
}

export default App;
