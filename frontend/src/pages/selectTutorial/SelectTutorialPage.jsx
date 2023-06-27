import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetcher } from "../../services/api";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";
import SelectTutorial from "../../components/selectTutorial/SelectTutorial";

function SelectTutorialPage() {
  const [dataTutorial, setDataTutorial] = useState([]);
  const { formationId } = useParams();
  const { setNameMenu } = useContext(NameMenuTopContext);

  useEffect(() => {
    setNameMenu("Les tutoriels");
  }, [setNameMenu]);

  useEffect(() => {
    fetcher(`tutorials/formation/${formationId}`)
      .then((data) => {
        setDataTutorial(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [formationId]);

  return <SelectTutorial dataTutorial={dataTutorial} />;
}

export default SelectTutorialPage;
