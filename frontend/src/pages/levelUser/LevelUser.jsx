import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/variables.scss";
import hat2 from "../../assets/pictures/hat2.png";
import hat from "../../assets/pictures/hat1.png";
import pictureLevel from "../../assets/pictures/picture_level.png";
import hatWhite1 from "../../assets/pictures/hatWhite1.png";
import hatWhite2 from "../../assets/pictures/hatWhite2.png";
import { IsDesktopContext } from "../../contexts/IsDesktopContext";
import { senderLevelUser } from "../../services/userService";
import { decodeTokenAndExtractRole } from "../../services/authService";

function LevelUser() {
  const { isDesktop } = useContext(IsDesktopContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const { userId } = decodeTokenAndExtractRole();

  const handleSave = (levelChoice) => {
    console.log(levelChoice);
    if (levelChoice) {
      const valuesUser = {
        levelChoice,
      };

      senderLevelUser("users/level", userId, {
        ...valuesUser,
      })
        .then((data) => {
          console.warn(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.warn("Veuillez sélectionner un niveau avant de valider.");
    }
  };

  const handleMouseEnter = (buttonTrue) => {
    buttonTrue(true);
  };
  const handleMouseLeave = (buttonFalse) => {
    buttonFalse(false);
  };

  return (
    <div className="containerLevelUser">
      {isDesktop ? (
        <div>
          <img src={pictureLevel} className="pictureLevel" alt="Level" />
        </div>
      ) : (
        <div />
      )}
      <h3 className="levelUser">
        Quel est votre niveau en matière de nouvelles technologies ?
      </h3>
      <div className="containerButtonLevel">
        <Link to="/formations">
          <button
            className="buttonLevel"
            type="button"
            onMouseEnter={() => handleMouseEnter(setIsHovered)}
            onMouseLeave={() => handleMouseLeave(setIsHovered)}
            onClick={() => {
              handleSave(1);
            }}
          >
            <div>
              <div className="level">
                <h3 className="word">Débutant</h3>
                <img
                  className="hatLevel"
                  src={isHovered ? hatWhite1 : hat}
                  alt="chapeau_diplome_niveau_beginner"
                />
              </div>
              <p className="sentence">Je n'ai que très peu de connaissances</p>
            </div>
          </button>
        </Link>
        <Link to="/formations">
          <button
            className="buttonLevel"
            type="button"
            onMouseEnter={() => handleMouseEnter(setIsHovered2)}
            onMouseLeave={() => handleMouseLeave(setIsHovered2)}
            onClick={() => {
              handleSave(2);
            }}
          >
            <div>
              <div className="level">
                <h3 className="word">Intermédiaire</h3>
                <img
                  className="hatLevel2"
                  src={isHovered2 ? hatWhite2 : hat2}
                  alt="chapeau_diplome_niveau_intermediaire"
                />
              </div>
              <p className="sentence">
                Je me sens plutôt à l'aise en utilisant mon téléphone
              </p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LevelUser;
