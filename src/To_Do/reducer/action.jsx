export const ADD_TASK = "ADD_TASK";
export const MOVE_TO_IN_PROGRESS = "MOVE_TO_IN_PROGRESS";
export const MOVE_TO_CANCEL = "MOVE_TO_CANCEL";
export const MOVE_TO_PENDING = "MOVE_TO_PENDING";
export const MOVE_TO_TODO = "MOVE_TO_TODO";
export const MOVE_TO_DONE = "MOVE_TO_DONE";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = 'UPDATE_TASK';

export const addTask = (newtask) => {
  return {
    type: ADD_TASK,
    payload: { text: newtask },
  };
};

export const moveToCancel = (taskId) => {
  return {
    type: MOVE_TO_CANCEL,
    payload: taskId,
  };
};

export const moveToInProgress = (taskId) => {
  return {
    type: MOVE_TO_IN_PROGRESS,
    payload: taskId,
  };
};

export const moveToPending = (taskId) => {
  return {
    type: MOVE_TO_PENDING,
    payload: taskId,
  };
};

export const moveToTodo = (taskId) => {
  return {
    type: MOVE_TO_TODO,
    payload: taskId,
  };
};

export const moveToDone = (taskId) => {
  return {
    type: MOVE_TO_DONE,
    payload: taskId,
  };
};




export const updateTask = (taskId, newText) => {
  return {
    type: UPDATE_TASK,
    payload: {
      taskId,
      newText,
    },
  };
};

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};
