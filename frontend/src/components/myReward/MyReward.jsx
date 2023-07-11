import React, { useState } from "react";
import PropTypes from "prop-types";

function MyReward({
  icon,
  totalStepsTotalLevel1,
  totalStepsTotalLevel2,
  dataFilterLevelUser,
}) {
  const [isCompleted, setIsCompleted] = useState();

  if (totalStepsTotalLevel1) {
    const totalSteps =
      parseInt(totalStepsTotalLevel1, 10) + parseInt(totalStepsTotalLevel2, 10);
    setIsCompleted(totalSteps >= dataFilterLevelUser.NB_tuto);
  } else if (totalStepsTotalLevel2) {
    setIsCompleted(totalStepsTotalLevel2 === dataFilterLevelUser.NB_tuto);
  }

  // const isCompleted = tutorialByIcon
  //   .filter(
  //     (tutorial) => parseInt(tutorial.total_stepsTotal, 10) >= tutorial.NB_tuto
  //   )
  //   .some((tutorial) => tutorial.iconURL === icon.iconURL);

  return (
    <img
      className={isCompleted ? "myRewardIcons" : "myRewardIconsChange"}
      src={icon.iconURL}
      alt={icon.name}
    />
  );
}

MyReward.propTypes = {
  totalStepsTotalLevel1: PropTypes.number.isRequired,
  totalStepsTotalLevel2: PropTypes.number.isRequired,
  icon: PropTypes.shape({
    iconURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  dataFilterLevelUser: PropTypes.arrayOf(
    PropTypes.shape({
      iconURL: PropTypes.string.isRequired,
      NB_tuto: PropTypes.number.isRequired,
      total_stepsTotal: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MyReward;
