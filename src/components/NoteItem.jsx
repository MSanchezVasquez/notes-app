import React from "react";
import "./NoteItem.css";

// Optimizado con React.memo
export const NoteItem = React.memo(function NoteItem({
  note,
  onEdit,
  onRequestDelete,
}) {
  return (
    <div className="note-item" style={{ backgroundColor: note.color }}>
      <div className="note-content">
        {note.title && <h3>{note.title}</h3>}
        <p>{note.content}</p>
      </div>
      <div className="note-footer">
        <button
          onClick={() => onEdit(note)}
          className="icon-btn"
          aria-label="Editar nota"
        >
          <EditIcon />
        </button>
        <button
          onClick={() => onRequestDelete(note)}
          className="icon-btn delete"
          aria-label="Eliminar nota"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
});

const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6h18" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M10 11v6" /> <path d="M14 11v6" />
  </svg>
);
