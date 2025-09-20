import { useState } from "react";
import { NoteForm } from "./components/NoteForm";
import { NoteItem } from "./components/NoteItem";
import "./App.css";
import { useNotesStore } from "./store/notesStore";
import { useCallback } from "react";
import ConfirmationModal from "./components/ConfirmationModal";

function App() {
  const notes = useNotesStore((state) => state.notes);
  const deleteNote = useNotesStore((state) => state.deleteNote);
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [noteToDelete, setNoteToDelete] = useState(null);

  const handleEdit = useCallback((note) => {
    setNoteToEdit(note);
  }, []);

  const handleRequestDelete = useCallback((note) => {
    setNoteToDelete(note);
  }, []);

  const handleConfirmDelete = () => {
    if (noteToDelete) {
      if (noteToEdit && noteToEdit.id === noteToDelete.id) {
        setNoteToEdit(null);
      }
      deleteNote(noteToDelete.id);
      setNoteToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setNoteToDelete(null);
  };

  return (
    <div className="app-container">
      <div className="container">
        <header className="header">
          <h1>Aplicación de Notas</h1>
          <p>Con React, Zustand y Persistencia</p>
        </header>
        <main>
          <NoteForm noteToEdit={noteToEdit} setNoteToEdit={setNoteToEdit} />
          {notes.length > 0 ? (
            <div className="notes-grid">
              {notes.map((note) => (
                <NoteItem
                  key={note.id}
                  note={note}
                  onEdit={handleEdit}
                  onRequestDelete={handleRequestDelete}
                />
              ))}
            </div>
          ) : (
            <div className="no-notes">
              <NoNotesIcon />
              <h2>No hay notas todavía</h2>
              <p>¡Crea tu primera nota usando el formulario de arriba!</p>
            </div>
          )}
        </main>
      </div>
      {noteToDelete && (
        <ConfirmationModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
}

const NoNotesIcon = () => (
  <svg
    className="no-notes-icon"
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
    {" "}
    <path d="M13.73 21a2 2 0 0 1-3.46 0" /> <path d="M2 6h.01" />{" "}
    <path d="M2 12h.01" /> <path d="M2 18h.01" /> <path d="M7 21h10" />{" "}
    <path d="M7 3h10" /> <path d="M12 3v18" />{" "}
  </svg>
);

export default App;
