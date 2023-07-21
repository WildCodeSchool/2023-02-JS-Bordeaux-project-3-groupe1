import { useState } from "react";
import ListTutorials from "../listTutorial/ListTutorials";

function SearchTutorial() {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

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
          placeholder="Recherche par mot clé ..."
        />
      </div>
      <ListTutorials search={search} />
    </div>
  );
}

export default SearchTutorial;
