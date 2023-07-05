import React from "react";
import PropTypes from "prop-types";

function TagList(props) {
  const { isUpdate, updatedTags, handleRemoveTagValue, valuesTag } = props;

  return (
    <ul>
      {" "}
      Liste des tags :
      {isUpdate
        ? updatedTags?.map((tagName) => (
            <button
              type="button"
              key={tagName}
              onClick={() => handleRemoveTagValue(tagName)}
            >
              {tagName}
            </button>
          ))
        : valuesTag.map((value) => (
            <button
              type="button"
              key={value}
              onClick={() => handleRemoveTagValue(value)}
            >
              {value}
            </button>
          ))}
    </ul>
  );
}

TagList.propTypes = {
  updatedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  valuesTag: PropTypes.arrayOf(PropTypes.string).isRequired,
  isUpdate: PropTypes.bool.isRequired,
  handleRemoveTagValue: PropTypes.func.isRequired,
};

export default TagList;
