import { useContext } from "react";
import CreateTutorialContext from "../../contexts/CreateTutorialContext";

function TutorialCreater() {
  const { newNameTutorial } = useContext(CreateTutorialContext);
  const handleSaveTutorial = () => {
    console.warn("test", newNameTutorial);
  };

  return (
    <div>
      <button type="button" onClick={handleSaveTutorial}>
        Valider votre tutorial
      </button>
    </div>
  );
}

export default TutorialCreater;
