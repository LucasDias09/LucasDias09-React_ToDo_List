import React, { useState, createContext } from "react";
import todosJson from "../../Todo.json";

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
  changeDescription?: (id: number, description: string) => void;
  saveEdition?: (description: string) => void;
};

const defaultValues: DefaultValuesType = {
  todos: [],
};

export const TodoContext = createContext(defaultValues);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(todosJson.todos);

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
  function changeDescription(id: number, description: string) {
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
        changeDescription,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
