import React, { useContext } from "react";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import ButtonTutorial from "../../components/containerObjectifVideoQuizzInTutorials/ButtonTutorial";
import Pouce from "../../assets/pouce.png";

function ContainerTutoPlateform() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  setNameMenu("Prise en main de la plateforme");
  return (
    <div className="container-ObjectifTutorial">
      <div className="container-Objectif">
        <div className="container-Objectif-Title">
          <img className="pouce" src={Pouce} alt="pouce" />
          <div className="container-Title-Tuto">
            <h3 className="objectif">Objectif</h3>
          </div>
        </div>
        <div className="container-ObjectifText">
          <p>Comprendre au mieux l’utilisation de notre plateforme</p>
        </div>
      </div>
      <div className="line-yellowPlateform" />
      <p className="pContainerTutoPlateform">Vidéo</p>
      <div className="container-Explications">
        <div className="VideoPlateform" />
      </div>
      <div>
        <ButtonTutorial nextOrPreview="containerButtonVideoPlateform" path="/">
          Valider
        </ButtonTutorial>
      </div>
    </div>
  );
}
export default ContainerTutoPlateform;
