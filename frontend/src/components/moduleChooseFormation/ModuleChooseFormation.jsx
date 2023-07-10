import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ModuleChooseFormation({ item }) {
  return (
    <Link to={`/formations/tutorials/${item.id}`}>
      <div className="moduleChooseFormation">
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

ModuleChooseFormation.propTypes = {
  item: PropTypes.shape({
    iconURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

ModuleChooseFormation.defaultProps = {
  item: {
    iconURL: "http://google.com",
    name: "texte de l'icone",
  },
};
export default ModuleChooseFormation;
