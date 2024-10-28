import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../reducers/actions';

const NotesList = () => {
    const notes = useSelector((state) => state.notes.notes);
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch(deleteNote(index));
    };

    return (
        <ul>
            {Array.isArray(notes) && notes.map((note, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                    <span>{note}</span>
                    <button 
                        onClick={() => handleDelete(index)} 
                        className="ml-2 bg-red-500 text-white p-1 rounded-md hover:bg-red-600 transition duration-200"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default NotesList;
