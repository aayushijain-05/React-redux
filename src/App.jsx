// // // import { Counter } from "./components/Counter";
// // // import { useContext } from "react";
// // // import {ConterContext} from "./context/Counter";

// // import { useDispatch, useSelector } from "react-redux";
// // import { NewNoteInput } from "./components/NewNote";
// // import { addNote } from "./reducers/actions";

// // // import { Counter } from "./features/counter/Counter.jsx";

// // // import { Item } from "./components/Item";
// // // import { Cart } from "./components/Cart";

// // function App() {

// //   const notes = useSelector((state) => state.notes);

// //   const dispatch = useDispatch();

// //   const onAddNote = (note) => {

// //     dispatch(addNote(note));
// //   };

// //   // const counterState=useContext(ConterContext);
// //   return <>
// //   {/* <h1>Count is {counterState.count}</h1>
// //   <Counter/>
// //   <Counter/>
// //   <Counter/>
// //   <Counter/> */}
// //   {/* <Item name="MacBook Pro" price={100000}/>
// //   <Item name="Pendrive" price={4000}/>
// //   <Item name="Mobile" price={35000}/>
// //   <Cart/> */}

// // {/* <Counter/> */}
// // <NewNoteInput addNote={onAddNote} />
// //       <hr />
// //       <ul>
// //         {notes.map((note) => (
// //           <li key={note}>{note}</li>
// //         ))}
// //       </ul>
// //   </>;
// // }

// // export default App;

// import { useDispatch, useSelector } from "react-redux";
// import { NewNoteInput } from "./components/NewNote";
// import { addNote } from "./reducers/actions";
// function App() {
//   const notes = useSelector((state) => state.notes);

//   const dispatch = useDispatch();

//   const onAddNote = (note) => {
//     if (note) {
//       // console.log(note)
//       dispatch(addNote(note));
//     }
//   };

//   return (
//     <>
//       <NewNoteInput onAddNote={onAddNote} />
//       <hr />
//       <ul>
//         {Array.isArray(notes) && notes.map((note) => (
//           <li key={note}>{note}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

import { useDispatch, useSelector } from "react-redux";
import { NewNoteInput } from "./components/NewNote";
import { addNote } from "./reducers/actions";
import NotesList from "./components/NotesList";

function App() {
  
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  const onAddNote = (note) => {
    if (note) {
      dispatch(addNote(note));
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Notes</h1>
      <NewNoteInput onAddNote={onAddNote} />
      <hr className="my-4" />
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
