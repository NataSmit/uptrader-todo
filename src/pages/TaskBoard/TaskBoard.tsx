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
import { saveTaskToLS, getTasksFromLS, saveDataToLSAfterDrop } from "../../utils/utils";

export default function TaskBoard() {
  const [isTaskFormOpen, setTaskFormOpen] = useState(false);
  const { id } = useParams();
  const [tasks, setTasks] = useState<Task[]>();
  const {
    title,
    description,
    priority,
    status,
    dueDate,
    newTask,
    handleTitleChange,
    handleDescriptionChange,
    handlePriorityChange,
    handleStatusChange,
    handleDueDateChange,
    handleTaskSubmit,
  } = useTaskForm();

  console.log("newTask", newTask);

  useEffect(() => {
    if (newTask) {
      saveTaskToLS(Number(id), newTask);
    }
  }, [newTask]);

  useEffect(() => {
    setTasks(getTasksFromLS(Number(id)));
  }, [id, newTask]);

  function openTaskForm() {
    setTaskFormOpen(true);
  }

  function closeTaskForm() {
    setTaskFormOpen(false);
  }
  console.log("tasks taslboard", tasks);

  function handleDrop(taskId: number, status: Status) {
    console.log("handleDrop working");
    console.log("taskId", taskId);
    console.log("tasks", tasks);
    const tasksFromLS = getTasksFromLS(Number(id))
    console.log('tasksFromLS', tasksFromLS)
    const draggingTask = tasksFromLS.find((task) => task.id === taskId);
    console.log("draggingTask", draggingTask);

    if (draggingTask) {
      draggingTask.status = status;
      saveDataToLSAfterDrop(tasksFromLS, taskId, draggingTask, Number(id) )
    }
    console.log("draggingTask", draggingTask);
    setTasks((prevState) => {
      if (draggingTask && prevState) {
        const newTasks = prevState.filter((task) => task.id !== taskId);
        newTasks.push(draggingTask);
        return [...newTasks];
      }
      return prevState;
    });
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
                      <TaskItem task={task} key={task.id} />
                    )
                )}
            </DropContainer>
          ))}
        </div>
        <CreateTaskForm
          isTaskFormOpen={isTaskFormOpen}
          closeTaskForm={closeTaskForm}
          description={description}
          priority={priority}
          title={title}
          status={status}
          dueDate={dueDate}
          handleTitleChange={handleTitleChange}
          handleDescriptionChange={handleDescriptionChange}
          handlePriorityChange={handlePriorityChange}
          handleStatusChange={handleStatusChange}
          handleDueDateChange={handleDueDateChange}
          handleTaskSubmit={handleTaskSubmit}
          setTasks={setTasks}
          newTask={newTask}
          tasks={tasks}
        />
      </div>
    </div>
  );
}
