export type Priority = 'Low'| 'High' | 'Normal'
export type Status = 'Not started' | 'In progress' | 'Done'

export type Task = {
  id: number,
  number: number,
  title: string,
  description: string,
  creationDate: string,
  dueDate: string,
  priority: Priority,
  status: Status,
  startOfWork?: Date
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


export type LSHistory = {
  [key: number]: Project;
};

//{id: {id: 1, name: 'test', tasks: []}}