import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import pouce from "../../assets/pouce.png";
import validation from "../../assets/validation.png";

function TutorialExplication() {
  const [explication, setExplication] = useState("");
  const [objectif, setObjectif] = useState("");

  useEffect(() => {
    axios
      .get("/votre/api/explication")
      .then((response) => setExplication(response.data.explication))
      .catch((error) => console.error(error));

    axios
      .get("/votre/api/objectif")
      .then((response) => setObjectif(response.data.objectif))
      .catch((error) => console.error(error));
  }, []);

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
          <p>{objectif}</p>
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
          <p className="explication-text">{explication}</p>
        </div>
        <div className="container-Video-preview">
          <div className="container-video-preview-title">
            <div className="Space" />
            <p>Video</p>
            <img className="validation" src={validation} alt="validation" />
          </div>
          <p className="explication-text">{explication}</p>
        </div>
        <div className="container-Quizz-preview">
          <div className="container-quizz-preview-title">
            <div className="Space" />
            <p>Quizz</p>
            <img className="validation" src={validation} alt="validation" />
          </div>
          <p className="explication-text">{explication}</p>
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
