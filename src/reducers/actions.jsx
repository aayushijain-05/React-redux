// In your actions file
export const addNote = (noteText) => {
  const date = new Date();
  const showTime =
    date.getHours() + ":" + String(date.getMinutes()).padStart(2, "0");

  return {
    type: "ADD_NOTE",
    payload: { text: noteText, timestamp: showTime },
  };
};

export const editNote = (index, newNote) => ({
  type: "EDIT_NOTE",
  payload: { index, newNote },
});

export const deleteNote = (index) => ({
  type: "DELETE_NOTE",
  payload: index,
});


//export DELETE_NODE as "DELETE_NODE"


