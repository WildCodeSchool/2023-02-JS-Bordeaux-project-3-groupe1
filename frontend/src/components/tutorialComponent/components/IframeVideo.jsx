import PropTypes from "prop-types";
import youTubeLogo from "../../../assets/youTubeLogo.png";

function IframeVideo({ videoId }) {
  return (
    <div className="container-createVideoTutorial-preview">
      {videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Video Preview"
        />
      ) : (
        <div className="container-video-preview-logo">
          <img src={youTubeLogo} alt="youTubeLogo" />
        </div>
      )}
    </div>
  );
}

IframeVideo.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default IframeVideo;
