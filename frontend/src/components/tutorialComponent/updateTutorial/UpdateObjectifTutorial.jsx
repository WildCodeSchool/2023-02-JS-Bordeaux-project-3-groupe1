import PropTypes from "prop-types";
import ObjectifTutorial from "../ObjectifTutorial";

function UpdateObjectifTutorial({ setCountStepTutorial, tutorialId }) {
  return (
    <div>
      <ObjectifTutorial
        setCountStepTutorial={setCountStepTutorial}
        tutorialId={tutorialId}
      />
    </div>
  );
}

UpdateObjectifTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
  tutorialId: PropTypes.number.isRequired,
};

export default UpdateObjectifTutorial;
