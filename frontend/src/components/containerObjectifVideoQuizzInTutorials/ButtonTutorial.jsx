import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ButtonTutorial({ nextOrPreview, path, children, handleTrueStep }) {
  return (
    <div className="container-button">
      <Link to={path}>
        <button
          type="button"
          className={nextOrPreview}
          onClick={handleTrueStep}
        >
          {children}
        </button>
      </Link>
    </div>
  );
}
ButtonTutorial.propTypes = {
  nextOrPreview: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleTrueStep: PropTypes.func.isRequired,
};
export default ButtonTutorial;
