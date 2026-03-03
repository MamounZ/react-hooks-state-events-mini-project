import React from "react";
import Task from "./Task.js";


function TaskList({visibleTasks, handelDeleteTask}) {
  return (
    <div className="tasks">
      {visibleTasks.map(task => <Task key={task.text} task={task} handelDeleteTask={handelDeleteTask}/>)}
    </div>
  );
}

export default TaskList;
