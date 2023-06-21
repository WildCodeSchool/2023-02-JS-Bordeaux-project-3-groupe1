import { useContext } from "react";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import CreateNameTutorial from "../../components/tutorialComponent/createTutorial/CreateNameTutorial";

function CreateNameTutorialPage() {
  const { setNameMenu } = useContext(NameMenuTopContext);

  setNameMenu("Ajouter un tutoriel");

  return (
    <div>
      <CreateNameTutorial />
    </div>
  );
}

export default CreateNameTutorialPage;
