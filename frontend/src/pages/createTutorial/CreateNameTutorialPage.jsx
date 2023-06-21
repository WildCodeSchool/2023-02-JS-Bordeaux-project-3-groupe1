import { useContext, useState } from "react";
import CreateNameTutorial from "../../components/createTutorial/CreateNameTutorial";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";

function CreateNameTutorialPage() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const [nameTuto] = useState("Insérer le nom du tutoriel");
  const [tagTuto] = useState("Insérer les tags");

  setNameMenu("Ajouter un tutoriel");

  return (
    <div>
      <CreateNameTutorial nameTuto={nameTuto} tagTuto={tagTuto} />
    </div>
  );
}

export default CreateNameTutorialPage;
