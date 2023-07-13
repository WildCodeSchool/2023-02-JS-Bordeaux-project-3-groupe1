import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MyReward({ icon, userLevel, filteredTutorialsLevel }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [iconUrl, setIconUrl] = useState(false);
  const [formationId, setFormationId] = useState(0);

  const tutorialsByFormation = filteredTutorialsLevel.filter(
    (tutoriel) => tutoriel.formationID === icon.id
  );

  const level1 =
    tutorialsByFormation.find((tuto) => tuto.levelTuto === 1)
      ?.total_stepsTotal ?? 0;

  const level2 =
    tutorialsByFormation.find((tuto) => tuto.levelTuto === 2)
      ?.total_stepsTotal ?? 0;

  const totalSteps = tutorialsByFormation.find((tuto) => tuto.NB_tuto)?.NB_tuto;

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
        tutorialsByFormation
          .filter((tutorial) => tutorial.NB_tuto === totalSteps)
          .some((tutorial) => tutorial.iconURL === icon.iconURL)
      );
    }
    setFormationId(icon.id);
  }, [tutorialsByFormation]);

  return (
    <Link to={`/formations/tutorials/${formationId}`}>
      <img
        className={iconUrl ? "myRewardIcons" : "myRewardIconsChange"}
        src={icon.iconURL}
        alt={icon.name}
      />
    </Link>
  );
}

MyReward.propTypes = {
  userLevel: PropTypes.number.isRequired,
  icon: PropTypes.shape({
    iconURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
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
