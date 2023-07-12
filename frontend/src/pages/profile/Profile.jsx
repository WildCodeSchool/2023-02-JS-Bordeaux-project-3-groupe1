import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import mailProfile from "../../assets/pictures/mailPhoto.png";
import Connexion from "../../assets/pictures/photo_profile.png";
import { fetcherUSerById, deleteUser } from "../../services/userService";
import { decodeTokenAndExtractRole } from "../../services/authService";
import { IsDesktopContext } from "../../contexts/IsDesktopContext";
import ProfileDesk from "./ProfileDesk";
import ConfirmDeleteUser from "../../components/modal/ConfirmDeleteUser";

function Profile() {
  const { isDesktop } = useContext(IsDesktopContext);
  const { userId } = decodeTokenAndExtractRole();
  const [userGender, setUserGender] = useState("M");
  const [userLastname, setUserLastname] = useState("Lafond");
  const [userFirstname, setUserFirstname] = useState("Pierre");
  const [userMail, setUserMail] = useState("lafondpierre@gmail.com");
  const [userPicture, setUserPicture] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteUser = () => {
    if (userId) {
      deleteUser("users", userId)
        .then((data) => {
          console.warn(data);
          setIsModalOpen(false);
          localStorage.clear();
          toast.success("Le profil a bien été supprimé");
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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
        <button
          className="button_edit_my_profile"
          type="button"
          onClick={() => handleOpenModal(userId)}
        >
          Supprimer le profil
        </button>
        <Link to="/formations/parcours">
          <button className="button_see_my_journey" type="button">
            Voir mon parcours
          </button>
        </Link>
      </div>
      {isModalOpen && (
        <div ref={modalRef}>
          <ConfirmDeleteUser
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onConfirm={handleDeleteUser}
          />
        </div>
      )}
    </main>
  );
}
export default Profile;
