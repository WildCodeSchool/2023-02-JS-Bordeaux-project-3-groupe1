import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ButtonRoleUser({ handleActive, item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [nameButton, setNameButton] = useState("Passer administrateur");

  const handleRole = () => {
    setIsOpen(!isOpen);
    handleActive(item.id);

    if (isOpen) {
      setNameButton("Passer administrateur");
    } else {
      setNameButton("Désactiver administrateur");
    }
  };

  useEffect(() => {
    if (item.role_id === 2) {
      setNameButton("Désactiver administrateur");
    }
  }, []);

  return (
    <div>
      <button type="button" onClick={() => handleRole(item.id)}>
        {nameButton}
      </button>
    </div>
  );
}

ButtonRoleUser.propTypes = {
  handleActive: PropTypes.func.isRequired,
  item: PropTypes.shape({
    role_id: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ButtonRoleUser;
