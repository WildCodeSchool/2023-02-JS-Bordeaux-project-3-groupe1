import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import mailProfile from "../../assets/pictures/mailPhoto.png";
import Connexion from "../../assets/pictures/photo_profile.png";
import { fetcherUSerById } from "../../services/userService";
import { decodeTokenAndExtractRole } from "../../services/authService";
import { IsDesktopContext } from "../../contexts/IsDesktopContext";
import ProfileDesk from "./ProfileDesk";

function Profile() {
  const { isDesktop } = useContext(IsDesktopContext);
  const { userId } = decodeTokenAndExtractRole();
  const [userGender, setUserGender] = useState("M");
  const [userLastname, setUserLastname] = useState("Lafond");
  const [userFirstname, setUserFirstname] = useState("Pierre");
  const [userMail, setUserMail] = useState("lafondpierre@gmail.com");
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
  return isDesktop ? (
    <ProfileDesk />
  ) : (
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
