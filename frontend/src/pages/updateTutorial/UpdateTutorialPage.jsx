import React, { useContext, useEffect, useState } from "react";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import UpdateNameTutorial from "../../components/tutorialComponent/updateTutorial/UpdateNameTutorial";

function UpdateTutorialPage() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const [countStepTutorial, setCountStepTutorial] = useState(1);

  useEffect(() => {
    setNameMenu("Modifier un tutoriel");
  }, []);

  return (
    <div>
      {countStepTutorial && (
        <UpdateNameTutorial setCountStepTutorial={setCountStepTutorial} />
      )}
    </div>
  );
}

export default UpdateTutorialPage;
