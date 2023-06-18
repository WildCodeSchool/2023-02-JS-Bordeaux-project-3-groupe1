import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

function SortMyReward({ icon }) {
  const valueProgress = 50;

  return (
    <div className="sortMyReward">
      <h3 className="titleSortMyReward">titre</h3>
      <CircularProgressbarWithChildren value={valueProgress}>
        <img className="iconFormationReward" src={icon} alt="icondescription" />
      </CircularProgressbarWithChildren>
    </div>
  );
}
export default SortMyReward;
SortMyReward.propTypes = {
  icon: PropTypes.string.isRequired,
};
