import PropTypes from "prop-types";

function PreviewQuizz({ question, optionOne, optionTwo, answer }) {
  return (
    <div className="container-quizz-preview">
      <h4>Question : {question}</h4>
      <p>Choisir une réponse</p>

      <div className="container-quizz-preview-answer">
        <button type="button">{optionOne}</button>
        <button type="button">{optionTwo}</button>
        <button type="button">{answer}</button>
      </div>
    </div>
  );
}

PreviewQuizz.propTypes = {
  question: PropTypes.string.isRequired,
  optionOne: PropTypes.string.isRequired,
  optionTwo: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default PreviewQuizz;
