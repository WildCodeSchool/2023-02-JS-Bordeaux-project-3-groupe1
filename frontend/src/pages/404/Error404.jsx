import React from "react";
import { Link } from "react-router-dom";
import Facteur from "../../assets/pictures/facteur.svg";

function Error404() {
  return (
    <div className="main404">
      <h2 className="title404">404</h2>
      <img className="facteur" src={Facteur} alt="facteur" />
      <div className="text404">
        <h2 className="textStart">
          Cliquez
          <Link to="/" className="textIci">
            {" "}
            ici
          </Link>{" "}
          pour retrouver votre chemin
        </h2>
      </div>
    </div>
  );
}

export default Error404;
