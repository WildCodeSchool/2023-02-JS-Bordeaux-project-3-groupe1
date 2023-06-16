import { useEffect, useState } from "react";
import starGrey from "../../assets/starGrey.png";
import starBlue from "../../assets/starBlue.png";
import student from "../../assets/student.png";
import { getAllNameFormation } from "../../services/tutorialService";

function CreateNameTutorial() {
  const [nameTutorial, setNameTutorial] = useState("");
  const [titlePreview, setTitlePreview] = useState("Nom du tutoriel");
  const [tagTutorial, setTagTutorial] = useState("");
  const [levelTutorial, setLevelTutorial] = useState();
  const [starLevelStyle2, setStarLevelStyle2] = useState(false);
  const [nameFormation, setNameFormation] = useState([]);

  const handleTitleChange = (e) => {
    setNameTutorial(e.target.value);
    setTitlePreview(e.target.value);
  };

  const handleTagChange = (e) => {
    setTagTutorial(e.target.value);
  };

  const handleClickLevel1 = () => {
    setLevelTutorial(1);
    setStarLevelStyle2(false);
  };

  const handleClickLevel2 = () => {
    setLevelTutorial(starLevelStyle2 === true ? 1 : 2);
    setStarLevelStyle2(!starLevelStyle2);
  };

  useEffect(() => {
    getAllNameFormation()
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
        onChange={handleTitleChange}
        value={nameTutorial}
        placeholder="Insérer le nom du tutoriel"
      />
      <input
        type="text"
        name="tagTutorial"
        id="tagTutorial"
        onChange={handleTagChange}
        value={tagTutorial}
        placeholder="Insérer le tag du tutoriel"
      />
      <div className="choose-lvl-tutorial">
        <p>Choisir le niveau</p>
        <div className="choose-lvl-tutorial-button">
          <button type="button" onClick={handleClickLevel1}>
            <img src={starBlue} alt="starBlue" />
          </button>
          {starLevelStyle2 ? (
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
      <select value={nameFormation} onChange={handleTagChange}>
        {nameFormation.map((option) => (
          <>
            <option key={option.value} value={option.value}>
              {option.iconDescription}
            </option>
            <option value="">{option.iconDescription}</option>
          </>
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
    </div>
  );
}

export default CreateNameTutorial;
