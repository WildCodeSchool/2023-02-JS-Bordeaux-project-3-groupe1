import PropTypes from "prop-types";
import VideoTutorial from "../VideoTutorial";

function UpdateVideoTutorial({ setCountStepTutorial, tutorialId }) {
  return (
    <div>
      <VideoTutorial
        setCountStepTutorial={setCountStepTutorial}
        tutorialId={tutorialId}
      />
    </div>
  );
}

UpdateVideoTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
  tutorialId: PropTypes.number.isRequired,
};

export default UpdateVideoTutorial;
