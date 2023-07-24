import React from "react";
import PropTypes from "prop-types";

function ContainerQuizzTutorial({
  dataTutorial,
  orderOne,
  orderTwo,
  orderThree,
  quizzValidate,
  setIsWrongAnswerOne,
  setIsWrongAnswerTwo,
  isWrongAnswerOneChangeClassname,
  isWrongAnswerTwoChangeClassname,
  handleQuizz,
  looser1,
  looser2,
}) {
  console.info(quizzValidate);

  return (
    <>
      <div>
        <h3 className="pTutoQuizz">Quiz</h3>
      </div>
      <div className="SpaceQuizz">
        <div className="container-Quizz-preview">
          <h4 className="TitleQuizz">{dataTutorial.question}</h4>
          <div className="quizzChooseAnswer" style={{ order: orderOne }}>
            <input
              type="radio"
              name="quizz"
              id="one"
              onClick={() => handleQuizz(false, setIsWrongAnswerOne)}
            />
            <label className={isWrongAnswerOneChangeClassname} htmlFor="one">
              {dataTutorial.firstProposal} {looser1}
            </label>
          </div>
          <div className="quizzChooseAnswer" style={{ order: orderTwo }}>
            <input
              type="radio"
              name="quizz"
              id="two"
              onClick={() => handleQuizz(false, setIsWrongAnswerTwo)}
            />
            <label className={isWrongAnswerTwoChangeClassname} htmlFor="two">
              {dataTutorial.secondProposal} {looser2}
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
  quizzValidate: PropTypes.func.isRequired,
  orderOne: PropTypes.number.isRequired,
  orderTwo: PropTypes.number.isRequired,
  orderThree: PropTypes.number.isRequired,
  setIsWrongAnswerOne: PropTypes.bool.isRequired,
  setIsWrongAnswerTwo: PropTypes.bool.isRequired,
  isWrongAnswerOneChangeClassname: PropTypes.string.isRequired,
  isWrongAnswerTwoChangeClassname: PropTypes.string.isRequired,
  looser1: PropTypes.string.isRequired,
  looser2: PropTypes.string.isRequired,
  handleQuizz: PropTypes.func.isRequired,
};

export default ContainerQuizzTutorial;
