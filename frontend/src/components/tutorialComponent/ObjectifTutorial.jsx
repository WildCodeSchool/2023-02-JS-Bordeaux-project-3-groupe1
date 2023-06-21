import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CreateTutorialContext } from "../../contexts/CreateTutorialContext";
import pouce from "../../assets/pouce.png";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import validation from "../../assets/validation.png";

function ObjectifTutorial() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const { setForms } = useContext(CreateTutorialContext);
  const [objectifTutorial, setObjectifTutorial] = useState("");
  const [explicationTutorial, setExplicationTutorial] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  setNameMenu("Ajouter un tutoriel");

  const handleObjectifChange = (e) => {
    setObjectifTutorial(e.target.value);
  };

  const handleExplicationChange = (e) => {
    setExplicationTutorial(e.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
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

  const handleSaveObjectif = () => {
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
      console.warn("Tous les champs doivent être remplis");
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
          <textarea
            name="objectifTutorial"
            id="objectifTutorial"
            onChange={handleObjectifChange}
            value={objectifTutorial}
            placeholder="Ajoutez votre objectif ici"
          />
        </div>
      </div>
      <div className="container-explications">
        <div className="line" />
        <input
          name="explicationTutorial"
          id="explicationTutorial"
          onChange={handleExplicationChange}
          value={explicationTutorial}
          placeholder="Insérer les explications"
        />
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
          </div>
          <p>{explicationTutorial}</p>
        </div>
      </div>
      <Link to="/tutorials/createVideo">
        <button
          type="button"
          onClick={handleSaveObjectif}
          disabled={!objectifTutorial || !explicationTutorial || !selectedFile}
        >
          Suivant
        </button>
      </Link>
    </div>
  );
}

export default ObjectifTutorial;
