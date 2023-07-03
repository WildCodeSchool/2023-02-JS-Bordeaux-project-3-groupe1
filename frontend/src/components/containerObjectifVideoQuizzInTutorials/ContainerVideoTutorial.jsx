import React from "react";
import PropTypes from "prop-types";

function ContainerVideoTutorial({ validation, dataTutorial }) {
  return (
    <div className="container-Video-preview">
      <div className="container-video-preview-title">
        <div className="Space" />
        <p>Video</p>
        <img className="validation" src={validation} alt="validation" />
      </div>
      <p className="explication-text">
        {dataTutorial.name}noirzgiefiezqifhvierqhgerhgeruh
      </p>
    </div>
  );
}
ContainerVideoTutorial.propTypes = {
  validation: PropTypes.string,
  dataTutorial: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

ContainerVideoTutorial.defaultProps = {
  validation: "image",
  dataTutorial: {
    explication: "Comprendre",
  },
};
export default ContainerVideoTutorial;
