import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CreateTutorialContext } from "../../contexts/CreateTutorialContext";
import validation from "../../assets/validation.png";
import { sender } from "../../services/tutorialService";
import InputField from "./components/InputField";

function QuizzTutorial(props) {
  const { forms, setForms } = useContext(CreateTutorialContext);
  const [question, setQuestion] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [answer, setAnswer] = useState("");
  const [quizzId, setQuizzId] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [stepOne] = useState(false);
  const [stepTwo] = useState(false);
  const [stepThree] = useState(false);

  const { setCountStepTutorial, tutorialId, tutorial } = props;

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

  useEffect(() => {
    if (tutorial && tutorial.length !== 0 && tutorialId) {
      setQuestion(tutorial.question);
      setOptionOne(tutorial.firstProposal);
      setOptionTwo(tutorial.secondProposal);
      setAnswer(tutorial.response);
      setQuizzId(tutorial.quizz_id);
    }
  }, [tutorial, tutorialId]);

  const handleSaveTutorial = () => {
    const newValuesTutorial = {
      question,
      optionOne,
      optionTwo,
      answer,
      quizzId,
      tutorialId,
      stepOne,
      stepTwo,
      stepThree,
    };

    if (question && optionOne && optionTwo && answer) {
      setForms((prevForms) => ({
        ...prevForms,
        ...newValuesTutorial,
      }));

      if (tutorialId) {
        toast.success("Le tutoriel a été mis à jour");
      } else {
        toast.success("Le tutoriel a été créé");
      }

      sender("tutorials", tutorialId, {
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
      question !== "" && optionOne !== "" && optionTwo !== "" && answer !== "";
    setIsValid(isValidForm);
  }, [question, optionOne, optionTwo, answer, forms]);

  return (
    <div className="container-createQuizzTutorial">
      <label htmlFor="question">Question :</label>
      <InputField
        name="question"
        id="question"
        value={question}
        placeholder="Ajouter une question"
        onChange={handleInputChange}
      />
      <label htmlFor="answer">La réponse :</label>
      <InputField
        name="answer"
        id="answer"
        value={answer}
        placeholder="Ajouter la réponse "
        onChange={handleInputChange}
      />
      <label htmlFor="optionOne">Première option :</label>
      <InputField
        name="optionOne"
        id="optionOne"
        value={optionOne}
        placeholder="Ajouter une option"
        onChange={handleInputChange}
      />
      <label htmlFor="optionTwo">Deuxième option :</label>
      <InputField
        name="optionTwo"
        id="optionTwo"
        value={optionTwo}
        placeholder="Ajouter une option"
        onChange={handleInputChange}
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
      <Link to={`/formations/${forms.idFormation}`}>
        <button type="button" onClick={handleSaveTutorial} disabled={!isValid}>
          Valider le tutorial
        </button>
      </Link>
    </div>
  );
}

QuizzTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
  tutorialId: PropTypes.number.isRequired,
  tutorial: PropTypes.string.isRequired,
};

export default QuizzTutorial;
