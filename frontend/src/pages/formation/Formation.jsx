import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { IsDesktopContext } from "../../contexts/IsDesktopContext";
import ModuleChooseFormation from "../../components/moduleChooseFormation/ModuleChooseFormation";
import manComputer from "../../assets/manComputer.svg";

function Formation() {
  const { isDesktop } = useContext(IsDesktopContext);
  const [icons, setIcons] = useState([]);

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
          {icons.map((item, index) => (
            <ModuleChooseFormation item={item} index={index} />
          ))}
          <img
            className="pictureManComputer"
            src={manComputer}
            alt="picturemancomputer"
          />
        </>
      ) : (
        <>
          {icons.map((item, index) => (
            <ModuleChooseFormation item={item} index={index} />
          ))}
        </>
      )}
    </div>
  );
}
export default Formation;
