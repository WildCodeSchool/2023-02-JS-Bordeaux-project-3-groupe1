import React, { useContext } from "react";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import UpdateNameTutorial from "../../components/tutorialComponent/updateTutorial/UpdateNameTutorial";

function UpdateTutorialPage() {
  const { setNameMenu } = useContext(NameMenuTopContext);

  setNameMenu("Modifier un tutoriel");

  return (
    <div>
      <UpdateNameTutorial />
    </div>
  );
}

export default UpdateTutorialPage;
