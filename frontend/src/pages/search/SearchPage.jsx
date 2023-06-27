import React, { useContext, useEffect } from "react";
import SearchTurotial from "../../components/search/SearchTurotial";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";

function SearchPage() {
  const { setNameMenu } = useContext(NameMenuTopContext);

  useEffect(() => {
    setNameMenu("Recherche d'un tutorial");
  }, [setNameMenu]);

  return (
    <div>
      <SearchTurotial />
    </div>
  );
}

export default SearchPage;
