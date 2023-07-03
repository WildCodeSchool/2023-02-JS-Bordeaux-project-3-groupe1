import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Loupe from "../../assets/loupe.png";
import UserIcon from "../../assets/usericon.png";
import Points from "../../assets/petitspoints.png";
import AdminIcon from "../../assets/iconadmin.png";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
    console.info("menuBuger showLink");
  };

  const user = {
    role: "user",
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <Link to="/">
        {" "}
        <img className="logo" src={Logo} alt="logo ligne bleue" />
      </Link>
      <div className="container-icons">
        <Link to="/formations/parcours">
          {" "}
          <img className="points" src={Points} alt="points " />
        </Link>
        <input className="search-bar" type="text" />
        <img className="loupe" src={Loupe} alt="loupe recherche" />

        {!isLoggedIn && (
          <button
            className="button-connexion"
            type="button"
            onClick={handleLogin}
          >
            <Link to="/register">
              {" "}
              <p className="se-connecter" href="/">
                Connexion
              </p>
            </Link>
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
          <Link
            className="navbar_link"
            onClick={() => handleShowLinks()}
            to="/formations"
          >
            <li className="navbar_item">Choisir une formation</li>
          </Link>
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
        <Link to="/search">
          <li className="navbar_item">
            <a className="navbar_link" href="/">
              Rechercher un tutoriel
            </a>
          </li>
        </Link>

        {isLoggedIn && user.role !== "admin" && (
          <Link className="navbar_link" to="/formations/parcours">
            <li className="navbar_item">Mon parcours</li>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/profile" onClick={handleShowLinks}>
            <li className="navbar_item">
              <a className="navbar_link" href="/">
                Mon profil
              </a>
            </li>
          </Link>
        )}
      </ul>
      <button className="navbar_burger" type="button" onClick={handleShowLinks}>
        <span className="burger_bar" />
      </button>
    </nav>
  );
}

export default Navbar;
