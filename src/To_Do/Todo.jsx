import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./reducer/action";
import { Table } from "./Table";

export const Todo = () => {
  const [task, setTask] = useState("");
  const [isTaskAdded, setIsTaskAdded] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const dispatch = useDispatch();

  const updateTask = (e) => {
    setTask(e.target.value);
  };


  const onAddTaskClick = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setIsTaskAdded(true);
      setTask(""); 
    }
  };


  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  
  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

 
  useEffect(() => {
    if (isTaskAdded) {
      const timer = setTimeout(() => {
        setIsTaskAdded(false); 
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [isTaskAdded]);

  return (
    <div className="h-[590px]  w-full p-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-xl">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">
        Task Management
      </h1>

   
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
        <input
          onChange={updateTask}
          value={task}
          type="text"
          name="task"
          placeholder="Type your task..."
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className="w-full sm:w-3/4 p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out placeholder-gray-500 text-gray-800"
        />
        <button
          onClick={onAddTaskClick}
          className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Task
        </button>
      </div>

     
      <div
        className={`grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-5 gap-4 mt-6 transition-all duration-300 ease-in-out ${
          isInputFocused || isTaskAdded ? "filter blur-sm" : ""
        }`}
      >
        <Table value={"Pending"} />
        <Table value={"ToDo"} />
        <Table value={"In-Progress"} />
        <Table value={"Done"} />
        <Table value={"Cancel"} />
      </div>
    </div>
  );
};

export default Todo;
