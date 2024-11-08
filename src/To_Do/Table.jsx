/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  moveToCancel,
  moveToInProgress,
  moveToPending,
  moveToTodo,
  moveToDone,
  deleteTask,
  updateTask,
} from "./reducer/action";

export const Table = ({ value }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleDelete = (taskId) => {
    dispatch(moveToCancel(taskId));
  };

  const handleMoveToInProgress = (taskId) => {
    dispatch(moveToInProgress(taskId));
  };

  const handleMoveToPending = (taskId) => {
    dispatch(moveToPending(taskId));
  };

  const handleMoveToTodo = (taskId) => {
    dispatch(moveToTodo(taskId));
  };

  const handleMoveToDone = (taskId) => {
    dispatch(moveToDone(taskId));
  };

  const handlePermanentDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEditClick = (taskId, text) => {
    setEditingTaskId(taskId);
    setEditedText(text);
  };

  const handleSaveEdit = (taskId) => {
    dispatch(updateTask(taskId, editedText));
    setEditingTaskId(null);
    setEditedText("");
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setEditedText("");
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      <div className="p-0.3 border border-gray-200 bg-slate-200 rounded-lg mb-1">
        <h3 className="text-md font-semibold text-center text-gray-800 ">
          {value}
        </h3>
      </div>
      <div className="task-content space-y-2">
        {tasks
          .filter((task) => task.status === value.toLowerCase())
          .map((task) => (
            <div
              key={task.id}
              className={`bg-gray-100 shadow-sm rounded-lg p-4 flex flex-col gap-4 transition-all duration-200 ease-in-out ${
                task.status === "cancel" ? "bg-gray-100" : "bg-gray-50"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  {editingTaskId === task.id ? (
                    <input
                      type="text"
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                      className="w-full text-sm text-gray-800 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Edit your task"
                    />
                  ) : (
                    <span
                      className={`text-sm font-medium ${
                        task.status === "cancel"
                          ? "line-through text-gray-500"
                          : "text-gray-700"
                      }`}
                    >
                      {task.text}
                    </span>
                  )}
                </div>

                <div className="flex gap-1">
                  {task.status === "pending" && editingTaskId !== task.id && (
                    <>
                      <button
                        onClick={() => handleMoveToTodo(task.id)}
                        className="text-green-600 hover:text-green-800 p-2 rounded-full transition duration-150"
                        title="Move to Todo"
                      >
                        <i className="fas fa-arrow-right"></i>
                      </button>
                      <button
                        onClick={() => handleEditClick(task.id, task.text)}
                        className="text-blue-600 hover:text-blue-800 p-2 rounded-full transition duration-150"
                        title="Edit Task"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(task.id)}
                        className="text-red-600 hover:text-red-800 p-2 rounded-full transition duration-150"
                        title="Delete Task"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </>
                  )}

                  {task.status === "todo" && editingTaskId !== task.id && (
                    <>
                      <button
                        onClick={() => handleMoveToPending(task.id)}
                        className="text-yellow-600 hover:text-yellow-800 p-2 rounded-full transition duration-150"
                        title="Move to Pending"
                      >
                        <i className="fas fa-arrow-left"></i>
                      </button>
                      <button
                        onClick={() => handleMoveToInProgress(task.id)}
                        className="text-blue-600 hover:text-blue-800 p-2 rounded-full transition duration-150"
                        title="Move to In Progress"
                      >
                        <i className="fas fa-arrow-right"></i>
                      </button>
                      <button
                        onClick={() => handleEditClick(task.id, task.text)}
                        className="text-blue-600 hover:text-blue-800 p-2 rounded-full transition duration-150"
                        title="Edit Task"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(task.id)}
                        className="text-red-600 hover:text-red-800 p-2 rounded-full transition duration-150"
                        title="Delete Task"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </>
                  )}

                  {task.status === "in-progress" &&
                    editingTaskId !== task.id && (
                      <>
                        <button
                          onClick={() => handleMoveToTodo(task.id)}
                          className="text-blue-600 hover:text-blue-800 p-2 rounded-full transition duration-150"
                          title="Move to Todo"
                        >
                          <i className="fas fa-arrow-left"></i>
                        </button>
                        <button
                          onClick={() => handleMoveToDone(task.id)}
                          className="text-green-600 hover:text-green-800 p-2 rounded-full transition duration-150"
                          title="Move to Done"
                        >
                          <i className="fas fa-check"></i>
                        </button>
                        <button
                          onClick={() => handleEditClick(task.id, task.text)}
                          className="text-blue-600 hover:text-blue-800 p-2 rounded-full transition duration-150"
                          title="Edit Task"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          onClick={() => handleDelete(task.id)}
                          className="text-red-600 hover:text-red-800 p-2 rounded-full transition duration-150"
                          title="Delete Task"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </>
                    )}

                  {task.status === "done" && editingTaskId !== task.id && (
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="text-red-600 hover:text-red-800 p-2 rounded-full transition duration-150"
                      title="Delete Task"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  )}

                  {task.status === "cancelled/deleted" && editingTaskId !== task.id && (
                    <button
                      onClick={() => handlePermanentDelete(task.id)}
                      className="text-red-600 hover:text-red-800 p-2 rounded-full transition duration-150"
                      title="Delete Permanently"
                    >
                      <i className="fas fa-times-circle"></i>
                    </button>
                  )}
                </div>

                {editingTaskId === task.id && (
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleSaveEdit(task.id)}
                      className="bg-green-500 text-white py-1 px-3 ml-2 rounded-md hover:bg-green-600 transition duration-200"
                    >
                      <i className="fas fa-save"></i>
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-red-400 text-white py-1 px-3 rounded-md hover:bg-red-500 transition duration-200"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Table;
