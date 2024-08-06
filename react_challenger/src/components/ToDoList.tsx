import React, { useState, useContext } from "react";
import "./ToDoList.css";
import Task from "./Task.tsx";
import { TodoContext } from "../Contexts/TodoContext/index.tsx";

function ToDoList() {
  const [newDescription, setNewDescription] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const { todos, createTodo } = useContext(TodoContext);
  const [searchTerm, setSearch] = useState("");
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  };

  return (
    <div className="toDoList">
      <div className="header">
        <div className="filter_todo">
          <label>Search</label>
          <input
            type="text"
            className="filtervalue"
            placeholder="search"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <h1>To Do List</h1>
      </div>
      <div className="tableContent">
        <li>
          {todos?.map((task, key) => {
            if (task.description.includes(searchTerm)) {
              console.log("entrou: ", searchTerm);
              return (
                <div key={key}>
                  <Task task={task} />
                </div>
              );
            } else {
              return (
                <div key={key}>
                  <Task task={task} />
                </div>
              );
            }
          })}
        </li>
      </div>

      <div className="addTodoTask">
        <input
          className="inputTask"
          type="text"
          value={newDescription}
          onChange={(event) => {
            setNewDescription(event.target.value);
          }}
        ></input>
        <div>
          <button
            onClick={(event) => {
              if (createTodo) createTodo(newDescription);
              setNewDescription("");
            }}
          >
            <span>+ Add new Task </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;

// // Set localStorage Arrays
// function updateSavedColumns() {
//   listArrays = [backlogListArray, progressListArray, completeListArray, onHoldListArray];
//   const arrayNames = ['backlog', 'progress', 'complete', 'onHold'];
//   arrayNames.forEach((arrayName, index) => {
//     localStorage.setItem(`${arrayName}Items`, JSON.stringify(listArrays[index]));
//   });
// }
