import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/fira-code";
import "@fontsource/fira-code/700.css";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
