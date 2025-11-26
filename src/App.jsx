import { useState, lazy, useCallback, Suspense } from "react";
import { NoteForm } from "./components/NoteForm";
import { NoteItem } from "./components/NoteItem";
import "./App.css";
import { useNotesStore } from "./store/notesStore";
import { NoNotesIcon } from "./components/Icons";

const ConfirmationModal = lazy(() => import("./components/ConfirmationModal"));

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
              <NoNotesIcon className="no-notes-icon" size={64} />
              <h2>No hay notas todavía</h2>
              <p>¡Crea tu primera nota usando el formulario de arriba!</p>
            </div>
          )}
        </main>
      </div>
      {noteToDelete && (
        <Suspense fallback={null}>
          {" "}
          {/* null porque carga muy rápido, o un spinner pequeño */}
          <ConfirmationModal
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
