import React, { useContext, useState } from "react";
import { TodoContext } from "../Contexts/TodoContext/index.tsx";
import { CiEdit } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

type TaskProps = {
  task: {
    description: string;
    check: boolean;
    id: number;
  };
};
function Task({ task }: TaskProps) {
  const [toDoTask, setToDoTask] = useState(task);
  const { deleteTodo, changeCheck, changeDescripion } = useContext(TodoContext);

  return (
    <ul>
      <div className="toDoContent">
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={toDoTask.check}
          onClick={() => {
            if (changeCheck) changeCheck(task.id, !task.check);
          }}
        />
        <span>{task.description}</span>
        <span
          className="spanCross"
          onClick={() => {
            if (deleteTodo) deleteTodo(task.id);
          }}
        >
          <IoMdClose />
        </span>
        <span
          className="editTask"
          onClick={(e) => {
            changeDescripion?.(task.id);
            if (deleteTodo) deleteTodo(task.id);
          }}

        >
          <CiEdit></CiEdit>
        </span>
      </div>
    </ul>
  );
}

export default Task;
