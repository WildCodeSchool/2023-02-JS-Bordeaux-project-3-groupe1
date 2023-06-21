import { useState } from "react";
import NameTutorial from "../NameTutorial";

function CreateNameTutorial() {
  const [nameTutoPlaceholder] = useState("Insérer le nom du tutoriel");
  const [tagTutoPlaceholder] = useState("Insérer les tags");

  return (
    <div>
      <NameTutorial
        nameTutoPlaceholder={nameTutoPlaceholder}
        tagTutoPlaceholder={tagTutoPlaceholder}
      />
    </div>
  );
}

export default CreateNameTutorial;
