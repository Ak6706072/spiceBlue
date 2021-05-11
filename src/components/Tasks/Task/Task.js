import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../../../redux/actions/actions";
import EditTaskPannel from "../../EditTaskPannel/EditTaskPannel";

import "./style.css";

function Task(props) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const editTaskFXN = () => {
    dispatch(editTask(props.id));
  };

  if (props.isEditing) {
    return <EditTaskPannel id={props.id} />;
  }

  if (!props.isEditing) {
    return (
      <div className="task">
        <div className="task_body">
          <div className="task_body_left">
            <img src={props.user_icon} alt="" />
          </div>
          <div className="task_body_right">
            <span>{props.task_msg}</span>
            <small>{props.task_date}</small>
          </div>
        </div>
        <div className="task_right">
          <button onClick={editTaskFXN}>
            <EditIcon />
          </button>
          <button>
            <AddAlertIcon />
          </button>
          <button
            onClick={() => {
              dispatch(deleteTask(props.id));
            }}
          >
            <DeleteForeverIcon />
          </button>
        </div>
      </div>
    );
  }
}

export default Task;
