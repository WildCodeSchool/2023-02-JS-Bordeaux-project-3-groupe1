import React, { useContext, useEffect, useState } from "react";
import SearchTurotial from "../../components/search/SearchTurotial";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import { fetcher } from "../../services/api";

function SearchPage() {
  const { setNameMenu } = useContext(NameMenuTopContext);
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    setNameMenu("Recherche d'un tutorial");
  }, [setNameMenu]);

  useEffect(() => {
    fetcher("tutorials")
      .then((data) => {
        setTutorials(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <SearchTurotial tutorials={tutorials} />
    </div>
  );
}

export default SearchPage;
