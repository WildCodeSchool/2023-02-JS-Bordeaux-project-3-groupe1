import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { CreateTutorialContext } from "../../contexts/CreateTutorialContext";
import pouce from "../../assets/pouce.png";
import validation from "../../assets/validation.png";

function ObjectifTutorial(props) {
  const { setForms } = useContext(CreateTutorialContext);
  const [objectifTutorial, setObjectifTutorial] = useState("");
  const [explicationTutorial, setExplicationTutorial] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

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
      setIsUpdate(true);
    } else {
      setObjectifTutorial(objectifTutorial);
      setExplicationTutorial(explicationTutorial);
      setPreviewUrl(previewUrl);
      setIsUpdate(false);
    }
  }, [tutorialObjectif, tutorialExplication, tutorialImage, tutorialId]);

  const handleSaveObjectif = () => {
    setCountStepTutorial(3);
    const newValuesTutorial = {
      objectifTutorial,
      explicationTutorial,
      selectedFile,
    };

    if (objectifTutorial && explicationTutorial && selectedFile) {
      setForms((prevForms) => ({
        ...prevForms,
        ...newValuesTutorial,
      }));
    } else {
      console.warn("All fields must be filled.");
    }
  };

  return (
    <div className="container-createObjectifTutorial">
      <div className="container-objectif">
        <div className="container-objectif-title">
          <img src={pouce} alt="" />
          <div className="container-title-tuto">
            <h3>Objectif</h3>
          </div>
        </div>
        <div className="container-objectifText">
          <label htmlFor="objectifTutorial">Ajoutez votre objectif ici :</label>
          <textarea
            name="objectifTutorial"
            id="objectifTutorial"
            onChange={handleObjectifChange}
            value={objectifTutorial}
            maxLength={140}
            placeholder="Ajoutez votre objectif ici"
          />
        </div>
      </div>
      <div className="container-explications">
        <div className="line" />
        <div className="container-explications-upload">
          <p>Insérer votre image</p>
          <label htmlFor="fileInput" className="custom-file-input">
            Insérer
          </label>
          <input
            type="file"
            name="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
        <div className="container-explications-preview">
          <div className="container-explications-preview-title">
            <div className="space" />
            <h3>Explications</h3>
            <img src={validation} alt="validation" />
          </div>
          <div className="container-explications-preview-img">
            {previewUrl && <img src={previewUrl} alt="Preview" />}
            <label htmlFor="explicationTutorial">
              Insérer les explications :
            </label>
            <textarea
              name="explicationTutorial"
              id="explicationTutorial"
              onChange={() => {
                handleExplicationChange();
                adjustTextareaHeight();
              }}
              value={explicationTutorial}
              placeholder="Insérer les explications"
            />
          </div>
        </div>
      </div>
      {isUpdate ? (
        <Link to={`/tutorials/updateTutorial/${tutorialId}`}>
          <button type="button" onClick={handleSaveObjectif}>
            Valider
          </button>
        </Link>
      ) : (
        <Link to="/tutorials/createTutorial">
          <button type="button" onClick={handleSaveObjectif}>
            Valider
          </button>
        </Link>
      )}
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
