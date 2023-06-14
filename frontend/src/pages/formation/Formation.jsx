import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { IsDesktopContext } from "../../contexts/IsDesktopContext";
import ModuleChooseFormation from "../../components/moduleChooseFormation/ModuleChooseFormation";
import manComputer from "../../assets/manComputer.svg";

function Formation() {
  const { isDesktop } = useContext(IsDesktopContext);
  const [data, setData] = useState([]);
  const [icons, setIcons] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/tutorials`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.info(data);
  const getIconAndDescription = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/icons`
      );
      setIcons(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getIconAndDescription();
  }, []);
  return (
    <div className="formation">
      {isDesktop ? (
        <>
          {icons.map((item) => (
            <ModuleChooseFormation item={item} />
          ))}
          <img
            className="pictureManComputer"
            src={manComputer}
            alt="picturemancomputer"
          />
        </>
      ) : (
        <>
          {icons.map((item) => (
            <ModuleChooseFormation item={item} />
          ))}
        </>
      )}
    </div>
  );
}
export default Formation;
