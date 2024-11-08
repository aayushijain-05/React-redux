const initialState = {
  tasks: [],
  nextId: 1,
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const newId = state.nextId;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: newId,
            text: action.payload.text,
            status: "pending",
          },
        ],
        nextId: newId + 1,
      };
    }

    case "MOVE_TO_CANCEL": {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, status: "cancelled/deleted" };
          }
          return task;
        }),
      };
    }

    case "MOVE_TO_IN_PROGRESS": {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, status: "in-progress" };
          }
          return task;
        }),
      };
    }

    case "MOVE_TO_PENDING": {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, status: "pending" };
          }
          return task;
        }),
      };
    }

    case "MOVE_TO_TODO": {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, status: "todo" };
          }
          return task;
        }),
      };
    }

    case "MOVE_TO_DONE": {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, status: "done" };
          }
          return task;
        }),
      };
    }
    case "UPDATE_TASK": {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, text: action.payload.newText }
            : task
        ),
      };
    }
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};
