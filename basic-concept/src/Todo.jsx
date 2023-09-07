import React from "react";

const Todo = ({ task = "No task", isDone }) => {
  return <div>{isDone ? task + "👌" : task}</div>;
};

// const Todo = ({ task = "No task", isDone }) => {
//   if (isDone) {
//     return { task } + "👌";
//   }
//   return <div>{task}</div>;
// };
export default Todo;
