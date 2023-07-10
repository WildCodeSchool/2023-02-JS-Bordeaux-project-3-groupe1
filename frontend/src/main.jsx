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
import SendEmailUser from "./pages/sendEmailUser/SendEmailUser";

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
      {
        path: "/footer",
        element: <Footer />,
      },
      {
        path: "/legalNotice",
        element: <LegalNotice />,
      },
      {
        path: "/personalData",
        element: <PersonalData />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/modificationProfile",
        element: <ModificationProfile />,
      },
      {
        path: "/admin/gestion",
        element: <GestionUsers />,
      },
      {
        path: "/admin/user/:userId",
        element: <UserInfo />,
      },
    ],
  },
  {
    path: "/",
    element: <Child />,
    children: [
      {
        path: "/tutorials/createTutorial",
        element: <CreateTutorialPage />,
      },
      {
        path: "/tutorials/updateTutorial/:tutorialId",
        element: <UpdateTutorialPage />,
      },
      {
        path: "/formations/:formationId",
        element: <SelectTutorialPage />,
      },
      {
        path: "/formations/parcours",
        element: <Parcours />,
      },
      {
        path: "/formations/tutorials/explication/:id",
        element: <TutorialExplication />,
      },
      {
        path: "/formations/tutorials/video/:id",
        element: <TutorialExplication />,
      },
      {
        path: "/formations/tutorials/quizz/:id",
        element: <TutorialExplication />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/sendEmailUser",
        element: <SendEmailUser />,
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
