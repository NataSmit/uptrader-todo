import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import styles from "./CreateTaskForm.module.scss";
import Modal from "../Modal/Modal";
import { Task, Priority, Status } from "../../types/types";
import FormButton from "../FormButton/FormButton";
import { useTaskForm } from "../../hooks/useTaskForm";

interface Props {
  isTaskFormOpen: boolean;
  closeTaskForm: () => void;
  setCreatedTask?: (newTask: Task) => void;
  setChangedTask?: (newTask: Task) => void;
  tasksLength: number | undefined;
  isModifyTaskModalOpen?: boolean;
  task?: Task;
}

export default function CreateTaskForm({
  isTaskFormOpen,
  closeTaskForm,
  tasksLength,
  task,
  setCreatedTask,
  isModifyTaskModalOpen,
  setChangedTask,
}: Props) {
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
    setTitle,
    setDescription,
    setPriority,
    setStatus,
    setDueDate,
  } = useTaskForm(tasksLength || Number((Math.random() * 100).toFixed(0)));

  function handleTaskChange(task: Task) {
    if (setChangedTask) {
      setChangedTask({
        ...task,
        title,
        description,
        priority,
        status,
        dueDate,
      });
    }
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    isModifyTaskModalOpen && task
      ? handleTaskChange(task)
      : handleTaskSubmit(tasksLength || Date.now());
    closeTaskForm();
  }

  useEffect(() => {
    if (newTask && setCreatedTask) {
      setCreatedTask(newTask);
    }
  }, [newTask]);

  // useEffect(() => {
  //   if (newTask && setChangedTask) {
  //     setChangedTask(newTask)
  //   }
  // }, [newTask])

  useEffect(() => {
    setTitle(task?.title || "");
    setDescription(task?.description || "");
    setPriority(task?.priority || "Normal");
    setStatus(task?.status || "Not started");
    setDueDate(task?.dueDate || "");
  }, []);

  return (
    <Modal isOpen={isTaskFormOpen}>
      <form className={styles.taskForm} onSubmit={handleFormSubmit}>
        <input
          className={styles.input}
          value={title}
          onChange={handleTitleChange}
          type="text"
          placeholder="Title"
          required
        />
        <textarea
          className={styles.input}
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
        ></textarea>
        <label className={styles.label}>
          Priority
          <select value={priority} onChange={handlePriorityChange}>
            <option>Low</option>
            <option>Normal</option>
            <option>High</option>
          </select>
        </label>
        <label className={styles.label}>
          Status
          <select value={status} onChange={handleStatusChange}>
            <option>Not started</option>
            <option>In progress</option>
            <option>Done</option>
          </select>
        </label>
        <label className={styles.label}>
          Due date
          <input value={dueDate} onChange={handleDueDateChange} type="date" required/>
        </label>
        <FormButton text={isModifyTaskModalOpen ? "Save changes" : "Save"} />
        <FormButton
          text={"Close window"}
          clickHandler={closeTaskForm}
          type="button"
        />
      </form>
    </Modal>
  );
}
