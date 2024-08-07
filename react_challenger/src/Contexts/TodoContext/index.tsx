import React, { useState, createContext, useEffect } from "react";
import todosJson from "../../Todo.json";
import { X } from "phosphor-react";

type Todo = {
  id: number;
  description: string;
  check: boolean;
};

type DefaultValuesType = {
  todos: Todo[];
  createTodo?: (description: string) => void;
  deleteTodo?: (id: number) => void;
  changeCheck?: (id: number, check: boolean) => void;
  editDescription?: (id: number, description: string) => void;
  saveEdition?: (description: string) => void;
};

const defaultValues: DefaultValuesType = {
  todos: [],
};

export const TodoContext = createContext(defaultValues);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(todosJson.todos);

  
  function createTodo(description: string) {
    // If empty
    if (description.length === 0) {
      return;
    }
    const lastID = todos[todos.length - 1].id;
    const newCreateToDo = {
      id: lastID + 1 || 1,
      description: description,
      check: false,
    };
    const newToDos = [...todos, newCreateToDo];
    setTodos(newToDos);
    // If empty then create new ToDo
  }
  function deleteTodo(id: number) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }
  function changeCheck(id: number, check: boolean) {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;
    todo.check = !todo.check;
  }
  function editDescription(id: number, description: string) {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;
    todo.description = description;
    setTodos(todos);
  }
  return (
    <TodoContext.Provider
      value={{
        todos,
        createTodo,
        deleteTodo,
        changeCheck,
        editDescription,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
