import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-extraneous-dependencies
import YouTube from "react-youtube";
import youTubeLogo from "../../assets/youTubeLogo.png";

function ContainerVideoTutorial({ videoTutorials }) {
  const videoId = videoTutorials;
  return (
    <div className="container-Video-preview">
      <div className="container-video-preview-title">
        <div className="Space" />
        <p>Video</p>
        <YouTube videoId={videoId} />
      </div>
      <div className="container-video-preview-logo">
        <img src={youTubeLogo} alt="youTubeLogo" />
      </div>
    </div>
  );
}
ContainerVideoTutorial.propTypes = {
  videoTutorials: PropTypes.string,
};

ContainerVideoTutorial.defaultProps = {
  videoTutorials: "image",
};
export default ContainerVideoTutorial;
