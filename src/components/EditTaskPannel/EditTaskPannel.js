import React, { useState } from "react";
import "../AddTask/TaskPannel/style.css";
// import { addNewTask } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import crypto from "crypto";
import { saveEditTask } from "../../redux/actions/actions";
function TaskPannel(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [desc, setDesc] = useState("");

  const tasks = useSelector((state) => state.tasks);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addTask = () => {
    if (date === "" || time === "" || desc === "") {
      alert("save the edited task first");
      return;
    }
    const newTask = {};
    newTask.assigned_user = user.id;
    newTask.task_date = date;

    newTask.task_time = Math.floor(Date.now() / 1000);
    newTask.is_completed = 1;
    newTask.time_zone = Math.floor(Date.now() / 1000);
    newTask.task_msg = desc;

    console.log(newTask);
    dispatch(saveEditTask(props.id, newTask));
  };

  return (
    <div className="task_pannel">
      <span>Task Desciption</span>
      <input type="text" onChange={(e) => setDesc(e.target.value)} />
      <div className="task_pannel_date_time">
        <span>
          <p>Date</p>
          <input type="date" onChange={(e) => setDate(e.target.value)} />
        </span>
        <span>
          <p>Time</p>
          <input type="time" onChange={(e) => setTime(e.target.value)} />
        </span>
      </div>
      <span>Assign User</span>
      <select>
        <option value="">{user.first}</option>
      </select>
      <div className="task_pannel_btn">
        <button onClick={addTask} className="task_pannel_save_btn">
          Save
        </button>
      </div>
    </div>
  );
}

export default TaskPannel;
