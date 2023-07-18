import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { fetcherAllTutorialsByUserId } from "../../services/tutorialService";
import ModuleChooseTutorial from "../moduleChooseTutorial/ModuleChooseTutorial";
import hommebureau2 from "../../assets/pictures/hommebureau2.png";
import { decodeTokenAndExtractRole } from "../../services/authService";

function ListTutorials({ search }) {
  const [tutorials, setTutorials] = useState([]);
  const { userId } = decodeTokenAndExtractRole();

  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  useEffect(() => {
    fetcherAllTutorialsByUserId("tutorials/tutorials", userId)
      .then((data) => {
        setTutorials(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredTutorials = tutorials.filter((item) => {
    const tagsArray = item.tagsName.split(",").map((value) => value.trim());
    return tagsArray.some((tag) =>
      tag.toLowerCase().includes(search.toLowerCase())
    );
  });

  const stepsMap = filteredTutorials.map((item) => ({
    ...item,
    stepOne: item.stepOne,
    stepTwo: item.stepTwo,
    stepThree: item.stepThree,
    total: item.stepOne + item.stepTwo + item.stepThree,
  }));

  return (
    <div className="container-listTutorials">
      {isDesktop ? (
        <>
          <img
            className="hommebureau2"
            src={hommebureau2}
            alt="pictureManDesk"
          />
          <div className="moduleChooseTutorialDesktop">
            {filteredTutorials.length > 0 ? (
              filteredTutorials.map((item, index) => (
                <ModuleChooseTutorial
                  key={item.tutoId}
                  item={item}
                  steps={stepsMap}
                  index={index}
                />
              ))
            ) : (
              <p>Aucun tutoriel trouvé.</p>
            )}
          </div>
        </>
      ) : (
        <div>
          {filteredTutorials.length > 0 ? (
            filteredTutorials.map((item, index) => (
              <ModuleChooseTutorial
                key={item.tutoId}
                item={item}
                steps={stepsMap}
                index={index}
              />
            ))
          ) : (
            <p>Chargement de la page ...</p>
          )}
        </div>
      )}
    </div>
  );
}

ListTutorials.propTypes = {
  search: PropTypes.string.isRequired,
};

export default ListTutorials;
