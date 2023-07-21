import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ConfirmAdmin from "../../../components/modal/ConfirmAdmin";

function ButtonRoleUser({ handleActive, user }) {
  const [nameButton, setNameButton] = useState("Passer administrateur");
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    } else {
      setNameButton("Désactiver administrateur");
    }
  };

  useEffect(() => {
    if (user.role_id === 2) {
      setNameButton("Désactiver administrateur");
    } else if (user.role_id === 1) {
      setNameButton("Passer administrateur");
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
      <button type="button" onClick={() => handleOpenModal(user.id)}>
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
