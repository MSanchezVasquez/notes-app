import React from "react";
import "./NoteItem.css";
import { EditIcon, TrashIcon } from "./Icons";

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
          <EditIcon size={20} />
        </button>
        <button
          onClick={() => onRequestDelete(note)}
          className="icon-btn delete"
          aria-label="Eliminar nota"
        >
          <TrashIcon size={20} />
        </button>
      </div>
    </div>
  );
});
