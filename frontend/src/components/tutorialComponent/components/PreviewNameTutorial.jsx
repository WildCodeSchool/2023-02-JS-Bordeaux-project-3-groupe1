import React from "react";
import PropTypes from "prop-types";
import starGrey from "../../../assets/starGrey.png";
import student from "../../../assets/student.png";

function PreviewNameTutorial(props) {
  const { levelTutorial, nameTutorial } = props;

  return (
    <div className="container-preview-tutorial">
      <div className="icon-preview-tutorial">
        {levelTutorial === 1 ? (
          <div className="icon-preview-tutorial-star">
            <img src={starGrey} alt="starGrey" />
          </div>
        ) : (
          <div className="icon-preview-tutorial-star">
            <img src={starGrey} alt="starGrey" />
            <img src={starGrey} alt="starGrey" />
          </div>
        )}
        <img src={student} alt="student" />
      </div>
      <h3>{nameTutorial}</h3>
    </div>
  );
}

PreviewNameTutorial.propTypes = {
  levelTutorial: PropTypes.number.isRequired,
  nameTutorial: PropTypes.string.isRequired,
};

export default PreviewNameTutorial;
