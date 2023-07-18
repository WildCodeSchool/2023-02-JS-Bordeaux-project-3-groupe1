import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ButtonRoleUser({ handleActive, user }) {
  const [nameButton, setNameButton] = useState("Passer administrateur");

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

  return (
    <div>
      <button type="button" onClick={() => handleRole(user.id)}>
        {nameButton}
      </button>
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
