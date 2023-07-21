import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetcher } from "../../services/api";
import { CreateTutorialContext } from "../../contexts/CreateTutorialContext";
import SaveButton from "./components/SaveButton";
import InputField from "./components/InputField";
import TagList from "./components/TagList";
import LevelSelector from "./components/LevelSelector";
import FormationSelector from "./components/FormationSelector";
import PreviewNameTutorial from "./components/PreviewNameTutorial";

function NameTutorial(props) {
  const { setForms } = useContext(CreateTutorialContext);
  const [nameTutorial, setNameTutorial] = useState("");
  const [tagTutorial, setTagTutorial] = useState("");
  const [levelTutorial, setLevelTutorial] = useState(1);
  const [starLevelStyle, setStarLevelStyle] = useState(false);
  const [nameFormation, setNameFormation] = useState([]);
  const [valuesTag, setValuesTag] = useState([]);
  const [idFormation, setIdFormation] = useState(1);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updatedTags, setUpdatedTags] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Utiliser ligne bleue");

  const {
    nameTutoPlaceholder,
    tagTutoPlaceholder,
    tutorialWithtags,
    setCountStepTutorial,
    tutorialId,
    tagId,
  } = props;

  if (typeof setCountStepTutorial === "function") {
    setCountStepTutorial(1);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "nameTutorial":
        setNameTutorial(value);
        break;
      case "tagTutorial":
        setTagTutorial(value);
        break;
      case "selectedValue":
        setSelectedValue(value);
        break;
      default:
    }
  };

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
  }, [nameFormation]);

  const newArrayNameFormation = nameFormation.map((item) => item.name);
  const uniqueValues = [...new Set(newArrayNameFormation)];

  const filteredValues = uniqueValues.filter(
    (value) => value !== selectedValue
  );

  useEffect(() => {
    if (tutorialWithtags) {
      const id = tutorialWithtags[0]?.formation_id;
      const formation = nameFormation.find((item) => item.id === id);
      setSelectedValue(formation ? formation.name : null);
    }
  }, [nameFormation]);

  useEffect(() => {
    const matchedFormation = nameFormation.find(
      (formation) => formation.name === selectedValue
    );
    if (matchedFormation) {
      setIdFormation(parseInt(matchedFormation.id, 10));
      setSelectedValue(selectedValue);
    }
  }, [nameFormation, selectedValue]);

  useEffect(() => {
    if (tutorialWithtags) {
      setIsUpdate(true);
      const nameTagsArray = tutorialWithtags.map((value) => value.nameTag);
      const newArrayNameTags = nameTagsArray
        .toString()
        .split(",")
        .map((value) => value.trim());
      setUpdatedTags(newArrayNameTags);
      if (tutorialWithtags[0]?.level === 2) {
        setStarLevelStyle(true);
      }
      setNameTutorial(tutorialWithtags[0]?.name);
    } else {
      setIsUpdate(false);
    }
  }, [tutorialWithtags]);

  const handleSave = () => {
    setCountStepTutorial(2);
    const parsedLevelTutorial = parseInt(levelTutorial, 10);
    const newValuesTutorial = {
      nameTutorial,
      idFormation,
      valuesTag,
      updatedTags,
      levelTutorial: parsedLevelTutorial,
      tagId,
    };

    setForms((prevForms) => ({
      ...prevForms,
      ...newValuesTutorial,
    }));
  };

  useEffect(() => {
    const isValidForm =
      nameTutorial !== "" &&
      (isUpdate ? updatedTags.length > 0 : valuesTag.length > 0);
    setIsValid(isValidForm);
  }, [nameTutorial, valuesTag, updatedTags, isUpdate]);

  return (
    <div className="container-createNameTutorial">
      <div className="container-createNameTutorial-preview">
        <label htmlFor="nameTutorial">Nom du tutorial :</label>
        <InputField
          name="nameTutorial"
          id="nameTutorial"
          value={nameTutorial}
          placeholder={nameTutoPlaceholder}
          onChange={handleInputChange}
        />
        <label htmlFor="tagTutorial">{tagTutoPlaceholder} :</label>
        <div className="container-input-tag">
          <InputField
            name="tagTutorial"
            id="tagTutorial"
            value={tagTutorial}
            placeholder={tagTutoPlaceholder}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleAddValue}>
            Ajouter
          </button>
        </div>
        <TagList
          isUpdate={isUpdate}
          updatedTags={updatedTags}
          handleRemoveTagValue={handleRemoveTagValue}
          valuesTag={valuesTag}
        />
        <LevelSelector
          setLevelTutorial={setLevelTutorial}
          setStarLevelStyle={setStarLevelStyle}
          starLevelStyle={starLevelStyle}
        />
        <FormationSelector
          filteredValues={filteredValues}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <PreviewNameTutorial
          levelTutorial={levelTutorial}
          nameTutorial={nameTutorial}
        />
        <SaveButton
          isUpdate={isUpdate}
          tutorialId={tutorialId}
          handleSave={handleSave}
          isValid={isValid}
        />
      </div>
    </div>
  );
}

NameTutorial.propTypes = {
  tutorialId: PropTypes.string.isRequired,
  nameTutoPlaceholder: PropTypes.string.isRequired,
  setCountStepTutorial: PropTypes.func.isRequired,
  tagTutoPlaceholder: PropTypes.string.isRequired,
  tagId: PropTypes.number.isRequired,
  tutorialWithtags: PropTypes.arrayOf(
    PropTypes.shape({
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
