import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NameTutorial from "../NameTutorial";
import { fetcherTags } from "../../../services/tutorialService";

function UpdateNameTutorial({ setCountStepTutorial, tutorialId }) {
  const [nameTutoPlaceholder, setNameTutoPlaceholder] = useState("");
  const [tagTutoPlaceholder] = useState("Ajouter les tags");
  const [tutorialWithtags, setTutorialtags] = useState([]);
  const [updateNameFormation, setUpdateNameFormation] = useState(0);
  const [tagId, setTagId] = useState(0);

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
      setTagId(tutorialWithtags[0]?.tagID);
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
        setCountStepTutorial={setCountStepTutorial}
        tutorialId={tutorialId}
        tagId={tagId}
      />
    </div>
  );
}

UpdateNameTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
  tutorialId: PropTypes.string.isRequired,
};

export default UpdateNameTutorial;
