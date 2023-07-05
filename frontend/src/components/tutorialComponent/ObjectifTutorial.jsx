import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { CreateTutorialContext } from "../../contexts/CreateTutorialContext";
import SaveButton from "./components/SaveButton";
import ObjectiveSection from "./components/ObjectiveSection";
import ImageUploadSection from "./components/ImageUploadSection";
import TextSection from "./components/TextSection";

function ObjectifTutorial(props) {
  const { setForms } = useContext(CreateTutorialContext);
  const [objectifTutorial, setObjectifTutorial] = useState("");
  const [explicationTutorial, setExplicationTutorial] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileUrl, setSelectedFileUrl] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const {
    setCountStepTutorial,
    tutorialId,
    tutorialObjectif,
    tutorialExplication,
    tutorialImage,
  } = props;

  if (typeof setCountStepTutorial === "function") {
    setCountStepTutorial(2);
  }

  const handleObjectifChange = (e) => {
    const inputTextObjectif = e.target.value;
    if (inputTextObjectif.length <= 140) {
      setObjectifTutorial(inputTextObjectif);
    }
  };

  const handleExplicationChange = (e) => {
    setExplicationTutorial(e.target.value);
  };

  const adjustTextareaHeight = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  useEffect(() => {
    if (
      tutorialId &&
      tutorialObjectif?.length !== 0 &&
      tutorialExplication?.length !== 0 &&
      tutorialImage?.length !== 0
    ) {
      setObjectifTutorial(tutorialObjectif);
      setExplicationTutorial(tutorialExplication);
      setPreviewUrl(tutorialImage);
      setSelectedFileUrl(tutorialImage);
      setIsUpdate(true);
    }
  }, [tutorialObjectif, tutorialExplication, tutorialImage, tutorialId]);

  const handleSave = () => {
    setCountStepTutorial(3);
    const newValuesTutorial = {
      objectifTutorial,
      explicationTutorial,
      selectedFile,
      selectedFileUrl,
    };

    if (
      (objectifTutorial && explicationTutorial && selectedFile) ||
      selectedFileUrl
    ) {
      setForms((prevForms) => ({
        ...prevForms,
        ...newValuesTutorial,
      }));
    } else {
      console.warn("All fields must be filled.");
    }
  };

  useEffect(() => {
    const isValidForm =
      objectifTutorial !== "" && explicationTutorial !== "" && selectedFile;
    setIsValid(isValidForm);
  }, [objectifTutorial, explicationTutorial, selectedFile]);

  return (
    <div className="container-createObjectifTutorial">
      <ObjectiveSection
        isUpdate={isUpdate}
        handleObjectifChange={handleObjectifChange}
        objectifTutorial={objectifTutorial}
      />
      <div className="container-explications">
        <div className="line" />
        <ImageUploadSection handleFileChange={handleFileChange} />
        <TextSection
          previewUrl={previewUrl}
          handleExplicationChange={handleExplicationChange}
          adjustTextareaHeight={adjustTextareaHeight}
          explicationTutorial={explicationTutorial}
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

ObjectifTutorial.propTypes = {
  setCountStepTutorial: PropTypes.func.isRequired,
  tutorialId: PropTypes.number.isRequired,
  tutorialObjectif: PropTypes.string.isRequired,
  tutorialExplication: PropTypes.string.isRequired,
  tutorialImage: PropTypes.string.isRequired,
};

export default ObjectifTutorial;
