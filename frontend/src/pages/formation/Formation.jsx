import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { fetcher } from "../../services/api";
import { IsDesktopContext } from "../../contexts/IsDesktopContext";
import ModuleChooseFormation from "../../components/moduleChooseFormation/ModuleChooseFormation";
import manComputer from "../../assets/manComputer.svg";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";

function Formation() {
  const { isDesktop } = useContext(IsDesktopContext);
  const [iconURLAndDescription, setIconURLAndDescription] = useState([]);
  const { setNameMenu } = useContext(NameMenuTopContext);
  const [searchParams] = useSearchParams();
  const level = searchParams.get("level");

  setNameMenu("Les formations");

  useEffect(() => {
    fetcher("formations")
      .then((data) => {
        setIconURLAndDescription(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filterFormations = iconURLAndDescription.filter(
    (formation) => formation.levelFormation === parseInt(level, 10)
  );

  return (
    <div className="formation">
      {isDesktop ? (
        <>
          {filterFormations.length > 0 ? (
            filterFormations.map((item) => (
              <ModuleChooseFormation item={item} key={item.id} />
            ))
          ) : (
            <p>En cours de chargement</p>
          )}
          <img
            className="pictureManComputer"
            src={manComputer}
            alt="picturemancomputer"
          />
        </>
      ) : (
        <div className="formation">
          {filterFormations.length > 0 ? (
            filterFormations.map((item) => (
              <ModuleChooseFormation item={item} key={item.id} />
            ))
          ) : (
            <p>En cours de chargement</p>
          )}
        </div>
      )}
    </div>
  );
}
export default Formation;
