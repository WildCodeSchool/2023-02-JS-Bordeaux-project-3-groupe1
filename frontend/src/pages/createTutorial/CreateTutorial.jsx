import { useContext, useState } from "react";
import CreateNameTutorial from "../../components/createTutorial/CreateNameTutorial";
import CreateObjectifTutorial from "../../components/createTutorial/CreateObjectifTutorial";
import CreateVideoTutorial from "../../components/createTutorial/CreateVideoTutorial";
import CreateQuizzTutorial from "../../components/createTutorial/CreateQuizzTutorial";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";

function CreateTutorialPage() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const [nameTuto] = useState("Insérer le nom du tutoriel");
  const [tagTuto] = useState("Insérer les tags");

  setNameMenu("Ajouter un tutoriel");

  return (
    <div>
      <CreateNameTutorial nameTuto={nameTuto} tagTuto={tagTuto} />
      <CreateObjectifTutorial />
      <CreateVideoTutorial />
      <CreateQuizzTutorial />
    </div>
  );
}

export default CreateTutorialPage;
