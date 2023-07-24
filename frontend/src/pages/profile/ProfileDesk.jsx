import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import mailProfile from "../../assets/pictures/mailPhoto.png";
import Connexion from "../../assets/pictures/photo_profile.png";
import { fetcherUSerById, deleteUser } from "../../services/userService";
import { decodeTokenAndExtractRole } from "../../services/authService";
import HommeProfil from "../../assets/pictures/homme-profil.png";
import ConfirmDeleteUser from "../../components/modal/ConfirmDeleteUser";

function Profile() {
  const { userId } = decodeTokenAndExtractRole();
  const [userGender, setUserGender] = useState("M");
  const [userLastname, setUserLastname] = useState("Lafond");
  const [userFirstname, setUserFirstname] = useState("Pierre");
  const [userMail, setUserMail] = useState("lafondpierre@.com");
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
        <button
          className="bouton-modifier"
          type="button"
          onClick={() => handleOpenModal(userId)}
        >
          Supprimer mon profil
        </button>
        <Link to="/formations/parcours">
          <button className="bouton-voir-parcours" type="button">
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
