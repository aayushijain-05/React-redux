export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  return await response.json();
};

export const createPost = async (newPost) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      throw new Error("Failed to create post");
    }
  
    const post = await response.json(); 
    return post; 
  };
  
export const editPost = async (id, updatedPost) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update the post");
  }

  return await response.json();
  
};

export const deletePost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "DELETE",
    }
  );

  if (response.ok) {
    alert("Success");
  } else {
    alert("Failed to delete the post");
  }
};
