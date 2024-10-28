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
        <div className="flex flex-col items-center m-4">
            <input 
                onChange={updateNote} 
                value={note} 
                type="text" 
                name="note" 
                placeholder="Enter your note here..." 
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full max-w-md"
            />
            <button 
                onClick={onAddNoteClick} 
                className="mt-2  bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
                Add Note
            </button>
        </div>
    );
};
