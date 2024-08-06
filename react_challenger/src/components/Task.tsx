import React, { useContext, useReducer, useRef, useState } from "react";
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
  const [isEdit, setIsEdit] = useState(false);
  const [editDescription, setEditDescription] = useState(task.description);
  const { deleteTodo, changeCheck, changeDescription } =
    useContext(TodoContext);

  return (
    <ul>
      <div className="toDoContent">
        {isEdit ? (
          <>
            <div className="editTodo">
              <input
                autoFocus={true}
                type="text"
                className="inputTask"
                placeholder={task.description}
                value={editDescription}
                onChange={(event) => {
                  setEditDescription(event.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (changeDescription)
                      changeDescription(task.id, editDescription);
                    setIsEdit(false);
                  }
                }}
              />
              <button
                className="btnSave"
                onClick={(event) => {
                  if (changeDescription)
                    changeDescription(task.id, editDescription);
                  setIsEdit(false);
                }}
              >
                Save
              </button>
            </div>
          </>
        ) : (
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
                setIsEdit(true);
              }}
            >
              <CiEdit></CiEdit>
            </span>
          </>
        )}
      </div>
    </ul>
  );
}

export default Task;
