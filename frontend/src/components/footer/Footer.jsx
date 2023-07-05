import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      <Link to="/LegalNotice" className="legalNotice">
        Mentions légales
      </Link>
      <Link to="/PersonalData" className="PersonalData">
        Données personnelles
      </Link>
    </footer>
  );
}

export default Footer;
