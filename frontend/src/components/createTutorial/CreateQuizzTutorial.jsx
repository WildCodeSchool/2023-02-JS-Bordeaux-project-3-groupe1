import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CreateTutorialContext } from "../../contexts/CreateTutorialContext";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import validation from "../../assets/validation.png";
import { sender } from "../../services/tutorialService";

function TutorialCreater() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const { forms, setForms } = useContext(CreateTutorialContext);
  const [question, setQuestion] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [answer, setAnswer] = useState("");
  const [isValid, setIsValid] = useState(false);

  setNameMenu("Ajouter un tutoriel");

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
      <input
        name="question"
        id="question"
        onChange={handleInputChange}
        value={question}
        placeholder="Ajouter une question"
      />
      <input
        name="optionOne"
        id="optionOne"
        onChange={handleInputChange}
        value={optionOne}
        placeholder="Ajouter une option de réponse"
      />
      <input
        name="optionTwo"
        id="optionTwo"
        onChange={handleInputChange}
        value={optionTwo}
        placeholder="Ajouter une option de réponse"
      />
      <input
        name="answer"
        id="answer"
        onChange={handleInputChange}
        value={answer}
        placeholder="Ajouter la réponse "
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

export default TutorialCreater;
