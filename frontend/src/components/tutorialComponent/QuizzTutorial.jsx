import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CreateTutorialContext } from "../../contexts/CreateTutorialContext";
import validation from "../../assets/validation.png";
import { sender } from "../../services/tutorialService";

function QuizzTutorial({ setCountStepTutorial }) {
  const { forms, setForms } = useContext(CreateTutorialContext);
  const [question, setQuestion] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [answer, setAnswer] = useState("");
  const [isValid, setIsValid] = useState(false);

  if (typeof setCountStepTutorial === "function") {
    setCountStepTutorial(4);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "question":
        setQuestion(value);
        break;
      case "optionOne":
        setOptionOne(value);
        break;
      case "optionTwo":
        setOptionTwo(value);
        break;
      case "answer":
        setAnswer(value);
        break;
      default:
    }
  };

  const handleSaveTutorial = () => {
    const newValuesTutorial = {
      question,
      optionOne,
      optionTwo,
      answer,
    };

    if (question && optionOne && optionTwo && answer) {
      setForms((prevForms) => ({
        ...prevForms,
        ...newValuesTutorial,
      }));
      sender("tutorials", {
        ...forms,
        ...newValuesTutorial,
      })
        .then((data) => {
          console.warn(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.warn("Tous les champs doivent être remplis");
    }
  };

  useEffect(() => {
    const isValidForm =
      question.trim() !== "" &&
      optionOne.trim() !== "" &&
      optionOne.trim() !== "" &&
      answer.trim() !== "";
    setIsValid(isValidForm);
  }, [question, optionOne, optionTwo, answer, forms]);

  return (
    <div className="container-createQuizzTutorial">
      <label htmlFor="question">Question :</label>
      <input
        name="question"
        id="question"
        onChange={handleInputChange}
        value={question}
        placeholder="Ajouter une question"
      />
      <label htmlFor="answer">La réponse :</label>
      <input
        name="answer"
        id="answer"
        onChange={handleInputChange}
        value={answer}
        placeholder="Ajouter la réponse "
      />
      <label htmlFor="optionOne">Première option :</label>
      <input
        name="optionOne"
        id="optionOne"
        onChange={handleInputChange}
        value={optionOne}
        placeholder="Ajouter une option de réponse"
      />
      <label htmlFor="optionTwo">Deuxième option :</label>
      <input
        name="optionTwo"
        id="optionTwo"
        onChange={handleInputChange}
        value={optionTwo}
        placeholder="Ajouter une option de réponse"
      />
      <div className="container-quizz-preview">
        <div className="container-quizz-preview-title">
          <div className="space" />
          <h3>Quizz</h3>
          <img src={validation} alt="validation" />
        </div>
        <h4>Question : {question}</h4>
        <p>Choisissez une réponse</p>

        <div className="container-quizz-preview-answer">
          <button type="button">{optionOne}</button>
          <button type="button">{optionTwo}</button>
          <button type="button">{answer}</button>
        </div>
      </div>
      <Link to="/">
        <button type="button" onClick={handleSaveTutorial} disabled={!isValid}>
          Valider le tutorial
        </button>
      </Link>
    </div>
  );
}

/* label + couleur */

QuizzTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
};

export default QuizzTutorial;
