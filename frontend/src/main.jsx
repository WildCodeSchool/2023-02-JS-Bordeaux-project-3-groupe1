import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Root from "./routes/Root";
import Formation from "./pages/formation/Formation";
import Home from "./pages/home/Home";
import PlatformTutorial from "./pages/platformTutorial/PlatformTutorial";
import TutorialChoice from "./pages/tutorialChoice/TutorialChoice";
import { IsDesktopProvider } from "./contexts/IsDesktopContext";
import LevelUser from "./pages/levelUser/LevelUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/formations",
        element: <Formation />,
      },
      {
        path: "/formations/tutorials/:id",
        element: <TutorialChoice />,
      },
      {
        path: "/platformTutorial",
        element: <PlatformTutorial />,
      },
      {
        path: "/levelUser",
        element: <LevelUser />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IsDesktopProvider>
      <RouterProvider router={router} />
    </IsDesktopProvider>
  </React.StrictMode>
);
