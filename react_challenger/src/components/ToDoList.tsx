import React from "react";
import "./ToDoList.css";

function ToDoList() {
  return (
    <div className="toDoList">
      <div className="header">
        <h1>To Do List</h1>
      </div>
      <li>
        <ul>
          <div className="toDoContent">
            <input type="checkbox" className="checkbox" />
            <span>teste 1</span>
            <span className="spanCross">&#10006;</span>
          </div>
        </ul>
        <ul>
          <div className="toDoContent">
            <input type="checkbox" className="checkbox" />
            <span>teste 2</span>
            <span className="spanCross">&#10006;</span>
          </div>
        </ul>
      </li>
      <button>
        <span>&#10010;Add new Task </span>
      </button>
    </div>
  );
}

export default ToDoList;
//  commit -m 'React App Create and add ToDo List component with html and css'
