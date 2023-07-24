import React, { useContext, useEffect, useState } from "react";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import ButtonTutorial from "../../components/containerObjectifVideoQuizzInTutorials/ButtonTutorial";
import Pouce from "../../assets/pouce.png";
import { decodeTokenAndExtractRole } from "../../services/authService";
import { fetcherUSerById } from "../../services/userService";
import videoDemo from "../../assets/video/videoDemoProjet.mp4";

function ContainerTutoPlateform() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const { userId } = decodeTokenAndExtractRole();
  const [userLevel, setUserLevel] = useState(0);
  setNameMenu("Prise en main de la plateforme");

  useEffect(() => {
    fetcherUSerById(`users`, userId)
      .then((data) => {
        setUserLevel(data.level);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container-ObjectifTutorial">
      <div className="container-Objectif">
        <div className="container-Objectif-Title">
          <img className="pouce" src={Pouce} alt="pouce" />
          <div className="container-Title-Tuto">
            <h3 className="objectif">Objectif</h3>
          </div>
        </div>
        <div className="container-ObjectifText-platform">
          <p className="textObjectifPlateform">
            Comprendre au mieux l’utilisation de notre plateforme
          </p>
        </div>
      </div>
      <div className="line-yellowPlateform" />
      <div className="container-title-platform">
        <p>Vidéo</p>
      </div>
      <div className="container-Explications">
        <div className="container-Explications">
          <video src={videoDemo} autoPlay className="VideoPlateform">
            <track
              kind="captions"
              src="captions.vtt"
              label="English captions"
            />
          </video>
        </div>
      </div>
      <div>
        {userLevel !== null ? (
          <ButtonTutorial
            nextOrPreview="containerButtonVideoPlateform"
            path="/formations"
          >
            Débuter ma formation
          </ButtonTutorial>
        ) : (
          <ButtonTutorial
            nextOrPreview="containerButtonVideoPlateform"
            path="/level"
          >
            Débuter ma formation
          </ButtonTutorial>
        )}
      </div>
    </div>
  );
}
export default ContainerTutoPlateform;
