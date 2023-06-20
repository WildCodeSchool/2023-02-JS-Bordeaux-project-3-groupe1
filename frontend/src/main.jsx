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
import Footer from "./components/footer/Footer";
import LegalNotice from "./pages/legalNotice/LegalNotice";
import AboutUs from "./pages/aboutUs/AboutUs";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Child from "./routes/Child";
import CreateNameTutorialPage from "./pages/createTutorial/CreateNameTutorialPage";
import CreateObjectifTutorialPage from "./pages/createTutorial/CreateObjectifTutorialPage";
import CreateVideoTutorialPage from "./pages/createTutorial/CreateVideoTutorialPage";
import CreateTutorialPage from "./pages/createTutorial/CreateTutorialPage";
import UpdataNameTutorialPage from "./pages/updateTutorial/UpdataNameTutorialPage";

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
        path: "/formations/tutorials",
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
      {
        path: "/footer",
        element: <Footer />,
      },
      {
        path: "/legalNotice",
        element: <LegalNotice />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <Child />,
    children: [
      {
        path: "/tutorials/createName",
        element: <CreateNameTutorialPage />,
      },
      {
        path: "/tutorials/createObjectif",
        element: <CreateObjectifTutorialPage />,
      },
      {
        path: "/tutorials/createVideo",
        element: <CreateVideoTutorialPage />,
      },
      {
        path: "/tutorials/createQuizz",
        element: <CreateTutorialPage />,
      },
      {
        path: "/tutorials/updateName",
        element: <UpdataNameTutorialPage />,
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
