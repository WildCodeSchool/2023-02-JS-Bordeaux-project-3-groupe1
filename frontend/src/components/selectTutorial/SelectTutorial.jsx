import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { fetcher } from "../../services/api";
import { deleteTutorial } from "../../services/tutorialService";
import student from "../../assets/student.png";
import starGrey from "../../assets/starGrey.png";
import ConfirmChoiceDelete from "../modal/ConfirmChoiceDelete";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import formation3 from "../../assets/pictures/formation3.png";

function SelectTutorial(props) {
  const { formationId } = useParams();
  const { dataTutorial } = props;
  const [tutorialList, setTutorialList] = useState(dataTutorial);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTutorialId, setSelectedTutorialId] = useState(null);
  const modalRef = useRef(null);
  const { setNameMenu } = useContext(NameMenuTopContext);
  const [formations, setFormations] = useState([]);
  const [nameFormation, setNameFormation] = useState("");

  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  useEffect(() => {
    setNameMenu(nameFormation);
  }, [nameFormation]);

  useEffect(() => {
    fetcher("formations")
      .then((data) => {
        setFormations(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const selectedFormation = formations?.find(
      (formation) => formation.id === parseInt(formationId, 10)
    );
    if (selectedFormation) {
      const { name } = selectedFormation;
      setNameFormation(name);
    }
  }, [formations, formationId]);

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
      {isDesktop && <img src={formation3} alt="formation-icon" />}
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
              {item.nameTutorial}
            </div>
            <div className="container-selectTutorial-buttons">
              <Link to={`/tutorials/updateTutorial/${item.id}`}>
                <button type="button">Modifier</button>
              </Link>
              <button
                className="button-delete-tutorial"
                type="button"
                onClick={() => handleOpenModal(item.id)}
              >
                Supprimer
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
      formation_id: PropTypes.number.isRequired,
    })
  ),
};

SelectTutorial.defaultProps = {
  dataTutorial: [],
};

export default SelectTutorial;
