import React from "react";
import PropTypes from "prop-types";

function FormationSelector(props) {
  const { selectedValue, filteredValues, setSelectedValue } = props;

  const updatedValues = filteredValues.map((value) =>
    value === selectedValue ? null : value
  );

  const filteredValuesWithoutSelected = updatedValues.filter(
    (value) => value !== null
  );

  return (
    <>
      <p>Choisir votre formation :</p>
      <select
        value={selectedValue ?? undefined}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value={selectedValue ?? undefined}>{selectedValue}</option>
        {filteredValuesWithoutSelected.map((value) => (
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
