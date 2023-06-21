import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ModuleChooseTutorial from "../../components/moduleChooseTutorial/ModuleChooseTutorial";
import { IsDesktopContext } from "../../contexts/IsDesktopContext";
import manDesk from "../../assets/pictures/manDesk.svg";

function TutorialChoice() {
  const { id } = useParams();
  const tutorialsIdPlusOne = parseInt(id, 10) + 1;
  const { isDesktop } = useContext(IsDesktopContext);
  const [dataTutorial, setDataTutorial] = useState([]);

  const getDataTutorial = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/tutorials/${tutorialsIdPlusOne}`
      );
      setDataTutorial(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDataTutorial();
  }, []);

  return (
    <main className="tutorialChoice">
      {isDesktop ? (
        <>
          <img className="pictureManDesk" src={manDesk} alt="pictureManDesk" />
          <div className="moduleChooseTutorialDesktop">
            {dataTutorial.length > 0 ? (
              dataTutorial[0].map((item, index) => (
                <ModuleChooseTutorial
                  key={item.name}
                  item={item}
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
            dataTutorial[0].map((item, index) => (
              <ModuleChooseTutorial key={item.name} item={item} index={index} />
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
