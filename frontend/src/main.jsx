import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer } from "react-toastify";
// eslint-disable-next-line import/no-extraneous-dependencies
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IsDesktopProvider } from "./contexts/IsDesktopContext";
import App from "./App";
import { ButtonStateConnectionProvider } from "./contexts/ButtonStateConnectionContext";
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
import AuthProtected from "./services/AuthProtected";
import ContainerTutoPlateform from "./pages/containerTutoPlateform/ContainerTutoPlateform";
import USER_ROLES from "./constants/user";
import ChoiceLevelUser from "./components/ChoiceLevelUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/level",
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
          <AuthProtected roles={[USER_ROLES.user]}>
            <Profile />
          </AuthProtected>
        ),
      },
      {
        path: "/modificationProfile",
        element: (
          <AuthProtected roles={[USER_ROLES.user]}>
            <ModificationProfile />
          </AuthProtected>
        ),
      },
      {
        path: "/admin/gestion",
        element: (
          <AuthProtected roles={[USER_ROLES.admin]}>
            <GestionUsers />
          </AuthProtected>
        ),
      },
      {
        path: "/admin/user/:userId",
        element: (
          <AuthProtected roles={[USER_ROLES.admin]}>
            <UserInfo />
          </AuthProtected>
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
          <AuthProtected roles={[USER_ROLES.admin]}>
            <CreateTutorialPage />
          </AuthProtected>
        ),
      },
      {
        path: "/formations",
        element: (
          <ChoiceLevelUser>
            <Formation />
          </ChoiceLevelUser>
        ),
      },
      {
        path: "/tutorials/updateTutorial/:tutorialId",
        element: (
          <AuthProtected roles={[USER_ROLES.admin]}>
            <UpdateTutorialPage />
          </AuthProtected>
        ),
      },
      {
        path: "/formations/:formationId",
        element: (
          <AuthProtected roles={[USER_ROLES.admin]}>
            <SelectTutorialPage />
          </AuthProtected>
        ),
      },
      {
        path: "/formations/parcours",
        element: (
          <AuthProtected roles={[USER_ROLES.user]}>
            <Parcours />
          </AuthProtected>
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
      { path: "/video-tutorial", element: <ContainerTutoPlateform /> },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ButtonStateConnectionProvider>
      <IsDesktopProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </IsDesktopProvider>
    </ButtonStateConnectionProvider>
  </React.StrictMode>
);
