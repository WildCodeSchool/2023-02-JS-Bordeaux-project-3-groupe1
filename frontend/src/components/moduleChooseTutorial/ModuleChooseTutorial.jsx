import React, { useState } from "react";
import PropTypes from "prop-types";
import arrow from "../../assets/pictures/arrowTutorial.svg";
import cap from "../../assets/pictures/cap.svg";
import blueStars from "../../assets/pictures/blueStars.svg";
import emptyStars from "../../assets/pictures/emptyStars.svg";

function ModuleChooseTutorial({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleArrowClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className={isOpen ? "tutorialSectionShowList" : "tutorialSection"}>
      <div className="tutorialStarsAndCap">
        <img className="tutorialStars" src={blueStars} alt="#" />
        <img className="tutorialStars" src={emptyStars} alt="#" />
        <img className="tutorialCap" src={cap} alt="cap" />
      </div>
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
        <li>Explication</li>
        <li>Vidéo</li>
        <li>Quizz</li>
      </ul>
    </section>
  );
}
ModuleChooseTutorial.propTypes = {
  item: PropTypes.string.isRequired,
};
export default ModuleChooseTutorial;
