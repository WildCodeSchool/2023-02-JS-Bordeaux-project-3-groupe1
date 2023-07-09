import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetcherUSerByIdTutorials } from "../../services/userService";
import { fetcher } from "../../services/api";
import ModuleChooseTutorial from "../../components/moduleChooseTutorial/ModuleChooseTutorial";
import { IsDesktopContext } from "../../contexts/IsDesktopContext";
import manDesk from "../../assets/pictures/manDesk.svg";
import { decodeTokenAndExtractRole } from "../../services/authService";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";

function TutorialChoice() {
  const { id } = useParams();
  const { userId } = decodeTokenAndExtractRole();
  const { isDesktop } = useContext(IsDesktopContext);
  const [dataTutorial, setDataTutorial] = useState([]);
  const { setNameMenu } = useContext(NameMenuTopContext);
  const [formations, setFormations] = useState([]);
  const [nameFormation, setNameFormation] = useState("");

  useEffect(() => {
    setNameMenu(nameFormation);
  }, [nameFormation]);

  useEffect(() => {
    fetcher("formations")
      .then((data) => {
        setFormations(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const selectedFormation = formations?.find(
      (formation) => formation.id === parseInt(id, 10)
    );
    if (selectedFormation) {
      const { name } = selectedFormation;
      setNameFormation(name);
    }
  }, [formations, id]);

  useEffect(() => {
    fetcherUSerByIdTutorials("tutorialbyicon", id, userId)
      .then((data) => {
        setDataTutorial(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, userId]);

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
                  userId={userId}
                  steps={stepsMap}
                  index={index}
                />
              ))
            ) : (
              <h4>Cette formation ne contient pas encore de tutoriels</h4>
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
                userId={userId}
                steps={stepsMap}
                index={index}
              />
            ))
          ) : (
            <h4>Cette formation ne contient pas encore de tutoriels</h4>
          )}
        </div>
      )}
    </main>
  );
}

export default TutorialChoice;
