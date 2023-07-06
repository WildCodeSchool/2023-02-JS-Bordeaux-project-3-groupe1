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
  const location = useLocation();

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
        // Faire quelque chose après la mise à jour réussie
      })
      .catch((error) => {
        console.error(error);
        // Gérer l'erreur de la requête
      });
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
            <ContainerQuizzTutorial validation={validation} />
            <div className="containerButtonVideo">
              <ButtonTutorial
                path={`/formations/tutorials/video/${id}`}
                nextOrPreview="precedent"
              >
                Précédent
              </ButtonTutorial>
              <ButtonTutorial
                path={`/formations/tutorials/${id}`}
                nextOrPreview="validateTutorial"
                handleTrueStep={() => handleTrueStep("stepThree", 1)}
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
