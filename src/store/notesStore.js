import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useNotesStore = create(
  persist(
    (set) => ({
      notes: [],
      addNote: (note) =>
        set((state) => ({
          notes: [{ ...note, id: Date.now() }, ...state.notes],
        })),
      updateNote: (id, updatedContent) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, ...updatedContent } : note
          ),
        })),
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),
    }),
    {
      name: "notes-storage",
    }
  )
);
