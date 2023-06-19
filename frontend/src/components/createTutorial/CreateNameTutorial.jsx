import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import starGrey from "../../assets/starGrey.png";
import starBlue from "../../assets/starBlue.png";
import student from "../../assets/student.png";
import { fetcher } from "../../services/tutorialService";
import { CreateTutorialContext } from "../../contexts/CreateTutorialContext";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";

function CreateNameTutorial() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const { setForms } = useContext(CreateTutorialContext);
  const [nameTutorial, setNameTutorial] = useState("");
  const [titlePreview, setTitlePreview] = useState("Nom du tutoriel");
  const [titleFormation, setTitleFormation] = useState("Utiliser ligne bleu");
  const [tagTutorial, setTagTutorial] = useState("");
  const [levelTutorial, setLevelTutorial] = useState(1);
  const [starLevelStyle, setStarLevelStyle] = useState(false);
  const [nameFormation, setNameFormation] = useState([]);
  const [valuesTag, setValuesTag] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [idFormation, setIdFormation] = useState(false);

  setNameMenu("Ajouter un tutoriel");

  const handleAddValue = () => {
    if (tagTutorial !== "") {
      setValuesTag([...valuesTag, tagTutorial]);
      setTagTutorial("");
    }
  };

  const handleClickLevel1 = () => {
    setLevelTutorial(1);
    setStarLevelStyle(false);
  };

  const handleClickLevel2 = () => {
    setLevelTutorial(starLevelStyle === true ? 1 : 2);
    setStarLevelStyle(!starLevelStyle);
  };

  const handleSelectChange = (e) => {
    setTitleFormation(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "nameTutorial":
        setNameTutorial(value);
        setTitlePreview(value);
        break;
      case "tagTutorial":
        setTagTutorial(value);
        break;
      case "titleFormation":
        setTitleFormation(value);
        break;
      default:
    }
  };

  const handleSaveName = () => {
    const parsedLevelTutorial = parseInt(levelTutorial, 10);
    const newValuesTutorial = {
      nameTutorial,
      idFormation,
      valuesTag,
      levelTutorial: parsedLevelTutorial,
    };

    setForms((prevForms) => ({
      ...prevForms,
      ...newValuesTutorial,
    }));
  };

  const handleRemoveValue = (value) => {
    setValuesTag((prevValues) => {
      const updatedValues = prevValues.filter((val) => val !== value);
      return updatedValues;
    });
  };

  useEffect(() => {
    fetcher("formations")
      .then((data) => {
        setNameFormation(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const isValidForm =
      nameTutorial.trim() !== "" &&
      titleFormation.trim() !== "" &&
      valuesTag.length > 0 &&
      levelTutorial !== "";
    setIsValid(isValidForm);
  }, [nameTutorial, titleFormation, valuesTag, levelTutorial]);

  useEffect(() => {
    const matchedFormation = nameFormation.find(
      (formation) => formation.iconDescription === titleFormation
    );
    if (matchedFormation && matchedFormation.id) {
      const parsedId = parseInt(matchedFormation.id, 10); // Utilisez parseInt() pour convertir l'ID en nombre entier
      setIdFormation(parsedId);
    }
  }, [nameFormation, titleFormation]);

  return (
    <div className="container-createNameTutorial">
      <input
        type="text"
        name="nameTutorial"
        id="nameTutorial"
        onChange={handleInputChange}
        value={nameTutorial}
        placeholder="Insérer le nom du tutoriel"
        required
      />
      <div className="container-input-tag">
        <input
          type="text"
          name="tagTutorial"
          id="tagTutorial"
          onChange={handleInputChange}
          value={tagTutorial}
          placeholder="Insérer les tags"
          required
        />
        <button type="button" onClick={handleAddValue}>
          Ajouter
        </button>
      </div>
      <ul>
        {valuesTag.map((value) => (
          <button
            type="button"
            key={value}
            onClick={() => handleRemoveValue(value)}
          >
            {value}
          </button>
        ))}
      </ul>
      <div className="choose-lvl-tutorial">
        <p>Choisir le niveau</p>
        <div className="choose-lvl-tutorial-button">
          <button type="button" onClick={handleClickLevel1}>
            <img src={starBlue} alt="starBlue" />
          </button>
          {starLevelStyle ? (
            <button type="button" onClick={handleClickLevel2}>
              <img src={starBlue} alt="starBlue" />
            </button>
          ) : (
            <button type="button" onClick={handleClickLevel2}>
              <img src={starGrey} alt="starGrey" />
            </button>
          )}
        </div>
      </div>
      <select value={titleFormation} onChange={handleSelectChange}>
        {nameFormation.map((option) => (
          <option key={option.id} value={option.value}>
            {option.iconDescription}
          </option>
        ))}
      </select>
      <div className="container-preview-tutorial">
        <div className="icon-preview-tutorial">
          <div className="icon-preview-tutorial-star">
            <img src={starGrey} alt="starGrey" />
            <img src={starGrey} alt="starGrey" />
          </div>
          <img src={student} alt="student" />
        </div>
        <h3>{titlePreview}</h3>
      </div>
      <Link to="/tutorials/createObjectif">
        <button type="button" onClick={handleSaveName} disabled={!isValid}>
          Valider
        </button>
      </Link>
    </div>
  );
}

export default CreateNameTutorial;
