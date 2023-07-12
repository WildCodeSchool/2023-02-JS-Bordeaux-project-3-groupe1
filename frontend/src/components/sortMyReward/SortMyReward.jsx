import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

function SortMyReward({
  tutoId,
  iconFormation,
  nameTutorial,
  progress,
  selectionSection,
  sectionNumber,
}) {
  if (selectionSection !== sectionNumber) {
    return null;
  }

  return (
    <div className="sortMyReward">
      <h3 className="titleSortMyReward">{nameTutorial}</h3>
      <CircularProgressbarWithChildren value={progress}>
        <Link to={`/formations/tutorials/explication/${tutoId}`}>
          {" "}
          <img
            className="iconFormationReward"
            src={iconFormation}
            alt="icondescription"
          />
        </Link>
      </CircularProgressbarWithChildren>
    </div>
  );
}
export default SortMyReward;
SortMyReward.propTypes = {
  tutoId: PropTypes.number.isRequired,
  iconFormation: PropTypes.string.isRequired,
  nameTutorial: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  selectionSection: PropTypes.number.isRequired,
  sectionNumber: PropTypes.number.isRequired,
};
