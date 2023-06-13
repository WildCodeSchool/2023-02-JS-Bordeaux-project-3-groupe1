import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import UserIcon from "../../assets/usericon.png";
import Loupe from "../../assets/loupe.png";
import Points from "../../assets/petitspoints.png";
import AdminIcon from "../../assets/iconadmin.png";
import ConnexionIcon from "../../assets/connexion.png";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const user = {
    role: "admin",
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <img className="logo" src={Logo} alt="logo ligne bleue" />
      <div className="container-icons">
        <img className="points" src={Points} alt="points " />
        <input className="search-bar" type="text" />
        <img className="loupe" src={Loupe} alt="loupe recherche" />

        {!isLoggedIn && (
          <button
            className="button-connexion"
            type="button"
            onClick={handleLogin}
          >
            <img
              className="connexion-icon"
              src={ConnexionIcon}
              alt="icon de connexion"
            />
          </button>
        )}
        {isLoggedIn &&
          (user.role === "admin" ? (
            <img
              className="admin-icon"
              src={AdminIcon}
              alt="icon du profil admin"
            />
          ) : (
            <img
              className="user-icon"
              src={UserIcon}
              alt="icon du profil user"
            />
          ))}
      </div>
      <ul className="navbar_links">
        {(!isLoggedIn || user.role === "user") && (
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Choisir une formation
            </a>
          </li>
        )}
        {isLoggedIn && user.role === "admin" && (
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Ajouter une formation
            </a>
          </li>
        )}

        {isLoggedIn && user.role === "admin" && (
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Ajouter un tutoriel
            </a>
          </li>
        )}

        {isLoggedIn && user.role === "admin" && (
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Liste des formations
            </a>
          </li>
        )}

        {isLoggedIn && user.role === "admin" && (
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Liste des tutoriels
            </a>
          </li>
        )}

        <li className="navbar_item">
          <a className="navbar_link" href="/">
            Rechercher un tutoriel
          </a>
        </li>

        {isLoggedIn && user.role !== "admin" && (
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Mon parcours
            </a>
          </li>
        )}
        {isLoggedIn && (
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Mon profil
            </a>
          </li>
        )}
      </ul>
      <button className="navbar_burger" type="button" onClick={handleShowLinks}>
        <span className="burger_bar" />
      </button>
    </div>
  );
}

export default Navbar;
