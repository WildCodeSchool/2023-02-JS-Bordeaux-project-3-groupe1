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
  const [filteredTutorialsLevel, setFilteredTutorialsLevel] = useState([]);

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

  useEffect(() => {
    if (userLevel === 1) {
      setFilteredTutorialsLevel(tutorialByIcon);
    } else if (userLevel === 2) {
      setFilteredTutorialsLevel(
        tutorialByIcon.filter((item) => item.levelTuto === 2)
      );
    }
  }, [tutorialByIcon]);

  return (
    <main className="parcours">
      <h2 className="titleIconSort">Mes Badges</h2>
      <figure className="containerRewardIcons">
        {iconURL.map((icon) => (
          <MyReward
            key={icon.id}
            icon={icon}
            userLevel={userLevel}
            filteredTutorialsLevel={filteredTutorialsLevel}
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
          {filteredTutorialsLevel.length > 0 &&
            selectionSection === 1 &&
            filteredTutorialsLevel.map((icon, index) => {
              if (steps[index].total === 0) {
                return (
                  <SortMyReward
                    userId={userId}
                    icon={icon}
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
          {filteredTutorialsLevel.length > 0 &&
            selectionSection === 2 &&
            filteredTutorialsLevel.map((icon, index) => {
              if (steps[index].total > 1 && steps[index].total < 99) {
                return (
                  <SortMyReward
                    userId={userId}
                    icon={icon}
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
          {filteredTutorialsLevel.length > 0 &&
            selectionSection === 3 &&
            filteredTutorialsLevel.map((icon, index) => {
              if (steps[index].total === 100) {
                return (
                  <SortMyReward
                    userId={userId}
                    icon={icon}
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
          {filteredTutorialsLevel.length > 0 &&
            selectionSection === 4 &&
            filteredTutorialsLevel.map((icon, index) => (
              <SortMyReward
                userId={userId}
                icon={icon}
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
