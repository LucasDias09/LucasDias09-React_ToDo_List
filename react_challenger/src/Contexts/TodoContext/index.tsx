import React, { useState, createContext } from "react";
import todosJson from "../../Todo.json";

type Todo = { id: number; description: string; check: boolean };

type DefaultValuesType = {
  todos: Todo[];
  helperEdit: string;
  createTodo?: (description: string) => void;
  deleteTodo?: (id: number) => void;
  changeCheck?: (id: number, check: boolean) => void;
  changeDescripion?: (id: number) => void;
  saveEdition?: (description: string) => void;
};

const defaultValues: DefaultValuesType = {
  todos: [],
  helperEdit: "",
};

export const TodoContext = createContext(defaultValues);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(todosJson.todos);
  const [helperEdit, setHelperEdit] = useState("");

  function createTodo(description: string) {
    if (!(todos.length === 0)) {
      const lastID = todos[todos.length - 1].id;
      setTodos([
        ...todos,
        {
          id: lastID + 1,
          description: description,
          check: false,
        },
      ]);
      // If empty then create new ToDo
    } else {
      setTodos([
        ...todos,
        {
          id: 1,
          description: description,
          check: false,
        },
      ]);
    }
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function changeCheck(id: number, check: boolean) {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;
    todo.check = !todo.check;
  }
  function changeDescripion(id: number) {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;
    // Show Input and BtnSave
    let inputTask = document.querySelector(".inputTask") as HTMLElement;
    let btnSave = document.querySelector(".btnSave") as HTMLElement;
    if (btnSave && inputTask) {
      inputTask.removeAttribute("hidden");
      btnSave.removeAttribute("hidden");
      deleteTodo(id);
      inputTask.setAttribute("value", todo.description);
    }
    setTodos(todos);
  }
  return (
    <TodoContext.Provider
      value={{
        todos,
        helperEdit,
        createTodo,
        deleteTodo,
        changeCheck,
        changeDescripion,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
