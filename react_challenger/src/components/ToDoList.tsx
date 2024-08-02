import React from "react";
import "./ToDoList.css";

function ToDoList() {
  return (
    <div className="toDoList">
      <div className="header">
        <h1>To Do List</h1>
      </div>
      <li>
        <label>
          <ul>
            <div className="toDoContent">
              <input type="checkbox" className="checkbox" />
              teste 1<span className="spanCross">&#10006;</span>
            </div>
          </ul>
          <ul>
            <div className="toDoContent">
              <input type="checkbox" className="checkbox" />
              teste 1<span className="spanCross">&#10006;</span>
            </div>
          </ul>
        </label>
      </li>
      <li>
        <span>&#10010;</span>
        Add new Task
      </li>
    </div>
  );
}

export default ToDoList;
