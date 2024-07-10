import React, { useState } from "react";
import "./Content.css";

export default function Content() {
  const [tasks, setTask] = useState(["Eat Breakfast", "Bath", "Read"]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((element, i) => i !== index);
    setTask(updatedTask);
  }

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          placeholder="Enter the task"
          type="text"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="flex">
        <ol>
          {tasks.map((tasks, index) => (
            <li key={index}>
              <span className="text">{tasks}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                MoveUp
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                MoveDown
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
