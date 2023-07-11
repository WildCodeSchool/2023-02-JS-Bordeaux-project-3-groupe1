import React, { useState, useEffect, useContext } from "react";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import { fetcher } from "../../services/api";
import MyReward from "../../components/myReward/MyReward";
import SortMyReward from "../../components/sortMyReward/SortMyReward";
import { fetcherUSerById } from "../../services/userService";
import { decodeTokenAndExtractRole } from "../../services/authService";

function Parcours() {
  const [iconURL, setIconURL] = useState([]);
  const [tutorialByIcon, setTutorialByIcon] = useState([]);
  const { setNameMenu } = useContext(NameMenuTopContext);
  const { userId } = decodeTokenAndExtractRole();
  const [userLevel, setUserLevel] = useState([]);
  const [dataFilterLevelUser, setDataFilterLevelUser] = useState([]);
  const [isLevel1Completed, setIsLevel1Completed] = useState(false);

  setNameMenu("Mon parcours");
  const buttonSortTextSections = [
    {
      text: "Non débutés",
      section: 1,
    },
    {
      text: "En cours",
      section: 2,
    },
    {
      text: "Terminés",
      section: 3,
    },
    {
      text: "Tous",
      section: 4,
    },
  ];
  const [selectionSection, setSelectionSection] = useState(
    buttonSortTextSections[3].section
  );
  const handleClickSections = (item) => {
    setSelectionSection(item);
  };
  useEffect(() => {
    fetcher("formations")
      .then((data) => {
        setIconURL(data);
      })
      .catch((error) => {
        console.error(error);
      });
    fetcherUSerById(`tutorialbyicon`, userId)
      .then((data) => {
        setTutorialByIcon(data);
      })
      .catch((error) => {
        console.error(error);
      });
    fetcherUSerById(`users`, userId)
      .then((data) => {
        setUserLevel(data.level);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const steps = tutorialByIcon.map((item) => ({
    stepOne: item.stepOne,
    stepTwo: item.stepTwo,
    stepThree: item.stepThree,
    total:
      (item.stepOne ? 33 : 0) +
      (item.stepTwo ? 33 : 0) +
      (item.stepThree ? 34 : 0),
  }));

  const filteredTutorialsLevel1 = tutorialByIcon.filter(
    (item) => item.levelTuto === userLevel
  );
  const filteredTutorialsLevel2 = tutorialByIcon.filter(
    (item) => item.levelTuto === 2
  );

  useEffect(() => {
    setDataFilterLevelUser(tutorialByIcon);
    setDataFilterLevelUser(filteredTutorialsLevel1);
    setIsLevel1Completed(
      filteredTutorialsLevel1.every((item) => {
        return item.stepOne === 1 && item.stepTwo === 1 && item.stepThree === 1;
      })
    );
    if (isLevel1Completed) {
      setDataFilterLevelUser(filteredTutorialsLevel2);
    }
  }, [tutorialByIcon]);

  const totalStepsTotalLevel1 = dataFilterLevelUser.find(
    (item) => item.levelTuto === userLevel && item.levelTuto === 2
  )?.total_stepsTotal;

  const totalStepsTotalLevel2 = dataFilterLevelUser.find(
    (item) => item.levelTuto === 2
  )?.total_stepsTotal;

  return (
    <main className="parcours">
      <h2 className="titleIconSort">Mes récompenses</h2>
      <figure className="containerRewardIcons">
        {iconURL.map((icon) => (
          <MyReward
            key={icon.id}
            icon={icon}
            tutorialByIcon={tutorialByIcon}
            totalStepsTotalLevel1={totalStepsTotalLevel1}
            totalStepsTotalLevel2={totalStepsTotalLevel2}
            dataFilterLevelUser={dataFilterLevelUser}
          />
        ))}
      </figure>
      <h3 className="sortTitleIcon">Voulez-vous trier ? Cliquez ici</h3>
      <div className="containerButtonSortReward">
        {buttonSortTextSections.map((text) => (
          <button
            className="buttonSortReward"
            type="button"
            onClick={() => handleClickSections(text.section)}
          >
            {text.text}
          </button>
        ))}
      </div>
      <article className="allRewardSort">
        {selectionSection === 1 && (
          <h2 className="titleSortReward titleSortRewardNoBegin">
            {buttonSortTextSections[0].text}
          </h2>
        )}
        <div className="iconSortReward iconSortRewardNoBegin">
          {dataFilterLevelUser.length > 0 &&
            selectionSection === 1 &&
            dataFilterLevelUser.map((icon, index) => {
              if (steps[index].total === 0) {
                return (
                  <SortMyReward
                    tutoId={icon.tutoId}
                    iconFormation={icon.iconURL}
                    nameTutorial={icon.name}
                    index={index}
                    progress={steps[index].total}
                    key={icon.id}
                    selectionSection={selectionSection}
                    sectionNumber={1}
                  />
                );
              }
              return null;
            })}
        </div>
        {selectionSection === 2 && (
          <h2 className="titleSortReward titleSortRewardMiddle">
            {buttonSortTextSections[1].text}
          </h2>
        )}
        <div className="iconSortReward iconSortRewardMiddle">
          {dataFilterLevelUser.length > 0 &&
            selectionSection === 2 &&
            dataFilterLevelUser.map((icon, index) => {
              if (steps[index].total > 1 && steps[index].total < 99) {
                return (
                  <SortMyReward
                    tutoId={icon.tutoId}
                    iconFormation={icon.iconURL}
                    nameTutorial={icon.name}
                    index={index}
                    progress={steps[index].total}
                    key={icon.id}
                    selectionSection={selectionSection}
                    sectionNumber={2}
                  />
                );
              }
              return null;
            })}
        </div>
        {selectionSection === 3 && (
          <h2 className="titleSortReward titleSortRewardFinish">
            {buttonSortTextSections[2].text}
          </h2>
        )}
        <div className="iconSortReward iconSortRewardFinish">
          {dataFilterLevelUser.length > 0 &&
            selectionSection === 3 &&
            dataFilterLevelUser.map((icon, index) => {
              if (steps[index].total === 100) {
                return (
                  <SortMyReward
                    iconFormation={icon.iconURL}
                    nameTutorial={icon.name}
                    index={index}
                    progress={steps[index].total}
                    key={icon.id}
                    selectionSection={selectionSection}
                    sectionNumber={3}
                  />
                );
              }
              return null;
            })}
        </div>
        {selectionSection === 4 && (
          <h2 className="titleSortReward titleSortRewardAll">
            {buttonSortTextSections[3].text}
          </h2>
        )}
        <div className="iconSortReward iconSortRewardAll">
          {dataFilterLevelUser.length > 0 &&
            selectionSection === 4 &&
            dataFilterLevelUser.map((icon, index) => (
              <SortMyReward
                iconFormation={icon.iconURL}
                nameTutorial={icon.name}
                index={index}
                progress={steps[index].total}
                key={icon.id}
                selectionSection={selectionSection}
                sectionNumber={4}
              />
            ))}
        </div>
      </article>
    </main>
  );
}
export default Parcours;
