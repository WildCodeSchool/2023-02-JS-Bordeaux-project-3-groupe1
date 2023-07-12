import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function MyReward({ icon, userLevel, filteredTutorialsLevel }) {
  const [isCompleted, setIsCompleted] = useState([]);
  const [iconUrl, setIconUrl] = useState([]);

  const level1 = filteredTutorialsLevel.find(
    (tuto) => tuto.levelTuto === 1 && tuto.total_stepsTotal1
  )?.total_stepsTotal;

  const level2 = filteredTutorialsLevel.find(
    (tuto) => tuto.levelTuto === 2 && tuto.total_stepsTotal
  )?.total_stepsTotal;

  const totalSteps = filteredTutorialsLevel.find(
    (tuto) => tuto.NB_tuto
  )?.NB_tuto;

  useEffect(() => {
    if (userLevel === 1) {
      setIsCompleted(
        parseInt(level1, 10) + parseInt(level2, 10) === parseInt(totalSteps, 10)
      );
    } else if (userLevel === 2) {
      setIsCompleted(level2 - level1 === totalSteps);
    }

    if (isCompleted) {
      setIconUrl(
        filteredTutorialsLevel
          .filter((tutorial) => tutorial.NB_tuto === totalSteps)
          .some((tutorial) => tutorial.iconURL === icon.iconURL)
      );
    }
  }, [filteredTutorialsLevel]);

  return (
    <img
      className={iconUrl ? "myRewardIcons" : "myRewardIconsChange"}
      src={icon.iconURL}
      alt={icon.name}
    />
  );
}

MyReward.propTypes = {
  userLevel: PropTypes.number.isRequired,
  icon: PropTypes.shape({
    iconURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  filteredTutorialsLevel: PropTypes.arrayOf(
    PropTypes.shape({
      iconURL: PropTypes.string.isRequired,
      NB_tuto: PropTypes.number.isRequired,
      total_stepsTotal: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MyReward;
