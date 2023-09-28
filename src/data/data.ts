import { Project, Task, StatusObject } from "../types/types";

const task1: Task = {
  id: 1,
  number: 1,
  title: "test1 done",
  description: "test1",
  creationDate: "1.01.23",
  workingTime: "3h",
  dueDate: "3.09.23",
  priority: "Normal",
  status: "Done",
};

const task2: Task = {
  id: 2,
  number: 2,
  title: "test2 in progress",
  description: "test1",
  creationDate: "1.01.23",
  workingTime: "3h",
  dueDate: "3.09.23",
  priority: "Normal",
  status: "In progress",
};

export const projects: Project[] = [
  { id: 1, name: "Project 1", tasks: [task1, task2] },
  { id: 2, name: "Project 2", tasks: [] },
];

export const statuses: StatusObject[] = [
  {
    status: "Not started",
    name: "Queue",
  },
  {
    status: "In progress",
    name: "Development",
  },
  {
    status: "Done",
    name: "Done",
  },
];
