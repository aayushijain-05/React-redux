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
            return { ...state, notes: state.notes.filter((_, index) => index !== action.payload) };
        default:
            return state;
    }
};
