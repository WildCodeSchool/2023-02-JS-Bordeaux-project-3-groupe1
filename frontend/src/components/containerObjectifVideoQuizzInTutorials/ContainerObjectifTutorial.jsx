import React from "react";
import PropTypes from "prop-types";
import pouce from "../../assets/pouce.png";

function ContainerObjectifTutorial({ dataTutorial }) {
  return (
    <div className="container-Objectif">
      <div className="container-Objectif-Title">
        <img className="pouce" src={pouce} alt="pouce" />
        <div className="container-Title-Tuto">
          <h3 className="objectif">Objectif</h3>
        </div>
      </div>
      <div className="container-ObjectifText">
        <p>{dataTutorial.objectif}</p>
      </div>
    </div>
  );
}
ContainerObjectifTutorial.propTypes = {
  dataTutorial: PropTypes.shape({
    objectif: PropTypes.string.isRequired,
  }),
};

ContainerObjectifTutorial.defaultProps = {
  dataTutorial: {
    objectif: "Apprendre",
  },
};
export default ContainerObjectifTutorial;
