import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import VideoTutorial from "../VideoTutorial";
import { fetcherTutorialById } from "../../../services/tutorialService";

function UpdateVideoTutorial({ setCountStepTutorial, tutorialId }) {
  const [tutorial, setTutorial] = useState([]);
  const [tutorialUrlVideo, setTutorialUrlVideo] = useState("");

  useEffect(() => {
    fetcherTutorialById("tutorials", tutorialId)
      .then((data) => {
        setTutorial(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (tutorial?.length !== 0) {
      setTutorialUrlVideo(tutorial.urlVideo);
    }
  }, [tutorial]);

  return (
    <div>
      <VideoTutorial
        setCountStepTutorial={setCountStepTutorial}
        tutorialId={tutorialId}
        tutorialUrlVideo={tutorialUrlVideo}
      />
    </div>
  );
}

UpdateVideoTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
  tutorialId: PropTypes.number.isRequired,
};

export default UpdateVideoTutorial;
