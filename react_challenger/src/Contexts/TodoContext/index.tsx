import React, { useState, createContext } from "react";
import todosJson from "../../Todo.json";

type Todo = { id: number; description: string; check: boolean };

type DefaultValuesType = {
  todos: Todo[];
  createTodo?: (description: string) => void;
  deleteTodo?: (id: number) => void;
  changeCheck?: (id: number, check: boolean) => void;
  changeDescripion?: (id: number) => void;
  saveEdition?: (description: string) => void;
};

const defaultValues: DefaultValuesType = {
  todos: [],
};

export const TodoContext = createContext(defaultValues);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(todosJson.todos);

  function createTodo(description: string) {
    const lastID = todos[todos.length - 1].id;
    setTodos([
      ...todos,
      {
        id: lastID + 1,
        description: description,
        check: false,
      },
    ]);
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
    let inputTask = document.querySelector(".inputTask") as HTMLElement; // Caixa de texto
    let btnSave = document.querySelector(".btnSave") as HTMLElement; // Btn Save
    if (btnSave && inputTask) {
      inputTask.removeAttribute("hidden");
      btnSave.removeAttribute("hidden");
      deleteTodo(id);
      inputTask.setAttribute("value", todo.description);
    }

    todo.description = "NewMessage";
    setTodos(todos);
  }
  function saveEdition(description){
    
  }


  return (
    <TodoContext.Provider
      value={{
        todos,
        createTodo,
        deleteTodo,
        changeCheck,
        changeDescripion,
        saveEdition,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
