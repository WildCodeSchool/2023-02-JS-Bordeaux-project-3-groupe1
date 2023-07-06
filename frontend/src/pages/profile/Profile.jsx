import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import mailProfile from "../../assets/pictures/mailPhoto.png";
import Connexion from "../../assets/pictures/photo_profile.png";
import { fetcherUSerById } from "../../services/userService";

function Profile() {
  const [userId] = useState(1);
  const [userGender, setUserGender] = useState("M");
  const [userLastname, setUserLastname] = useState("");
  const [userFirstname, setUserFirstname] = useState("");
  const [userMail, setUserMail] = useState("@gmail.com");
  const [userPicture, setUserPicture] = useState("");

  useEffect(() => {
    fetcherUSerById("users", userId)
      .then((data) => {
        if (data) {
          setUserGender(data.gender === "Masculin" ? "M" : "Mme");
          setUserLastname(data.lastname || "Lafond");
          setUserFirstname(data.firstname || "Pierre");
          setUserMail(data.email || "lafondpierre@gmail.com");
          setUserPicture(data.picture);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);

  return (
    <main className="mainProfile">
      <div className="titleProfile">
        <h2>Mon profil</h2>
      </div>
      <div className="photoProfile">
        {userPicture && <img src={userPicture} alt="" />}
      </div>
      <div className="nameProfile">
        <img className="imgProfile" src={Connexion} alt="icone profile" />
        <div className="NameProfile">
          {userGender} {userLastname} {userFirstname}
        </div>
      </div>
      <div className="nameProfile">
        <img className="imgMailProfile" src={mailProfile} alt="icone mail" />
        <div className="MailProfile">{userMail}</div>
      </div>
      <div className="buttons_profile">
        <Link to="/modificationProfile">
          <button className="button_edit_my_profile" type="button">
            Modifier mon profil
          </button>
        </Link>
        <Link to="/formations/parcours">
          <button className="button_see_my_journey" type="button">
            Voir mon parcours
          </button>
        </Link>
      </div>
    </main>
  );
}
export default Profile;
