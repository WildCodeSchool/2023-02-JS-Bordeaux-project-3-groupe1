import PropTypes from "prop-types";
import validation from "../../../assets/validation.png";
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
        <>
          <div className="container-video-preview-title">
            <div className="space" />
            <h3>Vidéo</h3>
            <img src={validation} alt="validation" />
          </div>
          <div className="container-video-preview-logo">
            <img src={youTubeLogo} alt="youTubeLogo" />
          </div>
        </>
      )}
    </div>
  );
}

IframeVideo.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default IframeVideo;
