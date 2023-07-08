import React from "react";
import PropTypes from "prop-types";

function MyReward({ icon, tutorialByIcon }) {
  const isCompleted = tutorialByIcon
    .filter(
      (tutorial) => parseInt(tutorial.total_stepsTotal, 10) >= tutorial.NB_tuto
    )
    .some((tutorial) => tutorial.iconURL === icon.iconURL);

  return (
    <img
      className={isCompleted ? "myRewardIcons" : "myRewardIconsChange"}
      src={icon.iconURL}
      alt={icon.name}
    />
  );
}

MyReward.propTypes = {
  icon: PropTypes.shape({
    iconURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  tutorialByIcon: PropTypes.arrayOf(
    PropTypes.shape({
      iconURL: PropTypes.string.isRequired,
      NB_tuto: PropTypes.number.isRequired,
      total_stepsTotal: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MyReward;
