import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ListTutorials from "../listTutorial/ListTutorials";

function SearchTutorial({ tutorials }) {
  const [search, setSearch] = useState("");
  const [tagsList, setTagsList] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const nameTagsArray = tutorials.map((value) => value.nameTag);
    const newArrayNameTags = nameTagsArray
      .toString()
      .split(",")
      .map((value) => value.trim());
    setTagsList(newArrayNameTags);
  }, [tutorials]);

  console.warn(tagsList);
  return (
    <div className="container-searchTutorial">
      <label htmlFor="search">Rechercher un tutoriel</label>
      <div className="container-searchTutorial-input">
        <input
          type="text"
          name="search"
          id="search"
          onChange={handleInputChange}
          value={search}
          placeholder="Recherche par tags ..."
        />
      </div>
      <ListTutorials />
    </div>
  );
}

SearchTutorial.propTypes = {
  tutorials: PropTypes.arrayOf(
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

export default SearchTutorial;
