// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteNote, editNote } from "../reducers/actions";

// export const NotesList = () => {
//   const [isEditing, setIsEditing] = useState({ index: null, value: "" });
//   const [checkedNotes, setCheckedNotes] = useState([]);
//   const notes = useSelector((state) => state.notes.notes);
//   const dispatch = useDispatch();

//   const handleDelete = (index) => {
//     dispatch(deleteNote(index));
//     setCheckedNotes(checkedNotes.filter((_, i) => i !== index));
//   };

//   const handleEdit = (index) => {
//     if (isEditing.index === index) {
//       if (isEditing.value.trim()) {
//         dispatch(editNote(index, isEditing.value));
//       }
//       setIsEditing({ index: null, value: "" });
//     } else {
//       setIsEditing({ index, value: notes[index]?.text || "" });
//     }
//   };

//   const handleCheckboxChange = (index) => {
//     setCheckedNotes((prev) => {
//       const newCheckedNotes = [...prev];
//       newCheckedNotes[index] = !newCheckedNotes[index];
//       return newCheckedNotes;
//     });
//   };

//   return (
//     <ul className="mt-4">
//       {Array.isArray(notes) &&
//         notes.map((note, index) => (
//           <li
//             key={index}
//             className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow mb-2"
//           >
//             <div className="flex justify-between items-center">
//               <input
//                 type="checkbox"
//                 checked={!!checkedNotes[index]}
//                 onChange={() => handleCheckboxChange(index)}
//                 className="mr-2"
//               />
//               {isEditing.index === index ? (
//                 <input
//                   type="text"
//                   value={isEditing.value}
//                   onChange={(e) =>
//                     setIsEditing({ ...isEditing, value: e.target.value })
//                   }
//                   className="border border-gray-300 rounded-md p-2 flex-grow mr-2"
//                 />
//               ) : (
//                 <span
//                   className={`text-gray-700 ${
//                     checkedNotes[index] ? "text-gray-400 line-through" : ""
//                   }`}
//                 >
//                   {note.text}
//                 </span>
//               )}
//             </div>
//             <div>
//               <span className="mr-4">{(note.timestamp)}</span>
//               <button
//                 onClick={() => handleEdit(index)}
//                 className={`bg-${isEditing.index === index ? "green-500" : "blue-500"} text-white p-2 rounded-md hover:bg-blue-600 transition duration-200`}
//               >
//                 {isEditing.index === index ? (
//                   <i className="fas fa-save"></i>
//                 ) : (
//                   <i className="fas fa-edit"></i>
//                 )}
//               </button>
//               <button
//                 onClick={() => handleDelete(index)}
//                 className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-200 ml-2"
//               >
//                 <i className="fa fa-trash" aria-hidden="true"></i>
//               </button>
//             </div>
//           </li>
//         ))}
//     </ul>
//   );
// };

// export default NotesList;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes, deleteNote, editNote } from "../reducers/actions";
import {
  fetchNotesFromAPI,
  editNoteInAPI,
  deleteNoteFromAPI,
} from "../reducers/api";

export const NotesList = () => {
  const [isEditing, setIsEditing] = useState({ index: null, value: "" });
  const [checkedNotes, setCheckedNotes] = useState([]);
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const notesData = await fetchNotesFromAPI();
        dispatch(fetchNotes(notesData));
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleDelete = async (index) => {
    try {
      const noteToDelete = notes[index];
      await deleteNoteFromAPI(noteToDelete.id);
      dispatch(deleteNote(index));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleEdit = async (index) => {
    if (isEditing.index === index) {
      if (isEditing.value.trim()) {
        try {
          const updatedNote = await editNoteInAPI(
            notes[index].id,
            isEditing.value
          );
          dispatch(editNote(index, updatedNote.text));
        } catch (error) {
          console.error("Error editing note:", error);
        }
      }
      setIsEditing({ index: null, value: "" });
    } else {
      setIsEditing({ index, value: notes[index]?.text || "" });
    }
  };

  const handleCheckboxChange = (index) => {
    setCheckedNotes((prev) => {
      const newCheckedNotes = [...prev];
      newCheckedNotes[index] = !newCheckedNotes[index];
      return newCheckedNotes;
    });
  };
  console.log(notes);
  return (
    <ul className="mt-4">
      {notes &&
        notes.map((note, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow mb-2"
          >
            <div className="flex justify-between items-center">
              <input
                type="checkbox"
                checked={!!checkedNotes[index]}
                onChange={() => handleCheckboxChange(index)}
                className="mr-2"
              />
              {isEditing.index === index ? (
                <input
                  type="text"
                  value={isEditing.value}
                  onChange={(e) =>
                    setIsEditing({ ...isEditing, value: e.target.value })
                  }
                  className="border border-gray-300 rounded-md p-2 flex-grow mr-2"
                />
              ) : (
                <span
                  className={`text-gray-700 ${
                    checkedNotes[index] ? "text-gray-400 line-through" : ""
                  }`}
                >
                  {note.title}
                </span>
              )}
            </div>
            <div>
              {/* <span className="mr-4">{note.timestamp}</span> */}
              <button
                onClick={() => handleEdit(index)}
                className={`bg-${
                  isEditing.index === index ? "green-500" : "blue-500"
                } text-white p-2 rounded-md hover:bg-blue-600 transition duration-200`}
              >
                {isEditing.index === index ? (
                  <i className="fas fa-save"></i>
                ) : (
                  <i className="fas fa-edit"></i>
                )}
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-200 ml-2"
              >
                <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        ))}
    </ul>
  );
};

export default NotesList;
