import React from "react";
import PropTypes from "prop-types";

function ContainerQuizzTutorial({ validation }) {
  return (
    <div>
      <p>Quizz</p>
      <div className="container-Quizz-preview">
        <p className="explication-text">{validation}</p>
      </div>
      <div className="Space" />
    </div>
  );
}
ContainerQuizzTutorial.propTypes = {
  validation: PropTypes.string,
};

ContainerQuizzTutorial.defaultProps = {
  validation: "image",
};
export default ContainerQuizzTutorial;
