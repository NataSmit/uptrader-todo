import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";
import styles from "./CreateTaskForm.module.scss";
import Modal from "../Modal/Modal";
import { Task, Priority, Status } from "../../types/types";
import FormButton from "../FormButton/FormButton";

interface Props {
  isTaskFormOpen: boolean;
  closeTaskForm: () => void;
  description: string;
  priority: Priority;
  title: string;
  status: Status;
  dueDate: string;
  handleTitleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  handleDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  handlePriorityChange: (e: ChangeEvent<HTMLSelectElement>) => void,
  handleStatusChange: (e: ChangeEvent<HTMLSelectElement>) => void,
  handleDueDateChange: (e: ChangeEvent<HTMLInputElement>) => void,
  handleTaskSubmit: (tasksLength: number) => void,
  setTasks: Dispatch<SetStateAction<Task[] | undefined>>,
  newTask: Task | undefined,
  tasks: Task[] | undefined
}

export default function CreateTaskForm({
  isTaskFormOpen,
  closeTaskForm,
  priority,
  description,
  title,
  status,
  dueDate,
  handleTitleChange,
  handleDescriptionChange,
  handlePriorityChange,
  handleStatusChange,
  handleDueDateChange,
  handleTaskSubmit,
  setTasks,
  newTask,
  tasks
}: Props) {
  
  function handleFormSubmit(e: FormEvent) {
    e.preventDefault()
    handleTaskSubmit(tasks?.length || Date.now())
    closeTaskForm()
  }

  useEffect(() => {
    if (tasks && newTask) {
      setTasks([...tasks, newTask])
      //setTasks((prev) => [...prev, newTask])
    }
  }, [newTask])

  console.log('tasks', tasks)

  return (
    <Modal isOpen={isTaskFormOpen}>
      <form className={styles.taskForm} onSubmit={handleFormSubmit}>
        <input
          className={styles.input}
          value={title}
          onChange={handleTitleChange}
          type="text"
          placeholder="Title"
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
          <input value={dueDate} onChange={handleDueDateChange} type="date" />
        </label>
        <FormButton text={'Save'}/>
        <FormButton text={'Close window'} clickHandler={closeTaskForm} type="button"/>
      </form>
    </Modal>
  );
}
