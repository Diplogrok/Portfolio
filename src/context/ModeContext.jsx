import React, { createContext, useState, useContext } from "react";

const ModeContext = createContext();

export const useModeContext = () => useContext(ModeContext);

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("day");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "day" ? "night" : "day"));
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};
