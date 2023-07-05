import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetcher } from "../../services/api";
import ModuleChooseTutorial from "../../components/moduleChooseTutorial/ModuleChooseTutorial";
import { IsDesktopContext } from "../../contexts/IsDesktopContext";
import manDesk from "../../assets/pictures/manDesk.svg";

function TutorialChoice() {
  const { id } = useParams();
  const tutorialsIdPlusOne = parseInt(id, 10) + 1;
  const { isDesktop } = useContext(IsDesktopContext);
  const [dataTutorial, setDataTutorial] = useState([]);

  useEffect(() => {
    fetcher(`tutorialbyicon/${tutorialsIdPlusOne}`)
      .then((data) => {
        setDataTutorial(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const stepsMap = dataTutorial.map((item) => ({
    ...item,
    stepOne: item.stepOne,
    stepTwo: item.stepTwo,
    stepThree: item.stepThree,
    total: item.stepOne + item.stepTwo + item.stepThree,
  }));

  return (
    <main className="tutorialChoice">
      {isDesktop ? (
        <>
          <img className="pictureManDesk" src={manDesk} alt="pictureManDesk" />
          <div className="moduleChooseTutorialDesktop">
            {dataTutorial.length > 0 ? (
              dataTutorial.map((item, index) => (
                <ModuleChooseTutorial
                  key={item.id}
                  item={item}
                  steps={stepsMap}
                  index={index}
                />
              ))
            ) : (
              <p>Chargement de la page ...</p>
            )}
          </div>
        </>
      ) : (
        <div>
          {dataTutorial.length > 0 ? (
            dataTutorial.map((item, index) => (
              <ModuleChooseTutorial
                key={item.id}
                item={item}
                steps={stepsMap}
                index={index}
              />
            ))
          ) : (
            <p>Chargement de la page ...</p>
          )}
        </div>
      )}
    </main>
  );
}

export default TutorialChoice;
