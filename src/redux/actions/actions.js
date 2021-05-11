export const isJWT = (value) => {
  return {
    type: "JWT",
    payload: {
      jwt: value,
    },
  };
};

export const insertAllTask = (jwt) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + jwt,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    let tasks = await res.json();
    console.log("task ", tasks, jwt);
    tasks = tasks.results.map((task) => {
      return { ...task, isEditing: false };
    });
    dispatch({ type: "INSERT_TASKS", payload: { tasks: tasks } });
  };
};

export const addNewTask = (jwt, task) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + jwt,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );
    const data = await res.json();
    // console.log("task post add", res, data, task);
    if (res.status == 200) {
      dispatch({ type: "ADD_TASK", payload: { task: data.results } });
    }
  };
};

export const setUserTostore = () => {
  return async (dispatch) => {
    const jwt = String(localStorage.getItem("jwt"));
    const res = await fetch(`https://stage.api.sloovi.com/user`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + jwt,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const user = await res.json();

    dispatch({
      type: "SET_USER_PROFILE",
      payload: {
        user: user.results,
      },
    });
  };
};

export const deleteTask = (task_id) => {
  return async (dispatch) => {
    const jwt = String(localStorage.getItem("jwt"));
    const res = await fetch(
      `https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598/` +
        task_id,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + jwt,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const user = await res.json();
    console.log(user);
    dispatch({
      type: "DELETE_TASK",
      payload: {
        id: task_id,
      },
    });
  };
};
export const editTask = (task_id) => {
  return {
    type: "EDIT_TASK",
    payload: {
      id: task_id,
    },
  };
};

export const saveEditTask = (task_id, newTask) => {
  return async (dispatch) => {
    const jwt = String(localStorage.getItem("jwt"));
    const res = await fetch(
      ` https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598/` +
        task_id,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + jwt,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      }
    );
    const task = await res.json();
    console.log(task);
    dispatch({
      type: "SAVE_EDITED_TASK",
      payload: {
        task: task.results,
      },
    });
  };
};
