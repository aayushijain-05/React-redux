

export const ADD_NOTE = "ADD_NOTE";
export const FETCH_NOTES = "FETCH_NOTES";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";


export const fetchNotes = (notes) => {
  return {
    type: FETCH_NOTES,
    payload: notes,
  };
};


export const addNote = (newNote) => {
  return {
    type: ADD_NOTE,
    payload: newNote,
  };
};


export const editNote = (index, newNoteText) => {
  return {
    type: EDIT_NOTE,
    payload: { index, newNoteText },
  };
};


export const deleteNote = (index) => {
  return {
    type: DELETE_NOTE,
    payload: index,
  };
};
