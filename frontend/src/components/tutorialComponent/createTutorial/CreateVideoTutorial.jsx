import PropTypes from "prop-types";
import VideoTutorial from "../VideoTutorial";

function CreateVideoTutorial({ setCountStepTutorial }) {
  return (
    <div>
      <VideoTutorial setCountStepTutorial={setCountStepTutorial} />
    </div>
  );
}

CreateVideoTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
};

export default CreateVideoTutorial;
