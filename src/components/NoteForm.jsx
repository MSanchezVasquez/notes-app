import "./NoteForm.css";
import { useState, useRef, useEffect } from "react";
import { useNotesStore } from "../store/notesStore";
import { PlusIcon } from "./Icons";

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
      <label htmlFor="title" className="sr-only">
        Título de la nota
      </label>
      <input
        id="title" // Vinculamos con el label
        type="text"
        placeholder="Título (opcional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="note-form-input"
      />
      <label htmlFor="content" className="sr-only">
        Contenido de la nota
      </label>
      <textarea
        id="content"
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
            <PlusIcon size={20} />{" "}
            {noteToEdit ? "Guardar Cambios" : "Agregar Nota"}
          </button>
        </div>
      </div>
    </form>
  );
}
