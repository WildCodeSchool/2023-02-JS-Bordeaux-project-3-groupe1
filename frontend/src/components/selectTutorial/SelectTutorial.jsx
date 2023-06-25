import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { deleteTutorial } from "../../services/tutorialService";
import student from "../../assets/student.png";
import starGrey from "../../assets/starGrey.png";

function SelectTutorial(props) {
  const { dataTutorial } = props;
  const [tutorialList, setTutorialList] = useState(dataTutorial);

  const handleDeleteTutorial = (tutorialId) => () => {
    console.warn("Delete tutorial with ID:", tutorialId);

    deleteTutorial("tutorials", tutorialId)
      .then((data) => {
        console.warn(data);
        const updatedList = tutorialList.filter(
          (tutorial) => tutorial.id !== tutorialId
        );
        setTutorialList(updatedList);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    setTutorialList(dataTutorial);
  }, [dataTutorial]);

  return (
    <div className="container-selectTutorial">
      <ul className="container-selectTutorial-preview">
        {tutorialList.map((item) => (
          <li key={item.id}>
            <div className="container-icon">
              <div className="icon-preview-tutorial">
                <div className="icon-preview-tutorial-star">
                  <img src={starGrey} alt="starGrey" />
                  <img src={starGrey} alt="starGrey" />
                </div>
                <img src={student} alt="student" />
              </div>
            </div>{" "}
            <div className="container-selectTutorial-tutorialName">
              {item.name}
            </div>
            <div className="container-selectTutorial-buttons">
              <Link to={`/tutorials/updateTutorial/${item.id}`}>
                <button type="button">Update</button>
              </Link>
              <button type="button" onClick={handleDeleteTutorial(item.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

SelectTutorial.propTypes = {
  dataTutorial: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

SelectTutorial.defaultProps = {
  dataTutorial: [],
};

export default SelectTutorial;
