import React, { useState, useContext } from "react";
import "./ToDoList.css";
import Task from "./Task.tsx";
import { TodoContext } from "../Contexts/TodoContext/index.tsx";

function ToDoList() {
  const [newDescription, setNewDescription] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const { todos, createTodo } = useContext(TodoContext);

  return (
    <div className="toDoList">
      <div className="header">
        <h1>To Do List</h1>
      </div>
      <div className="tableContent">
        <li>
          {todos?.map((task, key) => {
            return (
              <div key={key}>
                <Task task={task} />
              </div>
            );
          })}
        </li>
      </div>
      <div className="editTodo">
        <input
          type="text"
          className="inputTask"
          hidden={true}
          placeholder=""
          value={editDescription}
          onChange={(event) => {
            setEditDescription(event.target.value);
          }}
        />
        <button
          className="btnSave"
          hidden={true}
          onClick={(event) => {
            if (createTodo) createTodo(editDescription);
            console.log(editDescription);
            setEditDescription("");
            document
              .querySelector(".inputTask")
              ?.setAttribute("hidden", "true");
            document.querySelector(".btnSave")?.setAttribute("hidden", "true");
          }}
        >
          Save
        </button>
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
