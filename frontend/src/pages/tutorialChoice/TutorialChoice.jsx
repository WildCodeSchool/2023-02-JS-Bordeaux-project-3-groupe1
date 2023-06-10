import React, { useState } from "react";
import arrow from "../../assets/pictures/arrowTutorial.svg";
import cap from "../../assets/pictures/cap.svg";
import blueStars from "../../assets/pictures/blueStars.svg";
import emptyStars from "../../assets/pictures/emptyStars.svg";

function TutorialChoice() {
  const [tutorialSections, setTutorialSections] = useState(
    [...Array(12)].map(() => false)
  );

  const handleArrowClick = (index) => {
    setTutorialSections((prevSections) => {
      const newSections = [...prevSections];
      newSections[index] = !newSections[index];
      return newSections;
    });
  };

  return (
    <main className="tutorialChoice">
      {tutorialSections.map((isOpen, index) => (
        <section
          className={isOpen ? "tutorialSectionShowList" : "tutorialSection"}
        >
          <div className="tutorialStarsAndCap">
            <img src={blueStars} alt="#" />
            <img src={emptyStars} alt="#" />
            <img src={cap} alt="cap" />
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
            className={
              isOpen ? "tutorialListDisplay" : "tutorialListDisplayNone"
            }
          >
            <li>Explication</li>
            <li>Vidéo</li>
            <li>Quizz</li>
          </ul>
        </section>
      ))}
    </main>
  );
}

export default TutorialChoice;
