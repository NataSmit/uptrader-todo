import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Status, Priority, Task } from '../types/types'
import { saveTaskToLS } from '../utils/utils'

export const useTaskForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<Priority>('Normal')
  const [status, setStatus] = useState<Status>('Not started')
  const [dueDate, setDueDate] = useState('')
  const [newTask, setNewTask] = useState<Task>()


  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value)
  }

  function handleDescriptionChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value)
  }

  function handlePriorityChange(e: ChangeEvent<HTMLSelectElement>) {
    setPriority(e.target.value as Priority)
  }

  function handleStatusChange(e: ChangeEvent<HTMLSelectElement>) {
    setStatus(e.target.value as Status)
  }

  function handleDueDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDueDate(e.target.value)
  }

  function clearInputs() {
    setTitle('')
    setDescription('')
    setPriority('Normal')
    setStatus('Not started')
    setDueDate('')
  }

  function handleTaskSubmit(tasksLength: number) {
    setNewTask({
      id: Number((Math.random() * 100).toFixed(0)),
      number: tasksLength + 1,
      title,
      description,
      creationDate: String(Date.now()),
      dueDate,
      priority,
      status,
      workingTime: '0'
    })
    clearInputs()
  }

  return {
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
    handleTaskSubmit
  }
}