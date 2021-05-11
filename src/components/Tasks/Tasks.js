import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertAllTask } from "../../redux/actions/actions";
import Task from "./Task/Task";
import crypto from "crypto";

function Tasks() {
  const tasks = useSelector((state) => state.tasks);
  const isToken = useSelector((state) => state.isToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("jwt") !== null) {
      dispatch(insertAllTask(String(localStorage.getItem("jwt"))));
    }
  }, [isToken]);

  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return <Task key={crypto.randomBytes(10).toString("hex")} {...task} />;
      })}
    </div>
  );
}

export default Tasks;
