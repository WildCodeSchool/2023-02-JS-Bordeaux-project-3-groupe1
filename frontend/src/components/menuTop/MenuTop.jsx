import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backCross from "../../assets/backCross.png";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import ConfirmBack from "../modal/ConfirmBack";

function MenuTop() {
  const { nameMenu } = useContext(NameMenuTopContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectMenu, setSelectMenu] = useState(false);

  useEffect(() => {
    if (
      nameMenu === "Ajouter un tutoriel" ||
      nameMenu === "Modifier un tutoriel"
    ) {
      setSelectMenu(true);
    } else {
      setSelectMenu(false);
    }
  }, [nameMenu]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClickLink = () => {
    if (selectMenu) {
      window.location.href = "/";
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div className="container-menuTitle">
        {selectMenu ? (
          <button type="button" onClick={handleOpenModal}>
            <img src={backCross} alt="back cross" />
          </button>
        ) : (
          <Link to="/">
            <img src={backCross} alt="back cross" />
          </Link>
        )}
        <h2>{nameMenu}</h2>
      </div>
      {isModalOpen && selectMenu && (
        <ConfirmBack
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleClickLink}
        />
      )}
    </>
  );
}

export default MenuTop;
