//  /* eslint-disable react/prop-types */
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
import axios from "axios";
import { setData, deleteNote, editNote } from "../reducers/actions";

export const NotesList = () => {
  const [isEditing, setIsEditing] = useState({ index: null, value: "" });
  const [checkedNotes, setCheckedNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     console.log("Fetched data:", response.data);
  //     dispatch(setData(response.data));

  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setIsLoading(false);
  //   }
    
  // };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log("Fetched data:", response.data);
      dispatch(setData(response.data));
  
      await new Promise((resolve) => {
        setTimeout(() => {
          setIsLoading(false);
          resolve();
        }, 2000);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    fetchData();
    
  }, []);

  // const handleDelete = async (index) => {
  //   setIsLoading(true);
  //   try {
  //     dispatch(deleteNote(index));
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //   } catch (error) {
  //     console.error("Error deleting note:", error);
  //     setIsLoading(false);
  //   }
  // };

  const handleDelete = (index) => {
    setIsLoading(true);
  
    return new Promise((resolve, reject) => {
      try {
        dispatch(deleteNote(index));
  
        setTimeout(() => {
          setIsLoading(false);
          resolve();
        }, 2000);
      } catch (error) {
        console.error("Error deleting note:", error);
        setIsLoading(false);
        reject(error);
      }
    });
  };
  

  // const handleEdit = async (index) => {
  //   setIsLoading(true);
  //   if (isEditing.index === index) {
  //     if (isEditing.value.trim()) {
  //       dispatch(editNote(index, isEditing.value));
  //     }
  //     setIsEditing({ index: null, value: "" });
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //   } else {
  //     setIsEditing({ index, value: notes[index]?.title || "" });
  //     setIsLoading(false);
  //   }
  // };

  const handleEdit = async (index) => {
    setIsLoading(true);
  
    try {
      if (isEditing.index === index) {
        if (isEditing.value.trim()) {
          await new Promise((resolve) => {
            dispatch(editNote(index, isEditing.value));
            setTimeout(() => {
              setIsLoading(false);
              resolve();
            }, 2000);
          });
        }
        setIsEditing({ index: null, value: "" });
      } else {
        setIsEditing({ index, value: notes[index]?.title || "" });
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error editing note:", error);
      setIsLoading(false);
      
    }
  };
  

  const handleCheckboxChange = (index) => {
    setCheckedNotes((prev) => {
      const newCheckedNotes = [...prev];
      newCheckedNotes[index] = !newCheckedNotes[index];
      return newCheckedNotes;
    });
  };


  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"><i className="fa-solid fa-spinner fa-spin-pulse"></i></div> 
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <div>
     
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
                    type="title"
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
              <div className="flex flex-row m-2">
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
    </div>
  );
};

export default NotesList;
