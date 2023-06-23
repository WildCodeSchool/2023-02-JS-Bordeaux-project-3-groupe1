import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import QuizzTutorial from "../QuizzTutorial";
import { fetcherTutorialById } from "../../../services/tutorialService";

function UpdateQuizzTutorial({ setCountStepTutorial, tutorialId }) {
  const [tutorial, setTutorial] = useState([]);

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
      console.warn("teste");
    }
  }, [tutorial]);

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
