import React, { useState, useEffect } from "react";
import { fetcher } from "../../services/api";
import MyReward from "../../components/myReward/MyReward";
import SortMyReward from "../../components/sortMyReward/SortMyReward";

function Parcours() {
  const buttonSortText = ["Non débutés", "En cours", "Terminés", "Tous"];
  const [NonDebute, EnCours, Termines] = buttonSortText;
  const [iconURL, setIconURL] = useState([]);
  const [tutorialByIcon, setTutorialByIcon] = useState([]);

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
  console.info(tutorialByIcon);
  return (
    <main className="parcours">
      <h2 className="titleIconSort">Mes récompenses</h2>
      <figure className="containerRewardIcons">
        {iconURL.slice(0, 4).map((icon) => (
          <MyReward icon={icon} iconOpacityLow={iconOpacityLow(icon)} />
        ))}
        <p className="switchIcon">...voir plus</p>
      </figure>
      <h3 className="sortTitleIcon">Voulez-vous trier ? Cliquez içi</h3>
      <div className="containerButtonSortReward">
        {buttonSortText.map((text) => (
          <button className="buttonSortReward" type="button">
            {text}
          </button>
        ))}
      </div>
      <article className="allRewardSort">
        <h2 className="titleSortReward titleSortRewardNoBegin">{NonDebute}</h2>
        <div className="iconSortReward iconSortRewardNoBegin">
          {tutorialByIcon.length > 0 ? (
            tutorialByIcon.map((icon, index) => {
              if (steps[index].total === 0) {
                return (
                  <SortMyReward
                    iconFormation={icon.iconURL}
                    nameTutorial={icon.name}
                    index={index}
                    progress={steps[index].total}
                    key={icon.name}
                  />
                );
              }
              return null;
            })
          ) : (
            <p>en cours de chargement...</p>
          )}
        </div>

        <h2 className="titleSortReward titleSortRewardMiddle">{EnCours}</h2>
        <div className="iconSortReward iconSortRewardMiddle">
          {tutorialByIcon.length > 0 ? (
            tutorialByIcon.map((icon, index) => {
              if (steps[index].total > 1 && steps[index].total < 99) {
                return (
                  <SortMyReward
                    iconFormation={icon.iconURL}
                    nameTutorial={icon.name}
                    index={index}
                    progress={steps[index].total}
                    key={icon.name}
                  />
                );
              }
              return null;
            })
          ) : (
            <p>en cours de chargement...</p>
          )}
        </div>
        <h2 className="titleSortReward titleSortRewardFinish">{Termines}</h2>
        <div className="iconSortReward iconSortRewardFinish">
          {tutorialByIcon.length > 0 ? (
            tutorialByIcon.map((icon, index) => {
              if (steps[index].total === 100) {
                return (
                  <SortMyReward
                    iconFormation={icon.iconURL}
                    nameTutorial={icon.name}
                    index={index}
                    progress={steps[index].total}
                    key={icon.name}
                  />
                );
              }
              return null;
            })
          ) : (
            <p>en cours de chargement...</p>
          )}
        </div>
      </article>
    </main>
  );
}
export default Parcours;
