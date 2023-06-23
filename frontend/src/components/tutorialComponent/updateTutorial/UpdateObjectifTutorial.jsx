import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ObjectifTutorial from "../ObjectifTutorial";
import { fetcherTutorialById } from "../../../services/tutorialService";

function UpdateObjectifTutorial({ setCountStepTutorial, tutorialId }) {
  const [tutorial, setTutorial] = useState([]);
  const [tutorialObjectif, setTutorialObjectif] = useState("");
  const [tutorialExplication, setTutorialExplication] = useState("");
  const [tutorialImage, setTutorialImage] = useState("");

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
      setTutorialObjectif(tutorial[0].objectif);
      setTutorialExplication(tutorial[0].explication);
      setTutorialImage(tutorial.url);
    }
  }, [tutorial]);

  return (
    <div>
      <ObjectifTutorial
        setCountStepTutorial={setCountStepTutorial}
        tutorialId={tutorialId}
        tutorialObjectif={tutorialObjectif}
        tutorialExplication={tutorialExplication}
        tutorialImage={tutorialImage}
      />
    </div>
  );
}

UpdateObjectifTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
  tutorialId: PropTypes.number.isRequired,
};

export default UpdateObjectifTutorial;
