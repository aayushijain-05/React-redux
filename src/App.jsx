import { useDispatch, useSelector } from "react-redux";
import { NewNoteInput } from "./components/NewNote";
import { addNote } from "./reducers/actions";
import { NotesList } from "./components/NotesList";

function App() {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  const onAddNote = (note) => {
    if (note) {
      dispatch(addNote(note));
    }
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        My Notes ({notes.length} tasks)
      </h1>
      <NewNoteInput onAddNote={onAddNote} />
      <hr className="my-4" />
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
