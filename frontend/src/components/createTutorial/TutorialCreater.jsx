import { useContext } from "react";
import { CreateTutorialContext } from "../../contexts/CreateTutorialContext";

function TutorialCreater() {
  const { forms } = useContext(CreateTutorialContext);
  const handleSaveTutorial = () => {
    console.warn("test", forms);
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
