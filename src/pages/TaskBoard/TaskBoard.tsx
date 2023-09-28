import React, { useState } from "react";
import styles from "./TaskBoard.module.scss";
import CreateTaskForm from "../../components/CreateTaskForm/CreateTaskForm";
import { useParams } from "react-router-dom";
import { projects, statuses } from "../../data/data";
import { useTaskForm } from "../../hooks/useTaskForm";
import { Task, Project } from "../../types/types";
import TaskItem from "../../components/TaskItem/TaskItem";
import DropContainer from "../../components/DropContainer/DropContainer";
import { Status } from "../../types/types";

export default function TaskBoard() {
  const [isTaskFormOpen, setTaskFormOpen] = useState(false);
  const { id } = useParams();
  const project = projects.find((project) => project.id === Number(id));
  const [tasks, setTasks] = useState<Task[]>(project?.tasks || []);
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

  function openTaskForm() {
    setTaskFormOpen(true);
  }

  function closeTaskForm() {
    setTaskFormOpen(false);
  }

  function handleDrop(taskId: number, status: Status) {
    console.log('handleDrop working')
    console.log('taskId', taskId)
    const draggingTask = tasks.find((task) => task.id === taskId)
    console.log('draggingTask', draggingTask)
    if (draggingTask) {
      draggingTask.status = status
    }
    setTasks(prevState => {
      if (draggingTask) {
        const newTasks = prevState.filter((task) => task.id !== taskId)
        newTasks.push(draggingTask)
        return [...newTasks]
      }
      return prevState
    })
  }

  return (
    <div>
      <button onClick={openTaskForm}>Create new task</button>
      <div className={styles.taskboard}>
        {statuses.map((status) => (
          <DropContainer key={status.name} handleDrop={handleDrop} status={status.status}>
            {status.name}
            {tasks &&
              tasks.map(
                (task) =>
                  task.status === status.status && (
                    <TaskItem task={task} key={task.id} />
                  )
              )}
          </DropContainer>
        ))}
        {/* <div className={styles.section} ref={drop}>
          Queue
          {tasks &&
            tasks.map(
              (task) =>
                task.status === "Not started" && (
                  <TaskItem task={task}/>
                )
            )}
        </div>
        <div className={styles.section} ref={drop}>
          Development
          {tasks &&
            tasks.map(
              (task) =>
                task.status === "In progress" && (
                  <TaskItem task={task}/>
                )
            )}
        </div>
        <div className={styles.section} ref={drop}>
          Done
          {tasks &&
            tasks.map(
              (task) =>
                task.status === "Done" && <TaskItem task={task}/>
            )}
        </div> */}
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
  );
}
