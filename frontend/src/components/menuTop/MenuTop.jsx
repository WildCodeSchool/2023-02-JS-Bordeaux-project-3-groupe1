import { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import backCross from "../../assets/backCross.png";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import ConfirmBack from "../modal/ConfirmBack";

function MenuTop() {
  const { nameMenu } = useContext(NameMenuTopContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectMenu, setSelectMenu] = useState(false);
  const modalRef = useRef(null);

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
        <h3 className="titleMenuTop">{nameMenu}</h3>
      </div>
      {isModalOpen && selectMenu && (
        <div ref={modalRef}>
          <ConfirmBack
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onConfirm={handleClickLink}
          />
        </div>
      )}
    </>
  );
}

export default MenuTop;
