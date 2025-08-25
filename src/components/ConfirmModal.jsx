// src/components/ConfirmModal.jsx
import React from "react";
import "./ConfirmModal.css";

function ConfirmModal({ open, title, message, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-card">
        <div className="modal-check">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 12.75l-2-2-1.5 1.5 3.5 3.5 7.5-7.5L15 6.75z" />
          </svg>
        </div>
        <h3 className="modal-title">{title || "¡Gracias!"}</h3>
        <p className="modal-message">
          {message || "Tu mensaje se ha enviado correctamente"}
        </p>
        <button className="modal-btn" onClick={onClose} autoFocus>
          OK
        </button>
      </div>
    </div>
  );
}

export default ConfirmModal;
