import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const taskList = tasks.map((task, index) => {
    <Task
      key={index}
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
    />;
  });

  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
