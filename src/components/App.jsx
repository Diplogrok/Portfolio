import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout mode={mode}>
      <Navbar />
      <Portrait isNightMode={isNightMode} mode={modeAvailability} />
      <h1
        className={`font-semibold sm:text-5xl text-2xl sm:pb-20 pb-10 ${textColor}`}>
        Latest projects
      </h1>
      <Slider isMobile={isMobile} />
      <Skills />
      <h2
        className={`font-semibold sm:text-3xl text-xl pl-2 sm:mb-20 mb-10 rounded-l-lg ${backgroundColor} ${textColor}`}>
        Student Journey
      </h2>
      <Studies />
      <h2 className="font-semibold sm:text-3xl text-xl text-center text-pink-500">
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
