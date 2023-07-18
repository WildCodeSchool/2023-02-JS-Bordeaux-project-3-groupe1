import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { decodeTokenAndExtractRole } from "../../services/authService";

function CardFormation({ item }) {
  const { adminRole } = decodeTokenAndExtractRole();

  const navigation = adminRole
    ? `/formations/${item.id}`
    : `/formations/tutorials/${item.id}`;

  return (
    <Link to={navigation} className="moduleChooseFormation">
      <div className="cardFormationChoose">
        <img
          className="iconFormationChoose"
          src={item.iconURL}
          alt={item.name}
        />
        <h3 className="textFormationChoose">{item.name}</h3>
      </div>
    </Link>
  );
}

CardFormation.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    iconURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

CardFormation.defaultProps = {
  item: {
    iconURL: "http://google.com",
    name: "texte de l'icone",
  },
};
export default CardFormation;
