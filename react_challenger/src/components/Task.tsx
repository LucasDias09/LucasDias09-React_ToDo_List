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
  const [isEdit, setIsEdit] = useState(true);
  const [editChange, setEditChange] = useState("");
  const { deleteTodo, changeCheck, changeDescription } =
    useContext(TodoContext);

  return (
    <ul>
      <div className="toDoContent">
        {isEdit ? (
          <>
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
                setIsEdit(!isEdit);
              }}
            >
              <CiEdit></CiEdit>
            </span>
          </>
        ) : (
          <>
            <div className="editTodo">
              <input
                type="text"
                className="inputTask"
                defaultValue={task.description}
                onChange={(e) => {
                  setEditChange(e.target.value);
                }}
              />
              <button
                className="editBtn"
                onClick={() => {
                  setIsEdit(!isEdit);
                  if (changeDescription) changeDescription(task.id, editChange);
                }}
              >
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </ul>
  );
}

export default Task;
