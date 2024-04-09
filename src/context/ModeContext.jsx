import React, { createContext, useState, useContext } from "react";

const ModeContext = createContext();

export const useModeContext = () => useContext(ModeContext);

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("day");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "day" ? "night" : "day"));
  };

  const isNightMode = mode === "night";

  const textColor = isNightMode ? "text-teal-50" : "text-gray-900";
  const backgroundColor = isNightMode ? "bg-teal-600" : "bg-teal-400";

  const isNight = () => isNightMode;

  const getColor = () => (isNightMode ? "#F0FDFA" : "#111827");

  return (
    <ModeContext.Provider
      value={{
        mode,
        toggleMode,
        textColor,
        backgroundColor,
        isNight,
        getColor,
      }}>
      {children}
    </ModeContext.Provider>
  );
};
