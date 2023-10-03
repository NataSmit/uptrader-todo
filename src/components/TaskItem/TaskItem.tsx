import React, { useState } from "react";
import { useDrag } from "react-dnd";
import styles from "./TaskItem.module.scss";
import { Task } from "../../types/types";
import Pen from "../../images/pen.svg";
import TaskDetailsModal from "./TaskDetailsModal/TaskDetailsModal";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";

interface Props {
  task: Task;
  tasksLength: number;
  setChangedTask: (newTask: Task) => void;
}

export default function TaskItem({ task, tasksLength, setChangedTask }: Props) {
  const [isTaskModalOpen, setTaskModalOpen] = useState(false);
  const [isModifyTaskModalOpen, setModifyTaskModalOpen] = useState(false);

  function closeTaskModal() {
    setTaskModalOpen(false);
  }

  function closeModifyTaskModal() {
    setModifyTaskModalOpen(false);
  }

  function openTaskModal() {
    setTaskModalOpen(true);
  }

  function handleTaskModifying() {
    setModifyTaskModalOpen(true);
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className={styles.task} ref={drag}>
      <button className={styles.modifyBtn} onClick={handleTaskModifying}>
        <img src={Pen} alt="Modify" />
      </button>
      <button onClick={openTaskModal} className={styles.more}>
        ...
      </button>
      <div className={styles.container}>
        <div className={styles.title}>{task.title}</div>
        <div>Prio: {task.priority}</div>
        <div>Due date: {task.dueDate}</div>
      </div>

      <TaskDetailsModal
        task={task}
        isTaskModalOpen={isTaskModalOpen}
        closeTaskModal={closeTaskModal}
      />
      <CreateTaskForm
        isTaskFormOpen={isModifyTaskModalOpen}
        closeTaskForm={closeModifyTaskModal}
        tasksLength={tasksLength}
        task={task}
        isModifyTaskModalOpen={isModifyTaskModalOpen}
        setChangedTask={setChangedTask}
      />
    </div>
  );
}
