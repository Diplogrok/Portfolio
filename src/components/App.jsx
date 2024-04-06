import React from "react";
import Navbar from "./navbar";
import Background from "./background";
import Content from "./content";
import Portrait from "./portrait";
import Slider from "./slider";
import { useModeContext } from "../context/ModeContext";
import Skills from "./skills";
import Studies from "./studies";

function App() {
  const { mode, toggleMode, backgroundColor } = useModeContext();
  const isNightMode = mode === "night";
  const modeAvailability = "available"; // ou "unavailable"

  return (
    <Background mode={mode}>
      <Content>
        <Navbar />
        <Portrait isNightMode={isNightMode} mode={modeAvailability} />
        <h1 className="font-semibold text-5xl pb-20 ">Latest projects</h1>
        <Slider />
        <Skills />
        <h2
          className={`font-semibold text-3xl mb-20 rounded-r-lg ${backgroundColor}`}>
          Student Journey
        </h2>
        <Studies />
      </Content>
    </Background>
  );
}

export default App;
