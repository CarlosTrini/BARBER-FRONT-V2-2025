import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes/routes.tsx";
import "./styles/indexApp.css";
import "swiper/swiper-bundle.css";
import { initTheme } from "./utils/initOptions.ts";
// import "antd/dist/reset.css";
// import App from "./App.tsx";

// ROUTES - ROUTER
const router = createBrowserRouter(routes);


// PLUGINS O UTILS QUE SE USAND AL INICIAR EL PROYECTO Y QUE AFECTAN A TODO EL PROYECTO
initTheme();


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
