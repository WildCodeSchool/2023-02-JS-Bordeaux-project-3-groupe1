import React, { useContext, useEffect, useState } from "react";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import ButtonTutorial from "../../components/containerObjectifVideoQuizzInTutorials/ButtonTutorial";
import Pouce from "../../assets/pouce.png";
import Cible from "../../assets/pictures/cible.png";
import { IsDesktopContext } from "../../contexts/IsDesktopContext";
import { decodeTokenAndExtractRole } from "../../services/authService";
import { fetcherUSerById } from "../../services/userService";
import videoDemo from "../../assets/video/videoDemoProjet.mp4";

function ContainerTutoPlateform() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const { isDesktop } = useContext(IsDesktopContext);
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
            {isDesktop ? (
              <div>
                <img src={Cible} className="ciblePlateform" alt="cible" />
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
        <div className="container-ObjectifText">
          <p className="textObjectifPlateform">
            Comprendre au mieux l’utilisation de notre plateforme
          </p>
        </div>
      </div>
      <div className="line-yellowPlateform" />
      <p className="pContainerTutoPlateform">Vidéo</p>
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
            path="/LevelUser"
          >
            Débuter ma formation
          </ButtonTutorial>
        )}
      </div>
    </div>
  );
}
export default ContainerTutoPlateform;
