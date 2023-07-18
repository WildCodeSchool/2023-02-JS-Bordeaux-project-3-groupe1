import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import UpdateNameTutorial from "../../components/tutorialComponent/updateTutorial/UpdateNameTutorial";
import UpdateObjectifTutorial from "../../components/tutorialComponent/updateTutorial/UpdateObjectifTutorial";
import UpdateVideoTutorial from "../../components/tutorialComponent/updateTutorial/UpdateVideoTutorial";
import UpdateQuizzTutorial from "../../components/tutorialComponent/updateTutorial/UpdateQuizzTutorial";

function UpdateTutorialPage() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const [countStepTutorial, setCountStepTutorial] = useState(1);
  const { tutorialId } = useParams();

  useEffect(() => {
    setNameMenu("Modifier un tutoriel");
  }, [setNameMenu]);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <div>
      {isDesktop && (
        <>
          <UpdateNameTutorial
            setCountStepTutorial={setCountStepTutorial}
            tutorialId={tutorialId}
          />
          <UpdateObjectifTutorial
            setCountStepTutorial={setCountStepTutorial}
            tutorialId={tutorialId}
          />
          <UpdateVideoTutorial
            setCountStepTutorial={setCountStepTutorial}
            tutorialId={tutorialId}
          />
          <UpdateQuizzTutorial
            setCountStepTutorial={setCountStepTutorial}
            tutorialId={tutorialId}
          />
        </>
      )}
      {countStepTutorial === 1 && (
        <UpdateNameTutorial
          setCountStepTutorial={setCountStepTutorial}
          tutorialId={tutorialId}
        />
      )}
      {countStepTutorial === 2 && (
        <UpdateObjectifTutorial
          setCountStepTutorial={setCountStepTutorial}
          tutorialId={tutorialId}
        />
      )}
      {countStepTutorial === 3 && (
        <UpdateVideoTutorial
          setCountStepTutorial={setCountStepTutorial}
          tutorialId={tutorialId}
        />
      )}
      {countStepTutorial === 4 && (
        <UpdateQuizzTutorial
          setCountStepTutorial={setCountStepTutorial}
          tutorialId={tutorialId}
        />
      )}
    </div>
  );
}

export default UpdateTutorialPage;
