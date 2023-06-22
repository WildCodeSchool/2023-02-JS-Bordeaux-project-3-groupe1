import PropTypes from "prop-types";
import QuizzTutorial from "../QuizzTutorial";

function CreateQuizzTutorial({ setCountStepTutorial }) {
  return (
    <div>
      <QuizzTutorial setCountStepTutorial={setCountStepTutorial} />
    </div>
  );
}

CreateQuizzTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
};

export default CreateQuizzTutorial;
