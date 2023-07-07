import React, { useState, useEffect, useContext } from "react";
import { fetcher } from "../../services/api";
import { IsDesktopContext } from "../../contexts/IsDesktopContext";
import ModuleChooseFormation from "../../components/moduleChooseFormation/ModuleChooseFormation";
import manComputer from "../../assets/manComputer.svg";

function Formation() {
  const { isDesktop } = useContext(IsDesktopContext);

  const [iconURLAndDescription, setIconURLAndDescription] = useState([]);

  useEffect(() => {
    fetcher("formations")
      .then((data) => {
        setIconURLAndDescription(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="formation">
      {isDesktop ? (
        <>
          {iconURLAndDescription.length > 0 ? (
            iconURLAndDescription.map((item) => (
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
          {iconURLAndDescription.length > 0 ? (
            iconURLAndDescription.map((item) => (
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
