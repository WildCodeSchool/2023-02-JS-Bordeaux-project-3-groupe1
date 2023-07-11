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
import ErrorPage from "./pages/ErrorPage";
import Error404 from "./pages/Error404";
import IsConnectUser from "./components/IsConnectUser";
import IsConnectAdmin from "./components/IsConnectAdmin";
import ContainerTutoPlateform from "./pages/containerTutoPlateform/ContainerTutoPlateform";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: (
          <IsConnectUser>
            <Profile />
          </IsConnectUser>
        ),
      },
      {
        path: "/modificationProfile",
        element: (
          <IsConnectUser>
            <ModificationProfile />
          </IsConnectUser>
        ),
      },
      {
        path: "/admin/gestion",
        element: (
          <IsConnectAdmin>
            <GestionUsers />
          </IsConnectAdmin>
        ),
      },
      {
        path: "/admin/user/:userId",
        element: (
          <IsConnectAdmin>
            <UserInfo />
          </IsConnectAdmin>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <Child />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/tutorials/createTutorial",
        element: (
          <IsConnectAdmin>
            <CreateTutorialPage />
          </IsConnectAdmin>
        ),
      },
      {
        path: "/formations",
        element: <Formation />,
      },
      {
        path: "/tutorials/updateTutorial/:tutorialId",
        element: (
          <IsConnectAdmin>
            <UpdateTutorialPage />
          </IsConnectAdmin>
        ),
      },
      {
        path: "/formations/:formationId",
        element: (
          <IsConnectAdmin>
            <SelectTutorialPage />
          </IsConnectAdmin>
        ),
      },
      {
        path: "/formations/parcours",
        element: (
          <IsConnectUser>
            <Parcours />
          </IsConnectUser>
        ),
      },
      {
        path: "/formations/tutorials/:id",
        element: <TutorialChoice />,
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
        path: "/formations/tutorials/quizz/bravo/:id",
        element: <TutorialExplication />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      { path: "/platformTutorial", element: <ContainerTutoPlateform /> },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
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
