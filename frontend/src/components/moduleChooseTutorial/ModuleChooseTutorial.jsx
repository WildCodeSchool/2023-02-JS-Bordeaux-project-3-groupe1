import React, { useState } from "react";
import PropTypes from "prop-types";
import arrow from "../../assets/pictures/arrowTutorial.svg";
import capGreyOneStartBlue from "../../assets/pictures/capGreyOneStartBlue.svg";
import capBlueOneStartBlue from "../../assets/pictures/capBlueOneStartBlue.svg";
import chek from "../../assets/pictures/chek.svg";

function ModuleChooseTutorial({ item, steps, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleArrowClick = () => {
    setIsOpen(!isOpen);
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
        <li className="StepTutorial">
          Explication
          {steps.length > 0 &&
            (steps[index].stepOne ? (
              <img className="checkStepTutorial" src={chek} alt="chek" />
            ) : null)}
        </li>
        <li className="StepTutorial">
          Vidéo
          {steps.length > 0 &&
            (steps[index].stepTwo ? (
              <img className="checkStepTutorial" src={chek} alt="chek" />
            ) : null)}
        </li>
        <li className="StepTutorial">
          Quizz
          {steps.length > 0 &&
            (steps[index].stepThree ? (
              <img className="checkStepTutorial" src={chek} alt="chek" />
            ) : null)}
        </li>
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
