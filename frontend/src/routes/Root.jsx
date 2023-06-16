import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

function Root() {
  return (
    <div>
      <Navbar />
      <Footer />
      <Outlet />
    </div>
  );
}

export default Root;
