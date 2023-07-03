import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import arrow from "../../assets/pictures/arrowTutorial.svg";
import capGreyOneStartBlue from "../../assets/pictures/capGreyOneStartBlue.svg";
import capBlueOneStartBlue from "../../assets/pictures/capBlueOneStartBlue.svg";
import chek from "../../assets/pictures/chek.svg";
import { sender } from "../../services/api";

function ModuleChooseTutorial({ item, steps, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const { formationId } = useParams();

  const handleArrowClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    sender("steps", formationId, {
      stepOne: false,
      stepTwo: false,
      stepThree: false,
    })
      .then((data) => {
        console.warn(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className={isOpen ? "tutorialSectionShowList" : "tutorialSection"}>
      {steps.length > 0 && (
        <div className="tutorialStarsAndCap">
          {steps[index].total === 3 ? (
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
          onClick={handleClick}
          to={`/formations/tutorials/explication/${item.tutoID}`}
        >
          <li className="StepTutorial">
            Explication
            {steps.length > 0 &&
              (steps[index].stepOne ? (
                <img className="checkStepTutorial" src={chek} alt="chek" />
              ) : null)}
          </li>
        </Link>
        <Link to={`/formations/tutorials/video/${item.tutoID}`}>
          <li className="StepTutorial">
            Vidéo
            {steps.length > 0 &&
              (steps[index].stepTwo ? (
                <img className="checkStepTutorial" src={chek} alt="chek" />
              ) : null)}
          </li>
        </Link>
        <Link to={`/formations/tutorials/quizz/${item.tutoID}`}>
          <li className="StepTutorial">
            Quizz
            {steps.length > 0 &&
              (steps[index].stepThree ? (
                <img className="checkStepTutorial" src={chek} alt="chek" />
              ) : null)}
          </li>
        </Link>
      </ul>
    </section>
  );
}
ModuleChooseTutorial.propTypes = {
  item: PropTypes.string.isRequired,
  steps: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
export default ModuleChooseTutorial;
