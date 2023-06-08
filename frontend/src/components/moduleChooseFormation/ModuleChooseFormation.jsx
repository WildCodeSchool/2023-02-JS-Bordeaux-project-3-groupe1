import React from "react";
import PropTypes from "prop-types";

function ModuleChooseFormation({ item }) {
  return (
    <div className="moduleChooseFormation">
      <img className="iconFormationChoose" src={item.iconURL} alt="" />
      <h3 className="textFormationChoose">{item.iconDescription}</h3>
    </div>
  );
}

ModuleChooseFormation.propTypes = {
  item: PropTypes.shape({
    iconURL: PropTypes.string.isRequired,
    iconDescription: PropTypes.string.isRequired,
  }),
};

ModuleChooseFormation.defaultProps = {
  item: {
    iconURL: "http://google.com",
    iconDescription: "texte de l'icone",
  },
};
export default ModuleChooseFormation;
