import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetcher } from "../../services/api";
import pouce from "../../assets/pouce.png";
import validation from "../../assets/validation.png";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";

function TutorialExplication() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const { id } = useParams();
  const [dataTutorial, setDataTutorial] = useState([]);
  setNameMenu(dataTutorial.name);

  useEffect(() => {
    fetcher(`tutorials/${id}`)
      .then((data) => {
        setDataTutorial(data);
        console.info(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.info(dataTutorial);

  return (
    <div className="container-ObjectifTutorial">
      <div className="container-Objectif">
        <div className="container-Objectif-Title">
          <img className="pouce" src={pouce} alt="" />
          <div className="container-Title-Tuto">
            <h3 className="objectif">Objectif</h3>
          </div>
        </div>
        <div className="container-ObjectifText">
          <p>{dataTutorial.objectif}</p>
        </div>
      </div>
      <div className="container-Explications">
        <div className="line-yellow" />
        <div className="container-Explications-preview">
          <div className="container-Explications-preview-title">
            <div className="Space" />
            <p>Explications</p>
            <img className="validation" src={validation} alt="validation" />
          </div>
          <p className="explication-text">{dataTutorial.explication}</p>
        </div>
        <div className="container-Video-preview">
          <div className="container-video-preview-title">
            <div className="Space" />
            <p>Video</p>
            <img className="validation" src={validation} alt="validation" />
          </div>
          <p className="explication-text">{}</p>
        </div>
        <div className="container-Quizz-preview">
          <div className="container-quizz-preview-title">
            <div className="Space" />
            <p>Quizz</p>
            <img className="validation" src={validation} alt="validation" />
          </div>
          <p className="explication-text">{}</p>
        </div>
      </div>
      <div className="container-button">
        <Link to="/">
          <button className="suivant" type="button">
            Suivant
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TutorialExplication;
