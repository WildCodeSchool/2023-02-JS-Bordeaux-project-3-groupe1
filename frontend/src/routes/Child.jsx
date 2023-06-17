import { Outlet } from "react-router-dom";
import MenuTop from "../components/menuTop/MenuTop";
import Footer from "../components/footer/Footer";

function Child() {
  return (
    <div>
      <MenuTop />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Child;
