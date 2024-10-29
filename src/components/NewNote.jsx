/* eslint-disable react/prop-types */
import { useState } from "react";

export const NewNoteInput = ({ onAddNote }) => {
  const [note, setNote] = useState("");
  

  const updateNote = (event) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    onAddNote(note);
    setNote("");
  };

  return (
    <div className="flex items-center">
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Type your note..."
        className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-grow"
      />

      <button
        onClick={onAddNoteClick}
        className="ml-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Add
      </button>
    </div>
  );
};
