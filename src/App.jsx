// // import { useDispatch, useSelector } from "react-redux";
// // import { NewNoteInput } from "./components/NewNote";
// // import { addNote } from "./reducers/actions";
// // import { NotesList } from "./components/NotesList";
// import { Fetch } from "./components/fetch";

// function App() {
//   // const notes = useSelector((state) => state.notes.notes);
//   // const dispatch = useDispatch();

//   // const onAddNote = (note) => {
//   //   if (note) {
//   //     dispatch(addNote(note));
//   //   }
//   // };

//   return (
//     <div className="max-w-lg mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
//     {/* //   <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
//     //     My Notes ({notes.length} tasks)
//     //   </h1>
//     //   <NewNoteInput onAddNote={onAddNote} />
//     //   <hr className="my-4" />
//     //   <NotesList notes={notes} /> */}
//     <Fetch/>

//     </div>
//   );
// }

// export default App;

// import { getPosts } from "./components/fetch";
// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     getPosts().then((posts) => setData(posts));
//   }, []);

//   return (
//     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
//       {data ? (
//         data.map((e) => (
//           <li key={e.id}>
//             {e.title}
//             {<img src={e.url}  className="w-full h-auto" />}
//             {/* <p className="text-sm">{e.body}</p> */}
//           </li>
//         ))
//       ) : (
//         <p>No data</p>
//       )}
//     </div>
//   );
// }
// export default App;

import { useEffect, useState } from "react";
import { getPosts, createPost, editPost, deletePost } from "./components/fetch";

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [lastId, setLastId] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => {
      setData(posts);
      const maxId = posts.reduce(
        (max, post) => (post.id > max ? post.id : max),
        posts[0]?.id
      );
      setLastId(maxId);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: lastId + 1, title, body };

    if (isEditing) {
      const updatedPost = { title, body };
      editPost(editId, updatedPost)
        .then((updatedPost) => {
          setData((prevData) =>
            prevData.map((item) => (item.id === editId ? updatedPost : item))
          );
          setTitle("");
          setBody("");
          setEditId(null);
        })
        .catch((error) => {
          console.error("Error updating post:", error);
        });
    } else {
      createPost(newPost)
        .then(() => {
          setData((prevData) => [...prevData, newPost]);
          setLastId(lastId + 1);
          setTitle("");
          setBody("");
        })
        .catch((error) => {
          console.error("Error creating post:", error);
        });
    }
  };

  const handleEdit = (id) => {
    const postToEdit = data.find((post) => post.id === id);
    setTitle(postToEdit.title);
    setBody(postToEdit.body);
    setIsEditing(true);
    setEditId(id);
  };

  const handleDelete = (id) => {
    deletePost(id)
      .then(() => {
        setData((prevData) => {
          const updatedData = prevData.filter((post) => post.id !== id);

          return updatedData;
        });
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Post Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="border p-2 mb-2 w-full text-justify"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
          {isEditing ? "Save Changes" : "Add Post"}
        </button>
      </form>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.length > 0 ? (
          data.map((post) => (
            <div key={post.id} className="border p-4">
              <h2 className="font-bold  text-justify">{post.title.slice(0,15)}</h2>
              <p className=" text-justify">{post.body.slice(0,150)}</p>
              <p className="text-sm text-gray-500">ID: {post.id}</p>

              <button
                onClick={() => handleEdit(post.id)}
                className="bg-yellow-500 text-white p-2 mt-2 rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-yellow-500 text-white p-2 mt-2 ml-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
}

export default App;
