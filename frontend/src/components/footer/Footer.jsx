import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      <Link to="/LegalNotice" className="legalNotice">
        Mentions légales
      </Link>
      <Link to="/AboutUs" className="aboutUs">
        A propos
      </Link>
    </footer>
  );
}

export default Footer;
