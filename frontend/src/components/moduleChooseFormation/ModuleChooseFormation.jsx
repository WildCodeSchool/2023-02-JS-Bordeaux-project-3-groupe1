import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ModuleChooseFormation({ item, index }) {
  return (
    <Link to={`/formations/tutorials/${index}`}>
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
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    iconURL: PropTypes.string.isRequired,
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
