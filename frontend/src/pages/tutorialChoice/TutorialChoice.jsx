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
  const [dataFilterLevelUser, setDataFilterLevelUser] = useState([]);
  const [justTutoId, setJustTutoId] = useState([]);
  const [isLevel1Completed, setIsLevel1Completed] = useState(false);

  useEffect(() => {
    setNameMenu(nameFormation);
  }, [nameFormation]);

  useEffect(() => {
    if (dataFilterLevelUser.length > 0) {
      fetcher("formations")
        .then((data) => {
          setFormations(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [dataFilterLevelUser]);

  useEffect(() => {
    if (formations.length > 0) {
      const selectedFormation = formations?.find(
        (formation) => formation.id === parseInt(id, 10)
      );
      if (selectedFormation) {
        const { name } = selectedFormation;
        setNameFormation(name);
      }
    }
  }, [formations, id]);

  useEffect(() => {
    if (userId) {
      fetcherUSerByIdTutorials("tutorialbyicon", id, userId)
        .then((data) => {
          setDataTutorial(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id, userId]);

  const stepsMap = dataTutorial.map((item) => ({
    ...item,
    stepOne: item.stepOne,
    stepTwo: item.stepTwo,
    stepThree: item.stepThree,
    total: item.stepOne + item.stepTwo + item.stepThree,
  }));

  const levelUser = dataTutorial
    .map((item) => item.levelUser)
    .find((level) => level !== null);

  const filteredTutorialsLevel1 = dataTutorial.filter(
    (item) => item.level === levelUser
  );
  const filteredTutorialsLevel2 = dataTutorial.filter(
    (item) => item.level === 2
  );

  useEffect(() => {
    if (dataTutorial.length > 0) {
      setJustTutoId(dataTutorial.map((item) => item.id));
      console.info(justTutoId);
      setDataFilterLevelUser(dataTutorial);
      setDataFilterLevelUser(filteredTutorialsLevel1);
      setIsLevel1Completed(
        filteredTutorialsLevel1.every((item) => {
          return (
            item.stepOne === 1 && item.stepTwo === 1 && item.stepThree === 1
          );
        })
      );
      if (isLevel1Completed) {
        setDataFilterLevelUser(filteredTutorialsLevel2);
      }
    }
  }, [dataTutorial]);
  const formationFinishOrNotExist =
    justTutoId.length === 0
      ? "Cette formation ne contient pas encore de tutoriels"
      : "Bravo vous avez terminer cette formation";
  return (
    <main className="tutorialChoice tutorialChoiceUser">
      {isDesktop ? (
        <article className="articleDesktopModuleTutorial">
          <img className="pictureManDesk" src={manDesk} alt="pictureManDesk" />
          <div className="moduleChooseTutorialDesktop">
            {dataFilterLevelUser.length > 0 ? (
              dataFilterLevelUser.map((item) => (
                <ModuleChooseTutorial
                  key={item.id}
                  item={item}
                  userId={userId}
                  steps={stepsMap}
                />
              ))
            ) : (
              <h4>{formationFinishOrNotExist}</h4>
            )}
          </div>
        </article>
      ) : (
        <div>
          {dataFilterLevelUser.length > 0 ? (
            dataFilterLevelUser.map((item) => (
              <ModuleChooseTutorial
                key={item.id}
                item={item}
                userId={userId}
                steps={stepsMap}
              />
            ))
          ) : (
            <h4 className="noFormationH4">{formationFinishOrNotExist}</h4>
          )}
        </div>
      )}
    </main>
  );
}

export default TutorialChoice;
