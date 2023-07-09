import React from "react";
import PropTypes from "prop-types";

function ContainerQuizzTutorial({
  dataTutorial,
  orderOne,
  orderTwo,
  orderThree,
  setQuizzValidate,
  setQuizzSucceed,
}) {
  const handleQuizz = (condition) => {
    setQuizzValidate(false);
    setQuizzSucceed(condition);
  };

  return (
    <>
      <div>
        <p>Quizz</p>
      </div>
      <div className="Space">
        <div className="container-Quizz-preview">
          <h4>{dataTutorial.question}</h4>
          <div className="quizzChooseAnswer" style={{ order: orderOne }}>
            <input
              type="radio"
              name="quizz"
              id="one"
              onClick={() => handleQuizz(false)}
            />
            <label className="quizzLabelAnswer" htmlFor="one">
              {dataTutorial.firstProposal}
            </label>
          </div>
          <div className="quizzChooseAnswer" style={{ order: orderTwo }}>
            <input
              type="radio"
              name="quizz"
              id="two"
              onClick={() => handleQuizz(false)}
            />
            <label className="quizzLabelAnswer" htmlFor="two">
              {dataTutorial.secondProposal}
            </label>
          </div>
          <div className="quizzChooseAnswer" style={{ order: orderThree }}>
            <input
              type="radio"
              name="quizz"
              id="three"
              onClick={() => handleQuizz(true)}
            />
            <label className="quizzLabelAnswer" htmlFor="three">
              {dataTutorial.response}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
ContainerQuizzTutorial.propTypes = {
  dataTutorial: PropTypes.shape({
    firstProposal: PropTypes.string.isRequired,
    secondProposal: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    response: PropTypes.string.isRequired,
  }).isRequired,
  setQuizzValidate: PropTypes.func.isRequired,
  setQuizzSucceed: PropTypes.func.isRequired,
  orderOne: PropTypes.number.isRequired,
  orderTwo: PropTypes.number.isRequired,
  orderThree: PropTypes.number.isRequired,
};

export default ContainerQuizzTutorial;
