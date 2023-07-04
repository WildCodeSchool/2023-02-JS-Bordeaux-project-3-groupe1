import React from "react";
import PropTypes from "prop-types";
import youTubeLogo from "../../assets/youTubeLogo.png";

function ContainerVideoTutorial({ validation }) {
  return (
    <div className="container-Video-preview">
      <div className="container-video-preview-title">
        <div className="Space" />
        <p>Video</p>
        <img className="validation" src={validation} alt="validation" />
      </div>
      <div className="container-video-preview-logo">
        <img src={youTubeLogo} alt="youTubeLogo" />
      </div>
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
