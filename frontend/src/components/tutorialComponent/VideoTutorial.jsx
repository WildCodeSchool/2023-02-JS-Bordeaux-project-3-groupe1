import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CreateTutorialContext } from "../../contexts/CreateTutorialContext";
import SaveButton from "./components/SaveButton";
import InputField from "./components/InputField";
import IframeVideo from "./components/IframeVideo";

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

  const handleSave = () => {
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
      <InputField
        name="videoUrl"
        id="videoUrl"
        value={videoUrl}
        placeholder="Insérer l’url de votre vidéo"
        onChange={handleInputChange}
      />
      <h3>Vidéo</h3>
      <IframeVideo videoId={videoId} />
      <SaveButton
        isUpdate={isUpdate}
        tutorialId={tutorialId}
        handleSave={handleSave}
        isValid={isValid}
      />
    </div>
  );
}

VideoTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
  tutorialId: PropTypes.number.isRequired,
  tutorialUrlVideo: PropTypes.string.isRequired,
};

export default VideoTutorial;
