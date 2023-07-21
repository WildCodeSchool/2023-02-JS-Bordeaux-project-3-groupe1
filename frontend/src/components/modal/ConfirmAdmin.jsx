import PropTypes from "prop-types";

function ConfirmAdmin({ isOpen, onClose, onConfirm }) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content-delete">
        <p>Êtes-vous sûr de vouloir attribuer le rôle ?</p>
        <div className="modal-actions-delete">
          <button type="button" onClick={onClose}>
            Annuler
          </button>
          <button type="button" onClick={handleConfirm}>
            Valider
          </button>
        </div>
      </div>
    </div>
  );
}

ConfirmAdmin.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmAdmin;
