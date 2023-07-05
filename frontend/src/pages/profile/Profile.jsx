import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import mailProfile from "../../assets/pictures/mailPhoto.png";
import Connexion from "../../assets/pictures/photo_profile.png";
import { fetcherUSerById } from "../../services/userService";

function Profile() {
  const [user, setUser] = useState({});
  const [userId] = useState(1);
  const [userGender, setUserGender] = useState("M");
  const [userLastname, setUserLastname] = useState("Lafond");
  const [userFirstname, setUserFirstname] = useState("Pierre");

  useEffect(() => {
    fetcherUSerById("users", userId)
      .then((data) => {
        setUser(data);
        setUserLastname(user?.lastname);
        setUserFirstname(user?.firstname);
        if (user.gender === "Masculin") {
          setUserGender("M");
        } else if (user.gender === "Féminin") {
          setUserGender("Mme");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userLastname, userFirstname]);

  return (
    <main className="mainProfile">
      <div className="titleProfile">
        <h2>Mon profil</h2>
      </div>
      <div className="photoProfile">
        {user?.picture && <img src={user.picture} alt="" />}
      </div>
      <div className="nameProfile">
        <img className="imgProfile" src={Connexion} alt="icone profile" />
        {user ? (
          <div className="NameProfile">
            {" "}
            {userGender} {userLastname} {userFirstname}
          </div>
        ) : (
          <div className="NameProfile">M Lafond Pierre</div>
        )}
      </div>
      <div className="mailProfile">
        <img className="imgMailProfile" src={mailProfile} alt="icone mail" />
        <div className="MailProfile">{user.email}</div>
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
