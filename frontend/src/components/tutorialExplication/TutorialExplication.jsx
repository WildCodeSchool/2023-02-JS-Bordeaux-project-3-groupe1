import React, { useContext, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetcher } from "../../services/api";
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
            >
              Suivant
            </ButtonTutorial>
          </>
        )}
        {location.pathname === `/formations/tutorials/video/${id}` && (
          <>
            <ContainerVideoTutorial validation={validation} />
            <ButtonTutorial
              path={`/formations/tutorials/explication/${id}`}
              nextOrPreview="precedent"
            >
              Précédent
            </ButtonTutorial>
            <ButtonTutorial
              path={`/formations/tutorials/quizz/${id}`}
              nextOrPreview="suivant"
            >
              Suivant
            </ButtonTutorial>
          </>
        )}
        {location.pathname === `/formations/tutorials/quizz/${id}` && (
          <>
            <ContainerQuizzTutorial validation={validation} />
            <ButtonTutorial
              path={`/formations/tutorials/video/${id}`}
              nextOrPreview="precedent"
            >
              Précédent
            </ButtonTutorial>
          </>
        )}
      </div>
    </div>
  );
}

export default TutorialExplication;
