import React, { useState } from "react";
import "./style.css";
import TaskPannel from "./TaskPannel/TaskPannel";
import { useSelector } from "react-redux";

function AddTask(props) {
  const tasks = useSelector((state) => state.tasks);
  const [isOpen, setIsoOpen] = useState(false);

  return (
    <>
      <div className="addtask">
        <span>
          TASKS &nbsp; <strong>{tasks.length}</strong>
        </span>
        <button onClick={() => setIsoOpen(!isOpen)} className="addtask_btn">
          +
        </button>
      </div>
      {isOpen === true ? <TaskPannel setIsoOpen={setIsoOpen} /> : null}
    </>
  );
}

export default AddTask;
