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
        className={`font-semibold text-3xl pl-2 mb-20 rounded-l-lg ${backgroundColor} ${textColor}`}>
        Student Journey
      </h2>
      <Studies />
      <h2 className="font-semibold text-3xl text-center text-pink-500">
        👋 Say hi !
      </h2>
      <p className={`mb-8 text-center italic ${textColor}`}>
        Find me on my social networks or email me.
      </p>
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
