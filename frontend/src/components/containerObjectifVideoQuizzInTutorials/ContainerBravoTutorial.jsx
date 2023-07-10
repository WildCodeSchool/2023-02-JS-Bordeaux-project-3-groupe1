import React from "react";
import { PropTypes } from "prop-types";
import Bravo from "../../assets/pictures/bravo 1.png";

function ContainerBravoTutorial({ dataTutorial }) {
  return (
    <div>
      <p className="pTutoBravo">Bravo</p>
      <div className="encartBravo">
        <div className="container-bravo">
          <div className="container-Bravo-preview">
            <img className="bravoPicture" src={Bravo} alt="félicitations" />
            <p className="pBravoPicture">
              Vous avez terminé le tuto "{dataTutorial}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ContainerBravoTutorial.propTypes = {
  dataTutorial: PropTypes.string.isRequired,
};

export default ContainerBravoTutorial;
