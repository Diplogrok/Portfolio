import React from "react";
import Navbar from "./navbar";
import Background from "./background";
import Content from "./content";
import Portrait from "./portrait";
import Slider from "./slider";
import { useModeContext } from "../context/ModeContext";

function App() {
  const { mode, toggleMode } = useModeContext();
  const isNightMode = mode === "night";
  const modeAvailability = "available"; // ou "unavailable"

  return (
    <Background mode={mode}>
      <Content>
        <Navbar />
        <Portrait isNightMode={isNightMode} mode={modeAvailability} />
        <Slider />
      </Content>
    </Background>
  );
}

export default App;
