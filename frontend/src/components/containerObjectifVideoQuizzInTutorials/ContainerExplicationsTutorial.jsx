import React from "react";
import PropTypes from "prop-types";

function ContainerExplicationsTutorial({ dataTutorial }) {
  return (
    <div>
      <p className="pTutoExplication">Explications</p>
      <div className="container-Explications-preview">
        <p className="explication-text">{dataTutorial.explication}</p>
      </div>
      <div className="container-Explications-preview-title" />
      <div className="Space" />
    </div>
  );
}
ContainerExplicationsTutorial.propTypes = {
  dataTutorial: PropTypes.shape({
    explication: PropTypes.string.isRequired,
  }),
};

ContainerExplicationsTutorial.defaultProps = {
  dataTutorial: {
    explication: "Comprendre",
  },
};
export default ContainerExplicationsTutorial;
