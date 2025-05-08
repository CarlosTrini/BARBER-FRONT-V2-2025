import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/indexApp.css";
import "swiper/swiper-bundle.css";
import "antd/dist/reset.css";
import App from "./App.tsx";




createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
