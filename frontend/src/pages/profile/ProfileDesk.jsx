import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import mailProfile from "../../assets/pictures/mailPhoto.png";
import Connexion from "../../assets/pictures/photo_profile.png";
import { fetcherUSerById } from "../../services/userService";
import { decodeTokenAndExtractRole } from "../../services/authService";
import HommeProfil from "../../assets/pictures/homme-profil.png";

function Profile() {
  const { userId } = decodeTokenAndExtractRole();
  const [userGender, setUserGender] = useState("M");
  const [userLastname, setUserLastname] = useState("Lafond");
  const [userFirstname, setUserFirstname] = useState("Pierre");
  const [userMail, setUserMail] = useState("lafondpierre@.com");
  const [userPicture, setUserPicture] = useState("");
  useEffect(() => {
    fetcherUSerById("users", userId)
      .then((data) => {
        if (data) {
          setUserGender(data.gender === "Masculin" ? "M" : "Mme");
          setUserLastname(data.lastname);
          setUserFirstname(data.firstname);
          setUserMail(data.email);
          setUserPicture(data.picture);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);
  return (
    <main className="main-profil">
      <div className="titre-profil">
        <h2>Mon profil</h2>
      </div>

      <div className="container-img-form">
        <img className="homme-profil" src={HommeProfil} alt="Homme profil" />
        <div className="container-photo-form">
          <div className="photo-profil">
            {userPicture && <img src={userPicture} alt="" />}
          </div>
          <div className="container-formulaire">
            <div className="identity-profil">
              <img className="img-profil" src={Connexion} alt="icone profile" />
              <p className="Nom-profil">
                {userGender} {userLastname} {userFirstname}
              </p>
            </div>
            <div className="mail-profil">
              <img
                className="img-mail-profil"
                src={mailProfile}
                alt="icone mail"
              />
              <p className="mail">{userMail}</p>
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
