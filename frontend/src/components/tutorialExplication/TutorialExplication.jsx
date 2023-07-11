import React, { useContext, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetcher, api } from "../../services/api";
import validation from "../../assets/validation.png";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import ContainerObjectifTutorial from "../containerObjectifVideoQuizzInTutorials/ContainerObjectifTutorial";
import ContainerExplicationsTutorial from "../containerObjectifVideoQuizzInTutorials/ContainerExplicationsTutorial";
import ContainerVideoTutorial from "../containerObjectifVideoQuizzInTutorials/ContainerVideoTutorial";
import ContainerQuizzTutorial from "../containerObjectifVideoQuizzInTutorials/ContainerQuizzTutorial";
import ButtonTutorial from "../containerObjectifVideoQuizzInTutorials/ButtonTutorial";
import ContainerBravoTutorial from "../containerObjectifVideoQuizzInTutorials/ContainerBravoTutorial";
import { decodeTokenAndExtractRole } from "../../services/authService";

function TutorialExplication() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const { id } = useParams();
  const [dataTutorial, setDataTutorial] = useState([]);
  const [quizzValidate, setQuizzValidate] = useState(true);
  const [quizzSucceed, setQuizzSucceed] = useState(false);
  const [isWrongAnswerOne, setIsWrongAnswerOne] = useState(false);
  const [isWrongAnswerTwo, setIsWrongAnswerTwo] = useState(false);
  const [looser1, setLooser1] = useState("");
  const [looser2, setLooser2] = useState("");
  const [isWrongAnswerOneChangeClassname, setIsWrongAnswerOneChangeClassname] =
    useState("");
  const [isWrongAnswerTwoChangeClassname, setIsWrongAnswerTwoChangeClassname] =
    useState("");
  const [goNavigationGoodAnswer, setGoNavigationGoodAnswer] = useState("");
  const [key, setKey] = useState(0);
  const [order, setOrder] = useState([]);
  const location = useLocation();
  const { userId } = decodeTokenAndExtractRole();

  useEffect(() => {
    const numbers = [1, 2, 3].sort(() => Math.random() - 0.5);
    setOrder(numbers);
  }, []);
  const [orderOne, orderTwo, orderThree] = order;
  setNameMenu(dataTutorial.name);
  useEffect(() => {
    fetcher(`tutorials/${id}`)
      .then((data) => {
        setDataTutorial(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.info(dataTutorial);
  const handleTrueStep = (stepToUpdate, updatedValue) => {
    api
      .put(`/tutorialbyicon/${id}/${userId}`, { stepToUpdate, updatedValue })
      .then((response) => {
        console.info(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleTrueStepLast = (stepToUpdate, updatedValue) => {
    if (quizzSucceed) {
      handleTrueStep(stepToUpdate, updatedValue);
      setGoNavigationGoodAnswer(`/formations/tutorials/quizz/bravo/${id}`);
    } else {
      setKey((prevKey) => prevKey + 1);
      setQuizzValidate(true);
      setOrder(order);

      if (isWrongAnswerOne) {
        console.info("isWrongAnswerOne", isWrongAnswerOne);
        setIsWrongAnswerOneChangeClassname("quizzChange");
        setLooser1(<h1>Rater !!!!!</h1>);
      }
      if (isWrongAnswerTwo) {
        console.info("isWrongAnswerTwo", isWrongAnswerTwo);
        setIsWrongAnswerTwoChangeClassname("quizzChange");
        setLooser2(<h1>OMG tu es nul !!!!</h1>);
      }
      console.info("rater");
    }
  };
  console.info(order);
  const handleQuizz = (condition, setIsWrongAnswer) => {
    setQuizzValidate(false);
    setQuizzSucceed(condition);
    if (condition === true) {
      setIsWrongAnswer(false);
    } else {
      setIsWrongAnswer(true);
    }
  };
  useEffect(() => {
    if (quizzSucceed) {
      setGoNavigationGoodAnswer(`/formations/tutorials/quizz/bravo/${id}`);
    } else {
      setIsWrongAnswerOne(false);
      setIsWrongAnswerTwo(false);
    }
  }, [quizzSucceed]);

  return (
    <div className="container-ObjectifTutorial">
      <ContainerObjectifTutorial dataTutorial={dataTutorial} />
      <div className="container-Explications">
        <div className="line-yellow" />
        {location.pathname === `/formations/tutorials/explication/${id}` && (
          <>
            <ContainerExplicationsTutorial
              dataTutorial={dataTutorial}
              validation={validation}
            />
            <ButtonTutorial
              path={`/formations/tutorials/video/${id}`}
              nextOrPreview="suivant"
              handleTrueStep={() => handleTrueStep("stepOne", 1)}
            >
              Suivant
            </ButtonTutorial>
          </>
        )}
        {location.pathname === `/formations/tutorials/video/${id}` && (
          <>
            <ContainerVideoTutorial videoTutorials={dataTutorial.urlVideo} />
            <div className="containerButtonVideo">
              <ButtonTutorial
                path={`/formations/tutorials/explication/${id}`}
                nextOrPreview="precedent"
              >
                Précédent
              </ButtonTutorial>
              <ButtonTutorial
                path={`/formations/tutorials/quizz/${id}`}
                nextOrPreview="suivant"
                handleTrueStep={() => handleTrueStep("stepTwo", 1)}
              >
                Suivant
              </ButtonTutorial>
            </div>
          </>
        )}
        {location.pathname === `/formations/tutorials/quizz/${id}` && (
          <>
            <ContainerQuizzTutorial
              key={key}
              orderOne={orderOne}
              orderTwo={orderTwo}
              orderThree={orderThree}
              dataTutorial={dataTutorial}
              setQuizzValidate={setQuizzValidate}
              setQuizzSucceed={setQuizzSucceed}
              looser1={looser1}
              looser2={looser2}
              quizzValidate={quizzValidate}
              setIsWrongAnswerOne={setIsWrongAnswerOne}
              setIsWrongAnswerTwo={setIsWrongAnswerTwo}
              isWrongAnswerOneChangeClassname={isWrongAnswerOneChangeClassname}
              isWrongAnswerTwoChangeClassname={isWrongAnswerTwoChangeClassname}
              handleQuizz={handleQuizz}
            />
            <div className="containerButtonVideo">
              <ButtonTutorial
                path={`/formations/tutorials/video/${id}`}
                nextOrPreview="precedent"
              >
                Précédent
              </ButtonTutorial>
              <ButtonTutorial
                path={goNavigationGoodAnswer}
                nextOrPreview="validateTutorial"
                handleTrueStep={() => handleTrueStepLast("stepThree", 1)}
                disabled={quizzValidate}
              >
                Valider le tutoriel
              </ButtonTutorial>
            </div>
          </>
        )}
        {location.pathname === `/formations/tutorials/quizz/bravo/${id}` && (
          <>
            <ContainerBravoTutorial
              key={key}
              dataTutorial={dataTutorial.name}
            />
            <div className="containerButtonVideo">
              <ButtonTutorial
                path={`/formations/tutorials/${dataTutorial.formation_id}`}
                nextOrPreview="validateTutorial"
              >
                Valider
              </ButtonTutorial>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default TutorialExplication;
