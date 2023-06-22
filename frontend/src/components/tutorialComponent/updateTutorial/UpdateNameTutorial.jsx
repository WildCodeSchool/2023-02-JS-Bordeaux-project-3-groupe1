import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import NameTutorial from "../NameTutorial";
import { fetcherTags } from "../../../services/tutorialService";

function UpdateNameTutorial({ setCountStepTutorial }) {
  const [nameTutoPlaceholder, setNameTutoPlaceholder] = useState("");
  const [tagTutoPlaceholder] = useState("Ajouter les tags");
  const [tutorialWithtags, setTutorialtags] = useState([]);
  const { tutorialId } = useParams();
  const [updateNameFormation, setUpdateNameFormation] = useState(0);

  if (typeof setCountStepTutorial === "function") {
    setCountStepTutorial(1);
  }

  useEffect(() => {
    fetcherTags("tutorials/WithTags", tutorialId)
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
        tutorialWithtags={tutorialWithtags}
        updateNameFormation={updateNameFormation}
      />
    </div>
  );
}
UpdateNameTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
};

export default UpdateNameTutorial;
