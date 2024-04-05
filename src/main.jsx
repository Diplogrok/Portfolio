import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App.jsx";
import { ModeProvider } from "./context/ModeContext";
import "./assets/css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </StrictMode>
);
