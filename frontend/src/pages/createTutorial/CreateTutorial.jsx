import { useContext, useState } from "react";
import CreateNameTutorial from "../../components/tutorialComponent/createTutorial/CreateNameTutorial";
import CreateObjectifTutorial from "../../components/tutorialComponent/createTutorial/CreateObjectifTutorial";
import CreateVideoTutorial from "../../components/tutorialComponent/createTutorial/CreateVideoTutorial";
import CreateQuizzTutorial from "../../components/tutorialComponent/createTutorial/CreateQuizzTutorial";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";

function CreateNameTutorialPage() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const [nameTutoPlaceholder] = useState("Insérer le nom du tutoriel");
  const [tagTutoPlaceholder] = useState("Insérer les tags");
  const [countStepTutorial, setCountStepTutorial] = useState(1);

  setNameMenu("Ajouter un tutoriel");

  return (
    <div>
      {countStepTutorial === 1 && (
        <CreateNameTutorial
          nameTutoPlaceholder={nameTutoPlaceholder}
          tagTutoPlaceholder={tagTutoPlaceholder}
          setCountStepTutorial={setCountStepTutorial}
        />
      )}
      {countStepTutorial === 2 && (
        <CreateObjectifTutorial setCountStepTutorial={setCountStepTutorial} />
      )}
      {countStepTutorial === 3 && (
        <CreateVideoTutorial setCountStepTutorial={setCountStepTutorial} />
      )}
      {countStepTutorial === 4 && (
        <CreateQuizzTutorial setCountStepTutorial={setCountStepTutorial} />
      )}
    </div>
  );
}

export default CreateNameTutorialPage;
