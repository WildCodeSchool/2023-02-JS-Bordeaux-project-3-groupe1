import { Link } from "react-router-dom";
import { useContext } from "react";
import backCross from "../../assets/backCross.png";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";

function MenuTop() {
  const { nameMenu } = useContext(NameMenuTopContext);

  const handleClickLink = (e) => {
    if (nameMenu === "Ajouter un tutoriel") {
      const userConfirmed = window.confirm(
        "Voulez-vous vraiment quitter la création du tutoriel ?"
      );
      if (!userConfirmed) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className="container-menuTitle">
      <Link to="/" onClick={handleClickLink}>
        <img src={backCross} alt="back cross" />
      </Link>
      <h2>{nameMenu}</h2>
    </div>
  );
}

export default MenuTop;
