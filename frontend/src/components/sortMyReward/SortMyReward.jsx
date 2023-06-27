import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

function SortMyReward({
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
        <img
          className="iconFormationReward"
          src={iconFormation}
          alt="icondescription"
        />
      </CircularProgressbarWithChildren>
    </div>
  );
}
export default SortMyReward;
SortMyReward.propTypes = {
  iconFormation: PropTypes.string.isRequired,
  nameTutorial: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  selectionSection: PropTypes.number.isRequired,
  sectionNumber: PropTypes.number.isRequired,
};
