import React, { useContext, useEffect, useState } from "react";
import CreateNameTutorial from "../../components/createTutorial/CreateNameTutorial";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import { fetcher } from "../../services/tutorialService";

function UpdataNameTutorialPage() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const [nameTuto] = useState("Modifier le nom du tutoriel");
  const [tagTuto] = useState("Modifier les tags");
  const [tutorialtags, setTutorialtags] = useState([]);

  setNameMenu("Modifier un tutoriel");

  useEffect(() => {
    fetcher("tutorialsTags")
      .then((data) => {
        setTutorialtags(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <CreateNameTutorial
        nameTuto={nameTuto}
        tagTuto={tagTuto}
        tutorialtags={tutorialtags}
      />
    </div>
  );
}

export default UpdataNameTutorialPage;
