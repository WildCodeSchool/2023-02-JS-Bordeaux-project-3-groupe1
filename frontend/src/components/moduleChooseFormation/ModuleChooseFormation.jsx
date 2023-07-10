import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { decodeTokenAndExtractRole } from "../../services/authService";

function ModuleChooseFormation({ item }) {
  const { adminRole } = decodeTokenAndExtractRole();

  return (
    <div>
      {adminRole ? (
        <Link to={`/formations/${item.id}`}>
          <div className="moduleChooseFormation">
            <img
              className="iconFormationChoose"
              src={item.iconURL}
              alt={item.name}
            />
            <h3 className="textFormationChoose">{item.name}</h3>
          </div>
        </Link>
      ) : (
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
      )}
    </div>
  );
}

ModuleChooseFormation.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
