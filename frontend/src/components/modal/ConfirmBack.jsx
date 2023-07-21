import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ConfirmBack({ isOpen, onClose, onConfirm }) {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="container-modal-content">
        <div className="container-modal-content-preview">
          <div className="modal-content">
            <p>Êtes-vous sûr de vouloir retourner vers l'accueil ?</p>
            <div className="modal-actions">
              <button type="button" onClick={onClose}>
                Annuler
              </button>
              <Link to="/" onClick={onConfirm}>
                Valider
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ConfirmBack.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmBack;
