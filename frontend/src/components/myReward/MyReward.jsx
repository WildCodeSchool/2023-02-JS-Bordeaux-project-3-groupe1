import React from "react";
import PropTypes from "prop-types";

function MyReward({ icon, iconOpacityLow }) {
  return (
    <img
      className={iconOpacityLow}
      src={icon.iconURL}
      alt={icon.iconDescription}
    />
  );
}
export default MyReward;
MyReward.propTypes = {
  iconOpacityLow: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    iconURL: PropTypes.string.isRequired,
    iconDescription: PropTypes.string.isRequired,
  }),
};
MyReward.defaultProps = {
  icon: {
    iconURL: "firebase",
    iconDescription: "texte de l'icone",
  },
};
