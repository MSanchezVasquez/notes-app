import { useEffect, useRef } from "react";

export default function ConfirmationModal({ onConfirm, onCancel }) {
  const cancelBtnRef = useRef(null);
  useEffect(() => {
    // Mueve el foco al botón cancelar al montar el modal
    cancelBtnRef.current?.focus();

    // Cierra el modal con la tecla ESC
    const handleEsc = (e) => {
      if (e.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onCancel]);
  return (
    <div
      className="modal-overlay"
      onClick={onCancel}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>¿Estás seguro?</h3>
        <p>Esta acción no se puede deshacer.</p>
        <div className="modal-actions">
          <button
            ref={cancelBtnRef}
            onClick={onCancel}
            className="btn btn-secondary"
          >
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
