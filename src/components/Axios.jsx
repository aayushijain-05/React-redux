import axios from 'axios';


const API_URL = "https://jsonplaceholder.typicode.com/posts";


export const getPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};


export const createPost = async (newPost) => {
  try {
    const response = await axios.post(API_URL, newPost);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};


export const editPost = async (id, updatedPost) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedPost);
    return response.data;
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};


export const deletePost = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};
