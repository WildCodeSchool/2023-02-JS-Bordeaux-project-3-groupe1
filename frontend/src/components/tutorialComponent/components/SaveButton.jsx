import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SaveButton(props) {
  const { isUpdate, tutorialId, handleSave, isValid } = props;

  return (
    <div className="container-saveButton">
      {isUpdate ? (
        <Link to={`/tutorials/updateTutorial/${tutorialId}`}>
          <button type="button" onClick={handleSave}>
            Valider
          </button>
        </Link>
      ) : (
        <Link to="/tutorials/createTutorial">
          <button type="button" onClick={handleSave} disabled={!isValid}>
            Valider
          </button>
        </Link>
      )}
    </div>
  );
}

SaveButton.propTypes = {
  isUpdate: PropTypes.bool.isRequired,
  tutorialId: PropTypes.string.isRequired,
  handleSave: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default SaveButton;
