import { Link } from "react-router-dom";
import mailProfile from "../../assets/pictures/mailPhoto.png";
import Connexion from "../../assets/pictures/photo_profile.png";
import HommeProfil from "../../assets/pictures/homme-profil.png";

function Profile() {
  return (
    <main className="main-profil">
      <div className="titre-profil">
        <h2>Mon profil</h2>
      </div>
      <div className="container-img-form">
        <img className="homme-profil" src={HommeProfil} alt="Homme profil" />
        <div className="container-photo-form">
          <div className="photo-profil" />
          <div className="container-formulaire">
            <div className="identity-profil">
              <img className="img-profil" src={Connexion} alt="icone profile" />
              <p className="Nom-profil">M Lafond Pierre</p>
            </div>
            <div className="mail-profil">
              <img
                className="img-mail-profil"
                src={mailProfile}
                alt="icone mail"
              />
              <p className="mail">Lafond@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="boutons-profil">
        <Link to="/modificationProfile">
          <button className="bouton-modifier" type="button">
            Modifier mon profil
          </button>
        </Link>
        <Link to="/formations/parcours">
          <button className="bouton-voir-parcours" type="button">
            Voir mon parcours
          </button>
        </Link>
      </div>
    </main>
  );
}
export default Profile;
