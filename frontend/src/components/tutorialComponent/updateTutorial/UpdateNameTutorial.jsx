import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NameTutorial from "../NameTutorial";
import { fetcherTags } from "../../../services/tutorialService";

function UpdateNameTutorial({ setCountStepTutorial, tutorialId }) {
  const [nameTutoPlaceholder, setNameTutoPlaceholder] = useState("");
  const [tagTutoPlaceholder] = useState("Ajouter les tags");
  const [tutorialWithtags, setTutorialtags] = useState([]);
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
      setTagId(tutorialWithtags[0]?.tagID);
    }
  }, [tutorialWithtags]);

  return (
    <div>
      <NameTutorial
        nameTutoPlaceholder={nameTutoPlaceholder}
        tagTutoPlaceholder={tagTutoPlaceholder}
        tutorialWithtags={tutorialWithtags}
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
