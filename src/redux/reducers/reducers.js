export const jwtReducer = (jwt = false, action) => {
  switch (action.type) {
    case "JWT": {
      return action.payload.jwt;
    }
    default: {
      return jwt;
    }
  }
};

export const tasksReducers = (tasks = [], action) => {
  switch (action.type) {
    case "INSERT_TASKS": {
      // console.log(action.payload.tasks);
      return [...action.payload.tasks];
    }
    case "ADD_TASK": {
      const newTask = action.payload.task;
      console.log(newTask);
      return [...tasks, newTask];
    }
    case "DELETE_TASK": {
      const task_id = action.payload.id;
      const taskCopy = [...tasks];
      const index = taskCopy.findIndex((task) => task.id === task_id);
      console.log(index);
      taskCopy.splice(index, 1);
      return taskCopy;
    }
    case "EDIT_TASK": {
      const task_id = action.payload.id;
      let taskCopy = [...tasks];
      taskCopy = taskCopy.map((task) => {
        if (task.id === task_id) {
          if (task.isEditing === true) task.isEditing = false;
          else task.isEditing = true;
        } else {
          task.isEditing = false;
        }
        return task;
      });
      return taskCopy;
    }
    case "SAVE_EDITED_TASK": {
      const updated_task = action.payload.task;
      let taskCopy = [...tasks];
      taskCopy = taskCopy.map((task) => {
        if (task.id === updated_task.id) {
          return updated_task;
        } else {
          return task;
        }
      });
      return taskCopy;
    }
    default: {
      return tasks;
    }
  }
};

export const userProfileReducer = (user = {}, action) => {
  switch (action.type) {
    case "SET_USER_PROFILE": {
      console.log("hello user ", action.payload.user);
      const newuser = action.payload.user;
      return newuser;
    }
    default: {
      return user;
    }
  }
};

// export const reFetchReducer = (refetch = false, action) => {
//   switch (action.type) {
//     case "REFETCH_TASK": {
//       return true;
//     }
//     default: {
//       return refetch;
//     }
//   }
// };
