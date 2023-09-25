export type Project = {
  id: number,
  name: string
}

export type Priority = 'Low'| 'High' | 'Normal'

export type Task = {
  id: number,
  number: number,
  title: string,
  description: string,
  creationDate: string,
  workingTime: string,
  completionDate: string,
  priority: Priority,
  status: string
}