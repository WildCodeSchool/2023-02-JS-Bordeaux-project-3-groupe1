import PropTypes from "prop-types";

function IframeVideo({ videoId }) {
  return (
    <div className="container-createVideoTutorial-preview-iframe">
      {videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Video Preview"
        />
      ) : (
        <div className="container-video-preview-logo" />
      )}
    </div>
  );
}

IframeVideo.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default IframeVideo;
