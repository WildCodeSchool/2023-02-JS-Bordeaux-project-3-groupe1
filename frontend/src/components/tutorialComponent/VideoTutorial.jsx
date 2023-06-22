import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import { CreateTutorialContext } from "../../contexts/CreateTutorialContext";
import validation from "../../assets/validation.png";
import youTubeLogo from "../../assets/youTubeLogo.png";

function CreateVideoTutorial({ setCountStepTutorial }) {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const { setForms } = useContext(CreateTutorialContext);
  const [videoUrl, setVideoUrl] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [videoId, setVideoId] = useState("");

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

  const handleSaveName = () => {
    const newValuesTutorial = {
      videoUrl,
    };
    setCountStepTutorial(4);
    setForms((prevForms) => ({
      ...prevForms,
      ...newValuesTutorial,
    }));
  };

  setNameMenu("Ajouter un tutoriel");

  useEffect(() => {
    const isValidForm = videoUrl.trim() !== "";
    setIsValid(isValidForm);
  }, [videoUrl]);

  return (
    <div className="container-createVideoTutorial">
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
      <Link to="/tutorials/createTutorial">
        <button type="button" onClick={handleSaveName} disabled={!isValid}>
          Valider
        </button>
      </Link>
    </div>
  );
}

CreateVideoTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
};

export default CreateVideoTutorial;
