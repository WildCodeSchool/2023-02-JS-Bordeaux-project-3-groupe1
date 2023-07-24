import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import arrow from "../../assets/pictures/arrowTutorial.svg";
import capGreyOneStartBlue from "../../assets/pictures/capGreyOneStartBlue.svg";
import capBlueOneStartBlue from "../../assets/pictures/capBlueOneStartBlue.svg";
import chek from "../../assets/pictures/chek.svg";
import { senderStepsByUser } from "../../services/userService";

function ModuleChooseTutorial({ userId, item, steps }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleArrowClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (
      item.stepOne === null &&
      item.stepTwo === null &&
      item.stepThree === null &&
      item.tutoId
    ) {
      senderStepsByUser("steps", userId, {
        stepOne: false,
        stepTwo: false,
        stepThree: false,
        tutoId: item.tutoId,
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
    <section className={isOpen ? "tutorialSectionShowList" : "tutorialSection"}>
      {steps.length > 0 && (
        <div className="tutorialStarsAndCap">
          {steps.find((step) => step.id === item.id)?.total === 3 ? (
            <img className="tutorialCap" src={capBlueOneStartBlue} alt="cap" />
          ) : (
            <img className="tutorialCap" src={capGreyOneStartBlue} alt="cap" />
          )}
        </div>
      )}
      <p className="tutorialTitle">{item.name}</p>
      <button
        type="button"
        className="arrowButton"
        onClick={() => handleArrowClick()}
      >
        <img
          className={isOpen ? "tutorialArrowUp" : "tutorialArrowDown"}
          src={arrow}
          alt="arrow"
        />
      </button>
      <ul
        className={isOpen ? "tutorialListDisplay" : "tutorialListDisplayNone"}
      >
        <Link
          className="linkTextExplicationQuizz"
          onClick={handleClick}
          to={`/formations/tutorials/explication/${item.tutoId}`}
        >
          <li className="StepTutorial">
            Explication
            {steps.find((step) => step.id === item.id)?.stepOne ? (
              <img className="checkStepTutorial" src={chek} alt="chek" />
            ) : null}
          </li>
        </Link>
        <Link
          className="linkTextExplicationQuizz"
          onClick={handleClick}
          to={`/formations/tutorials/video/${item.tutoId}`}
        >
          <li className="StepTutorial">
            Vidéo
            {steps.find((step) => step.id === item.id)?.stepTwo ? (
              <img className="checkStepTutorial" src={chek} alt="chek" />
            ) : null}
          </li>
        </Link>
        <Link
          className="linkTextExplicationQuizz"
          onClick={handleClick}
          to={`/formations/tutorials/quizz/${item.tutoId}`}
        >
          <li className="StepTutorial">
            Quizz
            {steps.find((step) => step.id === item.id)?.stepThree ? (
              <img className="checkStepTutorial" src={chek} alt="chek" />
            ) : null}
          </li>
        </Link>
      </ul>
    </section>
  );
}

ModuleChooseTutorial.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    stepOne: PropTypes.number.isRequired,
    stepTwo: PropTypes.number.isRequired,
    stepThree: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    tutoId: PropTypes.number.isRequired,
  }).isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      stepOne: PropTypes.number.isRequired,
      stepTwo: PropTypes.number.isRequired,
      stepThree: PropTypes.number.isRequired,
    })
  ).isRequired,
  userId: PropTypes.number.isRequired,
};

export default ModuleChooseTutorial;
