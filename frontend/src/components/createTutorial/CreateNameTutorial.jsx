import React, { useContext, useEffect, useState } from "react";
import starGrey from "../../assets/starGrey.png";
import starBlue from "../../assets/starBlue.png";
import student from "../../assets/student.png";
import { fetcher } from "../../services/tutorialService";
import CreateTutorialContext from "../../contexts/CreateTutorialContext";

function CreateNameTutorial() {
  const { setNewNameTutorial } = useContext(CreateTutorialContext);
  const [nameTutorial, setNameTutorial] = useState("");
  const [titlePreview, setTitlePreview] = useState("Nom du tutoriel");
  const [titleFormation, setTitleFormation] = useState("Utiliser ligne bleue");
  const [tagTutorial, setTagTutorial] = useState("");
  const [levelTutorial, setLevelTutorial] = useState(1);
  const [starLevelStyle, setStarLevelStyle] = useState(false);
  const [nameFormation, setNameFormation] = useState([]);
  const [valuesTag, setValuesTag] = useState([]);

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
    const newValuesTutorial = {
      nameTutorial,
      titleFormation,
      valuesTag,
      levelTutorial,
    };
    setNewNameTutorial(newValuesTutorial);
  };

  useEffect(() => {
    fetcher("formations")
      .then((data) => {
        setNameFormation(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [levelTutorial]);

  return (
    <div className="container-createNameTutorial">
      <input
        type="text"
        name="nameTutorial"
        id="nameTutorial"
        onChange={handleInputChange}
        value={nameTutorial}
        placeholder="Insérer le nom du tutoriel"
      />
      <input
        type="text"
        name="tagTutorial"
        id="tagTutorial"
        onChange={handleInputChange}
        value={tagTutorial}
        placeholder="Insérer le tag du tutoriel"
      />
      <button type="button" onClick={handleAddValue}>
        Add
      </button>
      <ul>
        {valuesTag.map((value) => (
          <li key={value.id}>{value}</li>
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
      <button type="button" onClick={handleSaveName}>
        Suivant
      </button>
    </div>
  );
}

export default CreateNameTutorial;
