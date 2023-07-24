import React from "react";
import PropTypes from "prop-types";

function ContainerExplicationsTutorial({ dataTutorial }) {
  return (
    <div>
      <p className="pTutoExplication">Explications</p>
      <div className="container-Explications-preview">
        <img src={dataTutorial.pictureTuto} alt="Preview" />
        <p className="explication-text" style={{ textAlign: "justify" }}>
          {dataTutorial.explication}
        </p>
      </div>
    </div>
  );
}
ContainerExplicationsTutorial.propTypes = {
  dataTutorial: PropTypes.shape({
    explication: PropTypes.string.isRequired,
    pictureTuto: PropTypes.string.isRequired,
  }),
};

ContainerExplicationsTutorial.defaultProps = {
  dataTutorial: {
    explication: "Comprendre",
  },
};
export default ContainerExplicationsTutorial;
