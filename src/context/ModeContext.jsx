import React, { createContext, useState, useContext } from "react";

const ModeContext = createContext();

export const useModeContext = () => useContext(ModeContext);

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("day");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "day" ? "night" : "day"));
  };
  const textColor = mode === "day" ? "text-gray-900" : "text-teal-50";
  const backgroundColor = mode === "night" ? "bg-teal-600" : "bg-teal-400";

  return (
    <ModeContext.Provider
      value={{ mode, toggleMode, textColor, backgroundColor }}>
      {children}
    </ModeContext.Provider>
  );
};