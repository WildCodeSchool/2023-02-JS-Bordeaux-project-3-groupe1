import React from "react";
import PropTypes from "prop-types";

function MyReward({ icon }) {
  return (
    <img
      className="myRewardIcons"
      src={icon.iconURL}
      alt={icon.iconDescription}
    />
  );
}
export default MyReward;
MyReward.propTypes = {
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
