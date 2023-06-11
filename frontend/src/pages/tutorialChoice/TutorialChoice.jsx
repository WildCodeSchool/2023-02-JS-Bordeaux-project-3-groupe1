import React, { useContext, useState } from "react";
import ModuleChooseTutorial from "../../components/moduleChooseTutorial/ModuleChooseTutorial";
import { IsDesktopContext } from "../../contexts/IsDesktopContext";
import manDesk from "../../assets/pictures/manDesk.svg";

function TutorialChoice() {
  const { isDesktop } = useContext(IsDesktopContext);
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
      {isDesktop ? (
        <>
          <img className="pictureManDesk" src={manDesk} alt="pictureManDesk" />
          <div className="moduleChooseTutorialDesktop">
            {tutorialSections.map((isOpen, index) => (
              <ModuleChooseTutorial
                isOpen={isOpen}
                index={index}
                handleArrowClick={handleArrowClick}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          {tutorialSections.map((isOpen, index) => (
            <ModuleChooseTutorial
              isOpen={isOpen}
              index={index}
              handleArrowClick={handleArrowClick}
            />
          ))}
        </>
      )}
    </main>
  );
}

export default TutorialChoice;
