import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globalstyles.css";
import MainPage from "./main-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>
);
