import { useState } from "react";

export default function List() {
  const [tasks, setTasks] = useState([
    "walk the cat",
    "eat more chikin",
    "file taxes",
  ]);

  const addTask = (e) => {
    e.preventDefault();
    const task = document.querySelector(".add-task-input").value;

    setTasks([...tasks, task]);
  };

  return (
    <>
      <label htmlFor="add-task">Add New Task</label>
      <form id="add-task">
        <input className="add-task-input" type="text" placeholder="new task" />
        <button onClick={addTask}>Add</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </>
  );
}
