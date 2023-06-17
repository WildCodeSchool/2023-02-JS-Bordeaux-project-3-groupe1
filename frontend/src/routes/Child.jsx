import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import MenuTop from "../components/menuTop/MenuTop";
import Footer from "../components/footer/Footer";
import CreateTutorialContext from "../contexts/CreateTutorialContext";

function Child() {
  const [newNameTutorial, setNewNameTutorial] = useState({});
  return (
    <div>
      <CreateTutorialContext.Provider
        value={useMemo(
          () => ({ newNameTutorial, setNewNameTutorial }),
          [newNameTutorial, setNewNameTutorial]
        )}
      >
        <MenuTop />
        <Outlet />
        <Footer />
      </CreateTutorialContext.Provider>
    </div>
  );
}

export default Child;
