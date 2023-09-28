export type Priority = 'Low'| 'High' | 'Normal'
export type Status = 'Not started' | 'In progress' | 'Done'

export type Task = {
  id: number,
  number: number,
  title: string,
  description: string,
  creationDate: string,
  workingTime: string,
  dueDate: string,
  priority: Priority,
  status: Status
}

export type Project = {
  id: number,
  name: string,
  tasks: Task[]
}

export type StatusObject = {
  status: Status,
  name: string
}