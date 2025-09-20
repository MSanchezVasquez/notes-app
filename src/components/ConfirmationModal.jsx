// --- Componente ConfirmationModal ---
function ConfirmationModal({ onConfirm, onCancel }) {
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>¿Estás seguro?</h3>
        <p>Esta acción no se puede deshacer.</p>
        <div className="modal-actions">
          <button onClick={onCancel} className="btn btn-secondary">
            Cancelar
          </button>
          <button onClick={onConfirm} className="btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
