import PropTypes from "prop-types";
import pouce from "../../../assets/pouce.png";

function ObjectiveSection({
  isUpdate,
  handleObjectifChange,
  objectifTutorial,
}) {
  return (
    <div className="container-objectif">
      <div className="container-objectif-title">
        <img src={pouce} alt="" />
        <div className="container-title-tuto">
          <h3>Objectif</h3>
        </div>
      </div>
      <div className="container-objectifText">
        {isUpdate && (
          <label htmlFor="objectifTutorial">Ajoutez votre objectif ici :</label>
        )}
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
  isUpdate: PropTypes.bool.isRequired,
  handleObjectifChange: PropTypes.func.isRequired,
  objectifTutorial: PropTypes.string.isRequired,
};

export default ObjectiveSection;
