import React from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";

function ContainerVideoTutorial({ videoTutorials }) {
  const videoId = videoTutorials;
  const opts = { height: "190", width: "340" };
  return (
    <div>
      <p className="pTutoVideo">Vidéo</p>
      <div className="container-Video-preview">
        <YouTube className="VideoYouTubeVisuel" videoId={videoId} opts={opts} />
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
