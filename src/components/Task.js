import React from "react";

function Task({task, handelDeleteTask}) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" value={task.text} onClick={handelDeleteTask}>X</button>
    </div>
  );
}

export default Task;
