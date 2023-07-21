import PropTypes from "prop-types";
import pouce from "../../../assets/pouce.png";

function ObjectiveSection({ handleObjectifChange, objectifTutorial }) {
  return (
    <div className="container-objectif">
      <div className="container-objectif-title">
        <img src={pouce} alt="" />
        <div className="container-title-tuto">
          <h3>Objectif</h3>
        </div>
      </div>
      <div className="container-objectifText">
        <textarea
          name="objectifTutorial"
          id="objectifTutorial"
          onChange={handleObjectifChange}
          value={objectifTutorial}
          maxLength={140}
          placeholder="Ajoutez votre objectif ici"
        />
      </div>
    </div>
  );
}

ObjectiveSection.propTypes = {
  handleObjectifChange: PropTypes.func.isRequired,
  objectifTutorial: PropTypes.string.isRequired,
};

export default ObjectiveSection;
