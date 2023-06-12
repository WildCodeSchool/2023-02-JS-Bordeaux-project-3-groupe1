import React from "react";
import PropTypes from "prop-types";
import arrow from "../../assets/pictures/arrowTutorial.svg";
import cap from "../../assets/pictures/cap.svg";
import blueStars from "../../assets/pictures/blueStars.svg";
import emptyStars from "../../assets/pictures/emptyStars.svg";

function ModuleChooseTutorial({ isOpen, index, handleArrowClick }) {
  return (
    <section className={isOpen ? "tutorialSectionShowList" : "tutorialSection"}>
      <div className="tutorialStarsAndCap">
        <img className="tutorialStars" src={blueStars} alt="#" />
        <img className="tutorialStars" src={emptyStars} alt="#" />
        <img className="tutorialCap" src={cap} alt="cap" />
      </div>
      <p className="tutorialTitle">Arrêter démarrer le téléphone</p>
      <button
        type="button"
        className="arrowButton"
        onClick={() => handleArrowClick(index)}
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
        <li>Explication</li>
        <li>Vidéo</li>
        <li>Quizz</li>
      </ul>
    </section>
  );
}
ModuleChooseTutorial.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleArrowClick: PropTypes.func.isRequired,
};
export default ModuleChooseTutorial;
