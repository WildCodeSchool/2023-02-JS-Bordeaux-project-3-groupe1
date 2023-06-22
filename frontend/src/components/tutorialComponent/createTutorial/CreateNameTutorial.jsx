import React, { useState } from "react";
import PropTypes from "prop-types";
import NameTutorial from "../NameTutorial";

function CreateNameTutorial({ setCountStepTutorial }) {
  const [nameTutoPlaceholder] = useState("Insérer le nom du tutoriel");
  const [tagTutoPlaceholder] = useState("Insérer les tags");

  return (
    <div>
      <NameTutorial
        nameTutoPlaceholder={nameTutoPlaceholder}
        tagTutoPlaceholder={tagTutoPlaceholder}
        setCountStepTutorial={setCountStepTutorial}
      />
    </div>
  );
}

CreateNameTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
};

export default CreateNameTutorial;
