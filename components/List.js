import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function List() {
  const [tasks, setTasks] = useState([
    { id: "sfgnknf4309q8hr0q34fnqwfu", text: "walk the cat", edit: false },
    {
      id: "fnqiub4qub4fiawnkasjndfub4pquwba",
      text: "eat more chikin",
      edit: false,
    },
    { id: "nfaubn4h3p4ufbwaj4fna", text: "file taxes", edit: false },
  ]);

  const addTask = (e) => {
    e.preventDefault();
    let input = document.querySelector(".add-task-input");

    const task = {
      id: uuid(),
      text: input.value,
      edit: false,
    };

    setTasks([...tasks, task]);
    input.value = "";
  };

  const removeTask = (e) => {
    const id = e.target.parentElement.id;
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const updatedArray = tasks.filter(
      (task) => tasks.indexOf(task) !== taskIndex
    );

    setTasks(updatedArray);
  };

  // const [currentTask, setCurrentTask] = useState("");

  const editTask = (e) => {
    // traverse DOM to find task text and use to update currentTask state
    const id = e.target.id;
    const tasksArray = [...tasks];
    tasksArray.map((task) => (task.id === id ? (task.edit = true) : task));
    setTasks(tasksArray);
  };

  const updateTask = (e) => {
    const id = e.target.parentElement.id;
    const newTaskText = e.target.previousSibling.value;
    const tasksArray = [...tasks];
    tasksArray.map((task) => {
      if (task.id === id) {
        task.text = newTaskText;
        task.edit = false;
      }
    });
    setTasks(tasksArray);
  };

  return (
    <>
      <label htmlFor="add-task">Add New Task</label>
      <form id="add-task">
        <input className="add-task-input" type="text" placeholder="new task" />
        <button onClick={addTask}>Add</button>
      </form>
      <ul>
        {tasks.map(({ id, text, edit }) => (
          <li className="task-li" key={id}>
            {(edit && (
              <div className="edit-task-container" id={id}>
                <input defaultValue={text} />
                <button id={id} onClick={updateTask}>
                  Update
                </button>
              </div>
            )) || (
              <div className="task-container" id={id}>
                <span className="task-text" id={id}>
                  {text}
                </span>
                <button
                  className="task-delete-btn"
                  id={id}
                  onClick={removeTask}
                >
                  x
                </button>
                <button className="task-update-btn" id={id} onClick={editTask}>
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
