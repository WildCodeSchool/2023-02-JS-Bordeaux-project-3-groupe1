import React, { useContext, useEffect, useState } from "react";
import CreateNameTutorial from "../../components/createTutorial/CreateNameTutorial";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import { fetcher } from "../../services/tutorialService";

function UpdataNameTutorialPage() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const [nameTutoUpdate] = useState("Modifier le nom du tutoriel");
  const [tagTutoUpdate] = useState("Modifier les tags");
  const [tuto, setTuto] = useState([]);

  setNameMenu("Modifier un tutoriel");

  useEffect(() => {
    fetcher("tutorialsTags")
      .then((data) => {
        setTuto(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <p>{tuto}</p>
      <CreateNameTutorial
        nameTutoUpdate={nameTutoUpdate}
        tagTutoUpdate={tagTutoUpdate}
      />
    </div>
  );
}

export default UpdataNameTutorialPage;
