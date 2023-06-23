import PropTypes from "prop-types";
import QuizzTutorial from "../QuizzTutorial";

function UpdateQuizzTutorial({ setCountStepTutorial, tutorialId }) {
  return (
    <div>
      <QuizzTutorial
        setCountStepTutorial={setCountStepTutorial}
        tutorialId={tutorialId}
      />
    </div>
  );
}

UpdateQuizzTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
  tutorialId: PropTypes.number.isRequired,
};

export default UpdateQuizzTutorial;
