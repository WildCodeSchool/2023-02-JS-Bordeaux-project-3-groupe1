import React, { useState, useEffect, useContext } from "react";
import { fetcher } from "../../services/api";
import { IsDesktopContext } from "../../contexts/IsDesktopContext";
import CardFormation from "../../components/cardFormation/CardFormation";
import manComputer from "../../assets/manComputer.svg";
import NameMenuTopContext from "../../contexts/NameMenuTopContext";

function Formation() {
  const { isDesktop } = useContext(IsDesktopContext);
  const [dataFormation, setDataFormation] = useState([]);
  const { setNameMenu } = useContext(NameMenuTopContext);

  function renderFormation() {
    if (dataFormation.length > 0) {
      const formationsArray = [];
      dataFormation.forEach((item, i) => {
        formationsArray.push(
          // eslint-disable-next-line react/no-array-index-key
          <CardFormation item={item} key={`${item.id}_${i}`} />
        );
        if (isDesktop) {
          formationsArray.push(
            <img
              className="pictureManComputer"
              src={manComputer}
              alt="picturemancomputer"
            />
          );
        }
      });
      return formationsArray;
    }
    return "";
  }

  useEffect(() => {
    setNameMenu("Mes formations");
  }, []);

  useEffect(() => {
    fetcher("formations")
      .then((data) => {
        setDataFormation(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div className="formation">{renderFormation()}</div>;
}

export default Formation;
