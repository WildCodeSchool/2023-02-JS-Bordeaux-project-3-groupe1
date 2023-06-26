import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { deleteTutorial } from "../../services/tutorialService";
import student from "../../assets/student.png";
import starGrey from "../../assets/starGrey.png";
import ConfirmChoiceDelete from "../modal/ConfirmChoiceDelete";

function SelectTutorial(props) {
  const { dataTutorial } = props;
  const [tutorialList, setTutorialList] = useState(dataTutorial);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTutorialId, setSelectedTutorialId] = useState(null);
  const modalRef = useRef(null);

  const handleOpenModal = (tutorialId) => {
    setSelectedTutorialId(tutorialId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedTutorialId(null);
    setIsModalOpen(false);
  };

  const handleDeleteTutorial = () => {
    if (selectedTutorialId) {
      deleteTutorial("tutorials", selectedTutorialId)
        .then((data) => {
          console.warn(data);
          const updatedList = tutorialList.filter(
            (tutorial) => tutorial.id !== selectedTutorialId
          );
          setTutorialList(updatedList);
          setIsModalOpen(false);
          toast.success("Le tutoriel a bien été supprimé");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    setTutorialList(dataTutorial);
  }, [dataTutorial]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="container-selectTutorial">
      <ul className="container-selectTutorial-preview">
        {tutorialList.map((item) => (
          <li key={item.id}>
            {item?.level === 1 ? (
              <div className="container-icon">
                <div className="icon-preview-tutorial">
                  <div className="icon-preview-tutorial-star">
                    <img src={starGrey} alt="starGrey" />
                  </div>
                  <img src={student} alt="student" />
                </div>
              </div>
            ) : (
              <div className="container-icon">
                <div className="icon-preview-tutorial">
                  <div className="icon-preview-tutorial-star">
                    <img src={starGrey} alt="starGrey" />
                    <img src={starGrey} alt="starGrey" />
                  </div>
                  <img src={student} alt="student" />
                </div>
              </div>
            )}
            <div className="container-selectTutorial-tutorialName">
              {item.name}
            </div>
            <div className="container-selectTutorial-buttons">
              <Link to={`/tutorials/updateTutorial/${item.id}`}>
                <button type="button">Update</button>
              </Link>
              <button type="button" onClick={() => handleOpenModal(item.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <div ref={modalRef}>
          <ConfirmChoiceDelete
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onConfirm={handleDeleteTutorial}
          />
        </div>
      )}
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
