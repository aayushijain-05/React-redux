// reducers/notesReducer.js
const initialState = {
  notes: [],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((_, index) => index !== action.payload),
      };

    case "EDIT_NOTE": {
      const updatedNotes = [...state.notes];
      updatedNotes[action.payload.index] = {
        ...updatedNotes[action.payload.index],
        text: action.payload.newNote,
      };
      return { ...state, notes: updatedNotes };
    }

    default:
      return state;
  }
};
