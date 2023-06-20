import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
