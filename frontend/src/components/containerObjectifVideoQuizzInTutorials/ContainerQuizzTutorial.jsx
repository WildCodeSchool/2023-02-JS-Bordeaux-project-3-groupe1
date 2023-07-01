import React from "react";
import PropTypes from "prop-types";

function ContainerQuizzTutorial({ validation }) {
  return (
    <div className="container-Quizz-preview">
      <div className="container-quizz-preview-title">
        <div className="Space" />
        <p>Quizz</p>
        <img className="validation" src={validation} alt="validation" />
      </div>
      <p className="explication-text">{}</p>
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
