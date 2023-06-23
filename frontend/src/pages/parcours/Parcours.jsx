import React, { useState, useEffect, useContext } from "react";
import MyReward from "../../components/myReward/MyReward";
import SortMyReward from "../../components/sortMyReward/SortMyReward";
import { fetcher } from "../../services/api";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";

function Parcours() {
  const [iconURL, setIconURL] = useState([]);
  const [tutorialByIcon, setTutorialByIcon] = useState([]);
  const { setNameMenu } = useContext(NameMenuTopContext);
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
  console.info(selectionSection);

  const handleClickSections = (item) => {
    setSelectionSection(item);
  };

  useEffect(() => {
    fetcher("icons")
      .then((data) => {
        setIconURL(data);
      })
      .catch((error) => {
        console.error(error);
      });
    fetcher("tutorialbyicon")
      .then((data) => {
        setTutorialByIcon(data);
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

  const tutorialByIconMap = tutorialByIcon.map((item) => item.iconURL);
  const iconOpacityLow = (icon) => {
    return tutorialByIconMap.includes(icon.iconURL)
      ? "myRewardIcons"
      : "myRewardIconsChange";
  };
  return (
    <main className="parcours">
      <h2 className="titleIconSort">Mes récompenses</h2>
      <figure className="containerRewardIcons">
        {iconURL.map((icon) => (
          <MyReward icon={icon} iconOpacityLow={iconOpacityLow(icon)} />
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
          {tutorialByIcon.length > 0 &&
            selectionSection === 1 &&
            tutorialByIcon.map((icon, index) => {
              if (steps[index].total === 0) {
                return (
                  <SortMyReward
                    iconFormation={icon.iconURL}
                    nameTutorial={icon.name}
                    index={index}
                    progress={steps[index].total}
                    key={icon.name}
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
          {tutorialByIcon.length > 0 &&
            selectionSection === 2 &&
            tutorialByIcon.map((icon, index) => {
              if (steps[index].total > 1 && steps[index].total < 99) {
                return (
                  <SortMyReward
                    iconFormation={icon.iconURL}
                    nameTutorial={icon.name}
                    index={index}
                    progress={steps[index].total}
                    key={icon.name}
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
          {tutorialByIcon.length > 0 &&
            selectionSection === 3 &&
            tutorialByIcon.map((icon, index) => {
              if (steps[index].total === 100) {
                return (
                  <SortMyReward
                    iconFormation={icon.iconURL}
                    nameTutorial={icon.name}
                    index={index}
                    progress={steps[index].total}
                    key={icon.name}
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
          {tutorialByIcon.length > 0 &&
            selectionSection === 4 &&
            tutorialByIcon.map((icon, index) => (
              <SortMyReward
                iconFormation={icon.iconURL}
                nameTutorial={icon.name}
                index={index}
                progress={steps[index].total}
                key={icon.name}
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
