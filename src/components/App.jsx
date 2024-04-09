import React from "react";
import { useModeContext } from "../context/ModeContext";
import Layout from "./Layout";
import Navbar from "./Navbar";
import Portrait from "./Portrait";
import Slider from "./Slider";
import Skills from "./Skills";
import Studies from "./Studies";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const { mode, backgroundColor, textColor } = useModeContext();
  const isNightMode = mode === "night";
  const modeAvailability = "available"; // ou "unavailable"

  return (
    <Layout mode={mode}>
      <Navbar />
      <Portrait isNightMode={isNightMode} mode={modeAvailability} />
      <h1 className={`font-semibold text-5xl pb-20 ${textColor}`}>
        Latest projects
      </h1>
      <Slider />
      <Skills />
      <h2
        className={`font-semibold text-3xl mb-20 rounded-r-lg ${backgroundColor} ${textColor}`}>
        Student Journey
      </h2>
      <Studies />
      <h2
        className={`font-semibold text-3xl mb-20 text-center text-pink-500 ${textColor}`}>
        👋 Say hi !
      </h2>
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
