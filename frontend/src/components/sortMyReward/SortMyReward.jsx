import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { senderStepsByUser } from "../../services/userService";

function SortMyReward({
  userId,
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
  const handleClick = () => {
    if (
      icon.stepOne === null ||
      (icon.stepOne === 0 && icon.stepTwo === null) ||
      (icon.stepTwo === 0 && icon.stepThree === null) ||
      (icon.stepThree === 0 && icon.tutoId)
    ) {
      senderStepsByUser("steps", userId, {
        stepOne: false,
        stepTwo: false,
        stepThree: false,
        tutoId: icon.tutoId,
      })
        .then((data) => {
          console.warn(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="sortMyReward">
      <h3 className="titleSortMyReward">{nameTutorial}</h3>
      <CircularProgressbarWithChildren value={progress}>
        <Link
          onClick={handleClick}
          to={`/formations/tutorials/explication/${tutoId}`}
        >
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
    stepOne: PropTypes.number.isRequired,
    stepTwo: PropTypes.number.isRequired,
    stepThree: PropTypes.number.isRequired,
  }).isRequired,
  userId: PropTypes.number.isRequired,
  iconFormation: PropTypes.string.isRequired,
  nameTutorial: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  selectionSection: PropTypes.number.isRequired,
  sectionNumber: PropTypes.number.isRequired,
};
