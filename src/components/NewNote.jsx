// /* eslint-disable react/prop-types */
// import { useState } from "react";

// export const NewNoteInput = ({ onAddNote }) => {
//   const [note, setNote] = useState("");

//   const updateNote = (event) => {
//     setNote(event.target.value);
//   };

//   const onAddNoteClick = () => {
//     onAddNote(note);
//     setNote("");
//   };

//   return (
//     <div className="flex items-center">
//       <input
//         onChange={updateNote}
//         value={note}
//         type="text"
//         name="note"
//         placeholder="Type your note..."
//         className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-grow"
//       />

//       <button
//         onClick={onAddNoteClick}
//         className="ml-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
//       >
//         Add
//       </button>
//     </div>
//   );
// };

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../reducers/actions";

export const NewNoteInput = () => {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();

  const updateNote = (event) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = async () => {
    if (!note.trim()) return;

    const date = new Date();
    const showTime =
      date.getHours() + ":" + String(date.getMinutes()).padStart(2, "0");

    try {
      const newNote = {
        id: Date.now(),
        title: note,
        timestamp: showTime,
      };

      dispatch(addNote(newNote));

      setNote("");
    } catch (error) {
      console.error("Error adding note:", error);
    }
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

export default NewNoteInput;
