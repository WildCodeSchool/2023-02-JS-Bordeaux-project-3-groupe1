import React, { useState, useEffect } from "react";
import axios from "axios";
import ModuleChooseFormation from "../../components/moduleChooseFormation/ModuleChooseFormation";
import manComputer from "../../assets/manComputer.svg";

function Formation() {
  const [icons, setIcons] = useState([]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
