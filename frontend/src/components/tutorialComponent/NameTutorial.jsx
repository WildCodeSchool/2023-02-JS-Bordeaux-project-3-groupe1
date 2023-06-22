import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import starGrey from "../../assets/starGrey.png";
import starBlue from "../../assets/starBlue.png";
import student from "../../assets/student.png";
import { fetcher } from "../../services/tutorialService";
import { CreateTutorialContext } from "../../contexts/CreateTutorialContext";

function NameTutorial(props) {
  const { setForms } = useContext(CreateTutorialContext);
  const [nameTutorial, setNameTutorial] = useState("");
  const [titleFormation, setTitleFormation] = useState("");
  const [tagTutorial, setTagTutorial] = useState("");
  const [levelTutorial, setLevelTutorial] = useState(1);
  const [starLevelStyle, setStarLevelStyle] = useState(false);
  const [nameFormation, setNameFormation] = useState([]);
  const [valuesTag, setValuesTag] = useState([]);
  const [idFormation, setIdFormation] = useState(1);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updatedTags, setUpdatedTags] = useState([]);
  const [updatedNameFormation, setUpdatedNameFormation] = useState(null);

  const {
    nameTutoPlaceholder,
    tagTutoPlaceholder,
    level,
    tutorialWithtags,
    updateNameFormation,
    setCountStepTutorial,
  } = props;

  if (typeof setCountStepTutorial === "function") {
    setCountStepTutorial(1);
  }

  useEffect(() => {
    if (tutorialWithtags) {
      setNameTutorial(tutorialWithtags.name);
    } else {
      setTitleFormation(titleFormation);
    }
  }, [nameTutoPlaceholder, tagTutoPlaceholder]);

  const handleAddValue = () => {
    if (tagTutorial !== "") {
      if (isUpdate) {
        setUpdatedTags([...updatedTags, tagTutorial]);
      } else {
        setValuesTag([...valuesTag, tagTutorial]);
      }
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
    setCountStepTutorial(2);
    const parsedLevelTutorial = parseInt(levelTutorial, 10);
    const newValuesTutorial = {
      nameTutorial,
      idFormation,
      valuesTag,
      updatedTags,
      levelTutorial: parsedLevelTutorial,
    };

    setForms((prevForms) => ({
      ...prevForms,
      ...newValuesTutorial,
    }));
  };

  const handleRemoveTagValue = (value) => {
    if (isUpdate) {
      setUpdatedTags((prevTags) => {
        const updateTags = prevTags.filter((tag) => tag !== value);
        return updateTags;
      });
    } else {
      setValuesTag((prevValues) => {
        const updatedValues = prevValues.filter((val) => val !== value);
        return updatedValues;
      });
    }
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
    const matchedFormation = nameFormation.find(
      (formation) => formation.iconDescription === titleFormation
    );
    if (matchedFormation) {
      setIdFormation(parseInt(matchedFormation.id, 10));
    }
  }, [nameFormation, titleFormation]);

  useEffect(() => {
    const matchedFormation = nameFormation.find(
      (formation) => formation.id === updateNameFormation
    );
    if (matchedFormation) {
      setUpdatedNameFormation(matchedFormation.iconDescription);
    }
  }, [updateNameFormation, nameFormation]);

  useEffect(() => {
    if (tutorialWithtags) {
      setIsUpdate(true);
      const nameTagsArray = tutorialWithtags.map((value) => value.nameTag);
      const newArrayNameTags = nameTagsArray
        .toString()
        .split(",")
        .map((value) => value.trim());
      setUpdatedTags(newArrayNameTags);
      if (level === 2) {
        setStarLevelStyle(true);
      }
    } else {
      setIsUpdate(false);
    }
  }, [tutorialWithtags, level]);

  return (
    <div className="container-createNameTutorial">
      <input
        type="text"
        name="nameTutorial"
        id="nameTutorial"
        onChange={handleInputChange}
        value={nameTutorial}
        placeholder={nameTutoPlaceholder}
        required
      />
      <div className="container-input-tag">
        <input
          type="text"
          name="tagTutorial"
          id="tagTutorial"
          onChange={handleInputChange}
          value={tagTutorial}
          placeholder={tagTutoPlaceholder}
          required
        />
        <button type="button" onClick={handleAddValue}>
          Ajouter
        </button>
      </div>
      <ul>
        {isUpdate
          ? updatedTags?.map((tagName) => (
              <button
                type="button"
                key={tagName}
                onClick={() => handleRemoveTagValue(tagName)}
              >
                {tagName}
              </button>
            ))
          : valuesTag.map((value) => (
              <button
                type="button"
                key={value}
                onClick={() => handleRemoveTagValue(value)}
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
        {updatedNameFormation && (
          <option
            key={updatedNameFormation.id}
            value={updatedNameFormation.value}
          >
            {updatedNameFormation}
          </option>
        )}
        {nameFormation
          .filter((option) => option.id !== updatedNameFormation?.id)
          .map((option) => (
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
        <h3>{nameTutorial}</h3>
      </div>
      <Link to="/tutorials/createTutorial">
        <button type="button" onClick={handleSaveName}>
          Valider
        </button>
      </Link>
    </div>
  );
}

NameTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
  nameTutoPlaceholder: PropTypes.string.isRequired,
  tagTutoPlaceholder: PropTypes.string.isRequired,
  updateNameFormation: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  tutorialWithtags: PropTypes.arrayOf(
    PropTypes.shape({
      fqfqf: PropTypes.string,
      formation_id: PropTypes.number,
      id: PropTypes.number,
      level: PropTypes.number,
      name: PropTypes.string,
      nameTag: PropTypes.string,
      objectif: PropTypes.string,
      pictureTuto: PropTypes.string,
      quizz_id: PropTypes.number,
      tag_id: PropTypes.number,
      tutorial_id: PropTypes.number,
      urlVideo: PropTypes.string,
    })
  ).isRequired,
};

export default NameTutorial;
