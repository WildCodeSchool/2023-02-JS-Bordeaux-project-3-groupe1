import React from "react";
import PropTypes from "prop-types";

function ContainerExplicationsTutorial({ dataTutorial, validation }) {
  return (
    <div className="container-Explications-preview">
      <div className="container-Explications-preview-title">
        <div className="Space" />
        <p>Explications</p>
        <img className="validation" src={validation} alt="validation" />
      </div>
      <p className="explication-text">{dataTutorial.explication}</p>
    </div>
  );
}
ContainerExplicationsTutorial.propTypes = {
  dataTutorial: PropTypes.shape({
    explication: PropTypes.string.isRequired,
  }),
  validation: PropTypes.string,
};

ContainerExplicationsTutorial.defaultProps = {
  dataTutorial: {
    explication: "Comprendre",
  },
  validation: "image",
};
export default ContainerExplicationsTutorial;
