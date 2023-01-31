import React, { useState } from "react";

function CreateTask(props) {
  const [newTask, setNewTask] = useState("");
  const handelChange = (e) => {
    setNewTask(e.target.value);
  };
  const hundelAddTask = () => {
    props.AddTask(newTask);
    setNewTask("");
  };

  return (
    <div>
      <div>
        <p>To Do App</p>
      </div>
      <input
        type="text"
        placeholder="Add a new task"
        className="input"
        value={newTask}
        onChange={handelChange}
      />
      <button onClick={hundelAddTask}>Add Tasks</button>
    </div>
  );
}

export default CreateTask;
