import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetcher } from "../../services/api";
import SelectTutorial from "../../components/selectTutorial/SelectTutorial";

function SelectTutorialPage() {
  const [dataTutorial, setDataTutorial] = useState([]);
  const { formationId } = useParams();

  useEffect(() => {
    fetcher(`tutorials/formation/${formationId}`)
      .then((data) => {
        setDataTutorial(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [formationId, dataTutorial]);

  return <SelectTutorial dataTutorial={dataTutorial} />;
}

export default SelectTutorialPage;
