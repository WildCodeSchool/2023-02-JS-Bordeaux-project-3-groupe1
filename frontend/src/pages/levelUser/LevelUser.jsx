import "./LevelUser.scss";
import "../../assets/styles/variables.scss";
import { Link } from "react-router-dom";
import hat from "../../assets/pictures/chapeau.png";
import hat2 from "../../assets/pictures/hat2.png";

function LevelUser() {
  return (
    <div className="containerLevelUser">
      <h3 className="levelUser">
        Quel est votre niveau en matière de nouvelles technologies ?
      </h3>
      <div className="containerButtonLevel">
        <Link to="/formations">
          <button className="buttonLevelBeginner" type="button">
            <div>
              <div className="levelBeginner">
                <h3 className="wordBeginner">Débutant</h3>
                <img
                  className="hatLevel"
                  src={hat}
                  alt="chapeau_diplome_niveau_beginner"
                />
              </div>
              <p className="sentenceBeginner">
                Je n'ai que très peu de connaissances
              </p>
            </div>
          </button>
        </Link>
        <button className="buttonLevelIntermediate" type="button">
          <div>
            <div className="levelIntermediate">
              <h3 className="wordIntermediate">Intermédiaire</h3>
              <img
                className="hatLevel2"
                src={hat2}
                alt="chapeau_diplome_niveau_intermediaire"
              />
            </div>
            <p className="sentenceIntermediate">
              Je me sens plutôt à l'aise en utilisant mon téléphone
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
export default LevelUser;
