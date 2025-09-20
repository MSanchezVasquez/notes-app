import "./NoteForm.css";
import { useState, useRef, useEffect } from "react";
import { useNotesStore } from "../store/notesStore";

export function NoteForm({ noteToEdit, setNoteToEdit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#FFF4A3");
  const addNote = useNotesStore((state) => state.addNote);
  const updateNote = useNotesStore((state) => state.updateNote);
  const formRef = useRef(null);

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
      setColor(noteToEdit.color);
      formRef.current?.scrollIntoView({ behavior: "smooth" });
      formRef.current?.querySelector("input")?.focus();
    } else {
      setTitle("");
      setContent("");
      setColor("#FFF4A3");
    }
  }, [noteToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    const noteData = { title, content, color };

    if (noteToEdit) {
      updateNote(noteToEdit.id, noteData);
    } else {
      addNote(noteData);
    }
    setNoteToEdit(null);
  };

  const handleCancel = () => {
    setNoteToEdit(null);
  };

  const colorPalette = [
    "#FFF4A3",
    "#D6F2A3",
    "#A3EAF2",
    "#A3B4F2",
    "#E1A3F2",
    "#F2A3C4",
  ];

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="note-form">
      <h2>{noteToEdit ? "Editar Nota" : "Crear Nueva Nota"}</h2>
      <input
        type="text"
        placeholder="Título (opcional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="note-form-input"
      />
      <textarea
        placeholder="Escribe tu nota aquí..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="4"
        className="note-form-textarea"
        required
      />
      <div className="note-form-actions">
        <div className="color-palette">
          <span>Color:</span>
          {colorPalette.map((c) => (
            <button
              type="button"
              key={c}
              onClick={() => setColor(c)}
              className={`color-button ${color === c ? "selected" : ""}`}
              style={{ backgroundColor: c }}
              aria-label={`Color ${c}`}
            />
          ))}
        </div>
        <div className="form-buttons">
          {noteToEdit && (
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-secondary"
            >
              Cancelar
            </button>
          )}
          <button type="submit" className="btn btn-primary">
            <PlusIcon /> {noteToEdit ? "Guardar Cambios" : "Agregar Nota"}
          </button>
        </div>
      </div>
    </form>
  );
}

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
