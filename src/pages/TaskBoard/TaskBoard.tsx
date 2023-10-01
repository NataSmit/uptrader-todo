import React, { useEffect, useState } from "react";
import styles from "./TaskBoard.module.scss";
import CreateTaskForm from "../../components/CreateTaskForm/CreateTaskForm";
import { useParams } from "react-router-dom";
import { projects, statuses } from "../../data/data";
import { useTaskForm } from "../../hooks/useTaskForm";
import { Task, Project } from "../../types/types";
import TaskItem from "../../components/TaskItem/TaskItem";
import DropContainer from "../../components/DropContainer/DropContainer";
import { Status } from "../../types/types";
import Button from "../../components/Button/Button";
import {
  saveTaskToLS,
  getTasksFromLS,
  saveDataToLSAfterDrop,
  saveChangedTaskToLS,
} from "../../utils/utils";

export default function TaskBoard() {
  const [isTaskFormOpen, setTaskFormOpen] = useState(false);
  const { id } = useParams();
  const [tasks, setTasks] = useState<Task[]>();
  const [createdTask, setCreatedTask] = useState<Task>();
  const [changedTask, setChangedTask] = useState<Task>();

  console.log("createdTask taskBoard", createdTask);
  console.log("changedTask taskBoard", changedTask);

  useEffect(() => {
    if (createdTask) {
      saveTaskToLS(Number(id), createdTask);
    }
  }, [createdTask]);

  useEffect(() => {
    if (changedTask) {
      saveChangedTaskToLS(Number(id), changedTask);
    }
  }, [changedTask]);

  useEffect(() => {
    setTasks(getTasksFromLS(Number(id)));
  }, [id, createdTask, changedTask]);

  function openTaskForm() {
    setTaskFormOpen(true);
  }

  function closeTaskForm() {
    setTaskFormOpen(false);
  }
  console.log("tasks taslboard", tasks);

  function handleDrop(taskId: number, status: Status) {
    const tasksFromLS = getTasksFromLS(Number(id));

    const draggingTask = tasksFromLS.find((task) => task.id === taskId);

    if (draggingTask) {
      draggingTask.status = status;
      saveDataToLSAfterDrop(tasksFromLS, taskId, draggingTask, Number(id));
    }

    setTasks((prevState) => {
      if (draggingTask && prevState) {
        const newTasks = prevState.filter((task) => task.id !== taskId);
        newTasks.push(draggingTask);
        return [...newTasks];
      }
      return prevState;
    });
  }

  function modifyTask(taskId: number) {
    const changedTask = tasks?.find((task) => task.id === taskId);
  }

  return (
    <div className={styles.taskBoard}>
      <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <Button text={"Create new task"} clickHandler={openTaskForm} />
        </div>
        <div className={styles.box}>
          {statuses.map((status) => (
            <DropContainer
              key={status.name}
              handleDrop={handleDrop}
              status={status.status}
              name={status.name}
            >
              {tasks &&
                tasks.map(
                  (task) =>
                    task.status === status.status && (
                      <TaskItem
                        task={task}
                        key={task.id}
                        tasksLength={tasks?.length}
                        setChangedTask={setChangedTask}
                      />
                    )
                )}
            </DropContainer>
          ))}
        </div>
        <CreateTaskForm
          isTaskFormOpen={isTaskFormOpen}
          closeTaskForm={closeTaskForm}
          tasksLength={tasks?.length}
          setCreatedTask={setCreatedTask}
        />
      </div>
    </div>
  );
}
