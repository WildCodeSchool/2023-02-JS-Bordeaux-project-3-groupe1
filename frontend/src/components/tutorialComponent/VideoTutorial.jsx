import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CreateTutorialContext } from "../../contexts/CreateTutorialContext";
import validation from "../../assets/validation.png";
import youTubeLogo from "../../assets/youTubeLogo.png";

function VideoTutorial(props) {
  const { setForms } = useContext(CreateTutorialContext);
  const [videoUrl, setVideoUrl] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [isValid, setIsValid] = useState(false);

  const { setCountStepTutorial, tutorialId, tutorialUrlVideo } = props;

  if (typeof setCountStepTutorial === "function") {
    setCountStepTutorial(3);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "videoUrl") {
      setVideoUrl(value);
      const urlParams = new URLSearchParams(value.split("?")[1]);
      const video = urlParams.get("v") || "";
      setVideoId(video);
    }
  };

  useEffect(() => {
    if (tutorialUrlVideo && tutorialUrlVideo.length !== 0 && tutorialId) {
      const urlParams = new URLSearchParams(tutorialUrlVideo.split("?")[1]);
      const video = urlParams.get("v") || "";
      setVideoUrl(tutorialUrlVideo);
      setVideoId(video);
      setIsUpdate(true);
    } else {
      setIsUpdate(false);
    }
  }, [tutorialUrlVideo, tutorialId]);

  const handleSaveName = () => {
    setCountStepTutorial(4);
    const newValuesTutorial = {
      videoUrl,
    };

    setForms((prevForms) => ({
      ...prevForms,
      ...newValuesTutorial,
    }));
  };

  useEffect(() => {
    const isValidForm = videoUrl !== "";
    setIsValid(isValidForm);
  }, [videoUrl]);

  return (
    <div className="container-createVideoTutorial">
      <label htmlFor="videoUrl">Insérer l’url de votre vidéo :</label>

      <input
        type="text"
        name="videoUrl"
        id="videoUrl"
        onChange={handleInputChange}
        value={videoUrl}
        placeholder="Insérer l’url de votre vidéo"
      />
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
      {isUpdate ? (
        <Link to={`/tutorials/updateTutorial/${tutorialId}`}>
          <button type="button" onClick={handleSaveName}>
            Valider
          </button>
        </Link>
      ) : (
        <Link to="/tutorials/createTutorial">
          <button type="button" onClick={handleSaveName} disabled={!isValid}>
            Valider
          </button>
        </Link>
      )}
    </div>
  );
}

VideoTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
  tutorialId: PropTypes.number.isRequired,
  tutorialUrlVideo: PropTypes.string.isRequired,
};

export default VideoTutorial;
