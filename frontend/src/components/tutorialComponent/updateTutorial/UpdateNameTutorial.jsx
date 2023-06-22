import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NameTutorial from "../NameTutorial";
import { fetcherTags } from "../../../services/tutorialService";

function UpdateNameTutorial() {
  const [nameTutoPlaceholder, setNameTutoPlaceholder] = useState("");
  const [tagTutoPlaceholder] = useState("Ajouter les tags");
  const [level, setLevel] = useState(0);
  const [tutorialWithtags, setTutorialtags] = useState([]);
  const { tutorialId } = useParams();
  const [updateNameFormation, setUpdateNameFormation] = useState(0);

  useEffect(() => {
    fetcherTags("tutorialWithTags", tutorialId)
      .then((data) => {
        setTutorialtags(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (tutorialWithtags?.length !== 0) {
      setNameTutoPlaceholder(tutorialWithtags[0]?.name);
      setLevel(tutorialWithtags[0]?.level);
      setUpdateNameFormation(tutorialWithtags[0]?.formation_id);
    } else {
      setNameTutoPlaceholder("Modifier le nom du tutoriel");
    }
  }, [tutorialWithtags]);

  return (
    <div>
      <NameTutorial
        nameTutoPlaceholder={nameTutoPlaceholder}
        tagTutoPlaceholder={tagTutoPlaceholder}
        level={level}
        tutorialWithtags={tutorialWithtags}
        updateNameFormation={updateNameFormation}
      />
    </div>
  );
}

export default UpdateNameTutorial;
