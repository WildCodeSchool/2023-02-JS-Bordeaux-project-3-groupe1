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

function TutorialExplication() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const { id } = useParams();
  const [dataTutorial, setDataTutorial] = useState([]);
  const [quizzValidate, setQuizzValidate] = useState(true);
  const [quizzSucceed, setQuizzSucceed] = useState(false);
  const [key, setKey] = useState(0);
  const [order, setOrder] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const numbers = [1, 2, 3].sort(() => Math.random() - 0.5);
    setOrder(numbers);
  }, [key]);
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

  const handleTrueStep = (stepToUpdate, updatedValue) => {
    api
      .put(`/tutorialbyicon/${id}`, { stepToUpdate, updatedValue })
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
    } else {
      setKey((prevKey) => prevKey + 1);
      console.info("rater");
    }
  };

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
            />
            <div className="containerButtonVideo">
              <ButtonTutorial
                path={`/formations/tutorials/video/${id}`}
                nextOrPreview="precedent"
              >
                Précédent
              </ButtonTutorial>
              <ButtonTutorial
                path={`/formations/tutorials/${dataTutorial.formation_id}`}
                nextOrPreview="validateTutorial"
                handleTrueStep={() => handleTrueStepLast("stepThree", 1)}
                disabled={quizzValidate}
              >
                Valider le tutoriel
              </ButtonTutorial>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default TutorialExplication;
