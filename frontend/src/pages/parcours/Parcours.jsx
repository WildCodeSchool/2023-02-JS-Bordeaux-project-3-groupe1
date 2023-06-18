import React, { useState, useEffect } from "react";
import api from "../../services/api";
import MyReward from "../../components/myReward/MyReward";
import SortMyReward from "../../components/sortMyReward/SortMyReward";

function Parcours() {
  const buttonSortText = ["Non débutés", "En cours", "Terminés", "Tous"];
  const [NonDebute, EnCours, Termines] = buttonSortText;
  const [iconsAndDescriptions, setIconsAndDescriptions] = useState([]);

  const getIconAndDescription = async () => {
    try {
      const response = await api.get("/icons");
      setIconsAndDescriptions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getIconAndDescription();
  }, []);
  console.info(iconsAndDescriptions);

  return (
    <main className="parcours">
      <h2 className="titleIconSort">Mes récompenses</h2>
      <figure className="containerRewardIcons">
        {iconsAndDescriptions.slice(0, 4).map((icon) => (
          <MyReward icon={icon} />
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
          {iconsAndDescriptions.slice(0, 6).map((icon) => (
            <SortMyReward icon={icon.iconURL} />
          ))}
        </div>
        <h2 className="titleSortReward titleSortRewardMiddle">{EnCours}</h2>
        <div className="iconSortReward iconSortRewardMiddle">
          {iconsAndDescriptions.slice(6, 10).map((icon) => (
            <SortMyReward icon={icon.iconURL} />
          ))}
        </div>
        <h2 className="titleSortReward titleSortRewardFinish">{Termines}</h2>
        <div className="iconSortReward iconSortRewardFinish">
          {iconsAndDescriptions.slice(10, 12).map((icon) => (
            <SortMyReward icon={icon.iconURL} />
          ))}
        </div>
      </article>
    </main>
  );
}
export default Parcours;
