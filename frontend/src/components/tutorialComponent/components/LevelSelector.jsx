import React from "react";
import PropTypes from "prop-types";
import starGrey from "../../../assets/starGrey.png";
import starBlue from "../../../assets/starBlue.png";

function LevelSelector(props) {
  const { setLevelTutorial, setStarLevelStyle, starLevelStyle } = props;

  const handleClickLevel1 = () => {
    setLevelTutorial(1);
    setStarLevelStyle(false);
  };

  const handleClickLevel2 = () => {
    setLevelTutorial(starLevelStyle === true ? 1 : 2);
    setStarLevelStyle(!starLevelStyle);
  };

  return (
    <div className="choose-lvl-tutorial">
      <p>Choisir le niveau</p>
      <div className="choose-lvl-tutorial-button">
        <button type="button" onClick={handleClickLevel1}>
          <img src={starBlue} alt="starBlue" />
        </button>
        {starLevelStyle ? (
          <button type="button" onClick={handleClickLevel2}>
            <img src={starBlue} alt="starBlue" />
          </button>
        ) : (
          <button type="button" onClick={handleClickLevel2}>
            <img src={starGrey} alt="starGrey" />
          </button>
        )}
      </div>
    </div>
  );
}

LevelSelector.propTypes = {
  setLevelTutorial: PropTypes.func.isRequired,
  setStarLevelStyle: PropTypes.func.isRequired,
  starLevelStyle: PropTypes.bool.isRequired,
};

export default LevelSelector;
