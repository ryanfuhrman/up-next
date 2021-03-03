import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function List() {
  const [tasks, setTasks] = useState([
    { id: "sfgnknf4309q8hr0q34fnqwfu", text: "walk the cat" },
    { id: "fnqiub4qub4fiawnkasjndfub4pquwba", text: "eat more chikin" },
    { id: "nfaubn4h3p4ufbwaj4fna", text: "file taxes" },
  ]);

  const addTask = (e) => {
    e.preventDefault();
    const taskText = document.querySelector(".add-task-input").value;

    const task = {
      id: uuid(),
      text: taskText,
    };

    setTasks([...tasks, task]);
  };

  const removeTask = (e) => {
    const id = e.target.parentElement.id;
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const updatedArray = tasks.filter(
      (task) => tasks.indexOf(task) !== taskIndex
    );

    setTasks(updatedArray);
  };

  return (
    <>
      <label htmlFor="add-task">Add New Task</label>
      <form id="add-task">
        <input className="add-task-input" type="text" placeholder="new task" />
        <button onClick={addTask}>Add</button>
      </form>
      <ul>
        {tasks.map(({ id, text }) => (
          <li className="task-li" key={id} id={id}>
            <span className="task-text">{text}</span>
            <button className="task-delete-btn" onClick={removeTask}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
