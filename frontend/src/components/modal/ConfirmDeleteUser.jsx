import PropTypes from "prop-types";

function ConfirmDeleteUser({ isOpen, onClose, onConfirm }) {
  const handleConfirmDelete = () => {
    onConfirm();
    onClose();
  };
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content-delete">
        <p>Êtes-vous sûr de vouloir supprimer votre profil?</p>
        <div className="modal-actions-delete">
          <button type="button" onClick={onClose}>
            Annuler
          </button>
          <button type="button" onClick={handleConfirmDelete}>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

ConfirmDeleteUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmDeleteUser;
