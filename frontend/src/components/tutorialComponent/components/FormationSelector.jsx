import React from "react";
import PropTypes from "prop-types";

function FormationSelector(props) {
  const { selectedValue, filteredValues, setSelectedValue } = props;

  return (
    <>
      <p>Choisissez votre formation :</p>
      <select
        value={selectedValue ?? undefined}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value={selectedValue ?? undefined}>{selectedValue}</option>
        {filteredValues.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
}

FormationSelector.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  filteredValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedValue: PropTypes.func.isRequired,
};

export default FormationSelector;
