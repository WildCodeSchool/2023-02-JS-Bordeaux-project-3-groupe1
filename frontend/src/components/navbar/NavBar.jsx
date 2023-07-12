import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Loupe from "../../assets/loupe.png";
import UserIcon from "../../assets/usericon.png";
import Points from "../../assets/petitspoints.png";
import AdminIcon from "../../assets/iconadmin.png";
import { decodeTokenAndExtractRole } from "../../services/authService";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const { userRole, adminRole, tokenIsValid } = decodeTokenAndExtractRole();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleDisconnected = () => {
    localStorage.clear();
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    setIsLoggedIn(tokenIsValid);
  }, [tokenIsValid, isLoggedIn]);

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <Link onClick={() => handleShowLinks()} to="/">
        <img className="logo" src={Logo} alt="logo ligne bleue" />
      </Link>
      <div className="container-icons">
        <Link onClick={() => handleShowLinks()} to="/formations/parcours">
          <img className="points" src={Points} alt="points" />
        </Link>
        <Link onClick={() => handleShowLinks()} to="/search">
          <img className="loupe" src={Loupe} alt="loupe recherche" />
        </Link>
        {!isLoggedIn && (
          <button className="button-connexion" type="button">
            <Link to="/login" className="se-connecter">
              Connexion
            </Link>
          </button>
        )}
        {isLoggedIn &&
          (adminRole ? (
            <Link onClick={() => handleShowLinks()} type="button" to="/profile">
              <img
                className="admin-icon"
                src={AdminIcon}
                alt="icon du profil admin"
              />
            </Link>
          ) : (
            <Link onClick={() => handleShowLinks()} type="button" to="/profile">
              <img
                className="user-icon"
                src={UserIcon}
                alt="icon du profil user"
              />
            </Link>
          ))}
      </div>
      <ul className="navbar_links">
        <li className="navbar_item">
          <Link
            onClick={() => handleShowLinks()}
            className="navbar_link"
            to="/search"
          >
            Rechercher un tutoriel
          </Link>
        </li>
        {(!isLoggedIn || userRole) && (
          <li className="navbar_item">
            <Link
              className="navbar_link"
              onClick={() => handleShowLinks()}
              to="/formations"
            >
              Choisir une formation
            </Link>
          </li>
        )}
        {isLoggedIn && userRole && (
          <>
            <li className="navbar_item">
              <Link
                className="navbar_link"
                onClick={handleShowLinks}
                to="/formations/parcours"
              >
                Mon parcours
              </Link>
            </li>
            <li className="navbar_item">
              <Link
                to="/profile"
                onClick={handleShowLinks}
                className="navbar_link"
              >
                Mon profil
              </Link>
            </li>
            <li className="navbar_item">
              <Link to="/" onClick={handleDisconnected} className="navbar_link">
                Déconnexion
              </Link>
            </li>
          </>
        )}
        {isLoggedIn && adminRole && (
          <>
            <li className="navbar_item">
              <Link
                className="navbar_link"
                onClick={() => handleShowLinks()}
                to="/tutorials/createTutorial"
              >
                Ajouter un tutoriel
              </Link>
            </li>
            <li className="navbar_item">
              <Link
                className="navbar_link"
                onClick={() => handleShowLinks()}
                to="/formations"
              >
                Liste des formations
              </Link>
            </li>
            <li className="navbar_item">
              <Link
                className="navbar_link"
                onClick={() => handleShowLinks()}
                to="/admin/gestion"
              >
                Liste de utilisateurs
              </Link>
            </li>
            <li className="navbar_item">
              <Link to="/" onClick={handleDisconnected} className="navbar_link">
                Déconnexion
              </Link>
            </li>
          </>
        )}
      </ul>
      <button className="navbar_burger" type="button" onClick={handleShowLinks}>
        <span className="burger_bar" />
      </button>
    </nav>
  );
}

export default Navbar;
