import { Link } from "react-router-dom";
import ImageAccueil from "../../assets/pictures/femmebureau.svg";
import Presenter from "../../assets/pictures/presentatrice.png";
import "../../assets/styles/variables.scss";

function Home() {
  return (
    <main className="mainHome">
      <div className="header">
        <div className="bloc_women">
          <img className="desk_women" src={ImageAccueil} alt="femme_bureau" />
          <div className="decorative_rectangle"> </div>
        </div>
        <h1 className="objectif">Rendre visible les invisibles du numérique</h1>
      </div>
      <div>
        <h2 className="instructions">
          Suivez nos formations afin de progresser à votre vitesse en utilisant
          notre plateforme
        </h2>
      </div>
      <div className="button_debuter_formation">
        <Link to="/level">
          <button className="button_Debuter_Formation" type="button">
            Débuter ma formation
          </button>
        </Link>
      </div>
      <div className="presenter">
        <img className="presenter_img" src={Presenter} alt="présentatrice" />
        <div className="bloc_presenter">
          <h2 className="text_presenter">
            Suivre notre tutoriel de prise en main de notre plateforme
            <Link to="/video-tutorial" className="word_ici">
              ici
            </Link>
          </h2>
        </div>
      </div>
    </main>
  );
}
export default Home;
