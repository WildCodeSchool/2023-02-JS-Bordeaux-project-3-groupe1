import PropTypes from "prop-types";
import ObjectifTutorial from "../ObjectifTutorial";

function CreateObjectifTutorial({ setCountStepTutorial }) {
  return (
    <div>
      <ObjectifTutorial setCountStepTutorial={setCountStepTutorial} />
    </div>
  );
}

CreateObjectifTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
};

export default CreateObjectifTutorial;
