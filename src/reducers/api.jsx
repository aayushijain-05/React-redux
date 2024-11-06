import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchNotesFromAPI = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log('Failed to fetch notes from the API',error);
  }
};

export const addNoteToAPI = async (noteText, timestamp) => {
  try {
    const response = await axios.post(API_URL, {
      text: noteText,
      timestamp: timestamp,
    });
    return response.data;
  } catch (error) {
    console.log('Failed to add note to the API',error);
  }
};

export const editNoteInAPI = async (noteId, newNoteText) => {
  try {
    const response = await axios.put(`${API_URL}/${noteId}`, {
      text: newNoteText,
    });
    return response.data;
  } catch (error) {
    console.log('Failed to edit note in the API',error);
  }
};

export const deleteNoteFromAPI = async (noteId) => {
  try {
    await axios.delete(`${API_URL}/${noteId}`);
  } catch (error) {
    console.log('Failed to delete note from the API',error);
  }
};
