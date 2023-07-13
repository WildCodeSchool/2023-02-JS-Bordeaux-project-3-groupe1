import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

function SortMyReward({
  icon,
  iconFormation,
  nameTutorial,
  progress,
  selectionSection,
  sectionNumber,
}) {
  const [tutoId, setTutoId] = useState(0);

  if (selectionSection !== sectionNumber) {
    return null;
  }

  useEffect(() => {
    setTutoId(icon.tutoId);
  }, [icon]);

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
  icon: PropTypes.shape({
    tutoId: PropTypes.number.isRequired,
  }).isRequired,
  iconFormation: PropTypes.string.isRequired,
  nameTutorial: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  selectionSection: PropTypes.number.isRequired,
  sectionNumber: PropTypes.number.isRequired,
};
