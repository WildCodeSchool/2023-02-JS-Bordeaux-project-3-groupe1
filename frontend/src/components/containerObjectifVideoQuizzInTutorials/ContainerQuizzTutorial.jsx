import React from "react";
import PropTypes from "prop-types";

function ContainerQuizzTutorial({ validation, dataTutorial }) {
  return (
    <>
      <div>
        <p>Quizz</p>
      </div>
      <div className="Space">
        <h4>{dataTutorial.question}</h4>
        <input type="radio" name="coucou" id="one" />
        <label htmlFor="one">{dataTutorial.firstProposal}</label>
        <input type="radio" name="coucou" id="two" />
        <label htmlFor="two">{dataTutorial.secondProposal}</label>
        <input type="radio" name="coucou" id="three" />
        <label htmlFor="three">{dataTutorial.response}</label>
        <div className="container-Quizz-preview">
          <p className="explication-text">{validation}</p>
        </div>
      </div>
    </>
  );
}
ContainerQuizzTutorial.propTypes = {
  validation: PropTypes.string.isRequired,
  dataTutorial: PropTypes.shape({
    firstProposal: PropTypes.string.isRequired,
    secondProposal: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    response: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContainerQuizzTutorial;
