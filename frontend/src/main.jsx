import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer } from "react-toastify";
// eslint-disable-next-line import/no-extraneous-dependencies
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IsDesktopProvider } from "./contexts/IsDesktopContext";
import Root from "./routes/Root";
import Formation from "./pages/formation/Formation";
import Home from "./pages/home/Home";
import PlatformTutorial from "./pages/platformTutorial/PlatformTutorial";
import TutorialChoice from "./pages/tutorialChoice/TutorialChoice";
import LevelUser from "./pages/levelUser/LevelUser";
import Footer from "./components/footer/Footer";
import LegalNotice from "./pages/legalNotice/LegalNotice";
import PersonalData from "./pages/personalData/PersonalData";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Parcours from "./pages/parcours/Parcours";
import Child from "./routes/Child";
import CreateTutorialPage from "./pages/createTutorial/CreateTutorialPage";
import UpdateTutorialPage from "./pages/updateTutorial/UpdateTutorialPage";
import SelectTutorialPage from "./pages/selectTutorial/SelectTutorialPage";
import TutorialExplication from "./components/tutorialExplication/TutorialExplication";
import SearchPage from "./pages/search/SearchPage";
import Profile from "./pages/profile/Profile";
import ModificationProfile from "./pages/modificationProfile/ModificationProfile";
import GestionUsers from "./pages/admin/GestionUsers";
import UserInfo from "./pages/admin/UserInfo";
import { decodeTokenAndExtractRole } from "./services/authService";

const { userRole } = decodeTokenAndExtractRole();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: userRole && <Home />,
      },
      {
        path: "/formations",
        element: userRole && <Formation />,
      },
      {
        path: "/formations/tutorials/:id",
        element: userRole && <TutorialChoice />,
      },
      {
        path: "/platformTutorial",
        element: userRole && <PlatformTutorial />,
      },
      {
        path: "/levelUser",
        element: userRole && <LevelUser />,
      },
      {
        path: "/footer",
        element: userRole && <Footer />,
      },
      {
        path: "/legalNotice",
        element: userRole && <LegalNotice />,
      },
      {
        path: "/personalData",
        element: userRole && <PersonalData />,
      },
      {
        path: "/register",
        element: userRole && <Register />,
      },
      {
        path: "/login",
        element: userRole && <Login />,
      },
      {
        path: "/profile",
        element: userRole && <Profile />,
      },
      {
        path: "/modificationProfile",
        element: userRole && <ModificationProfile />,
      },
      {
        path: "/admin/gestion",
        element: userRole && <GestionUsers />,
      },
      {
        path: "/admin/user/:userId",
        element: userRole && <UserInfo />,
      },
    ],
  },
  {
    path: "/",
    element: <Child />,
    children: [
      {
        path: "/tutorials/createTutorial",
        element: userRole && <CreateTutorialPage />,
      },
      {
        path: "/tutorials/updateTutorial/:tutorialId",
        element: userRole && <UpdateTutorialPage />,
      },
      {
        path: "/formations/:formationId",
        element: userRole && <SelectTutorialPage />,
      },
      {
        path: "/formations/parcours",
        element: userRole && <Parcours />,
      },
      {
        path: "/formations/tutorials/explication/:id",
        element: userRole && <TutorialExplication />,
      },
      {
        path: "/formations/tutorials/video/:id",
        element: userRole && <TutorialExplication />,
      },
      {
        path: "/formations/tutorials/quizz/:id",
        element: userRole && <TutorialExplication />,
      },
      {
        path: "/search",
        element: userRole && <SearchPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IsDesktopProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </IsDesktopProvider>
  </React.StrictMode>
);
