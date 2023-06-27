import React from "react";
import PropTypes from "prop-types";

function MyReward({ icon, iconOpacityLow }) {
  return <img className={iconOpacityLow} src={icon.iconURL} alt={icon.name} />;
}
export default MyReward;
MyReward.propTypes = {
  iconOpacityLow: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    iconURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
MyReward.defaultProps = {
  icon: {
    iconURL: "firebase",
    name: "texte de l'icone",
  },
};
