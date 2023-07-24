import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ConfirmAdmin from "../../../components/modal/ConfirmAdmin";

function ButtonRoleUser({ handleActive, user }) {
  const [nameButton, setNameButton] = useState("Passer administrateur");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonColor, setButtonColor] = useState("");
  const [colorText, setColorText] = useState("");
  const modalRef = useRef(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRole = () => {
    handleActive(user);
    if (nameButton === "Désactiver administrateur") {
      setNameButton("Passer administrateur");
      setButtonColor("#ffcb03");
      setColorText("#003da5");
    } else {
      setNameButton("Désactiver administrateur");
      setButtonColor("#003da5");
      setColorText("#ffffff");
    }
  };

  useEffect(() => {
    if (user.role_id === 2) {
      setNameButton("Désactiver administrateur");
      setButtonColor("#003da5");
      setColorText("#ffffff");
    } else if (user.role_id === 1) {
      setNameButton("Passer administrateur");
      setButtonColor("#ffcb03");
      setColorText("#003da5");
    }
  }, []);

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
    <div>
      <button
        type="button"
        onClick={() => handleOpenModal(user.id)}
        style={{ backgroundColor: buttonColor, color: colorText }}
      >
        {nameButton}
      </button>
      {isModalOpen && (
        <div ref={modalRef}>
          <ConfirmAdmin
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onConfirm={handleRole}
          />
        </div>
      )}
    </div>
  );
}

ButtonRoleUser.propTypes = {
  handleActive: PropTypes.func.isRequired,
  user: PropTypes.shape({
    role_id: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ButtonRoleUser;
