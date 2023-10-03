import { LSHistory, Project, Task } from "../types/types";

function getProjectHistoryFromLS() {
  let projectHistory: LSHistory = {};
  if (localStorage["projectHistory"]) {
    projectHistory =
      JSON.parse(localStorage.getItem("projectHistory") || "") || {};
  }
  return projectHistory;
}

export function saveProjectToLS(project: Project) {
  const projectHistory = getProjectHistoryFromLS();
  projectHistory[project.id] = project;
  localStorage.setItem("projectHistory", JSON.stringify(projectHistory));
}

export function saveTaskToLS(projectId: number, task: Task) {
  const projectHistory = getProjectHistoryFromLS();
  const project = projectHistory[projectId];
  project.tasks.push(task);
  projectHistory[projectId] = project;
  localStorage.setItem("projectHistory", JSON.stringify(projectHistory));
}

export function saveChangedTaskToLS(projectId: number, task: Task) {
  const projectHistory = getProjectHistoryFromLS();
  const project = projectHistory[projectId];
  const filtered = project.tasks.filter((taskObj) => taskObj.id !== task.id);
  filtered.push(task);
  project.tasks = filtered;
  projectHistory[projectId] = project;
  localStorage.setItem("projectHistory", JSON.stringify(projectHistory));
}

export function getTasksFromLS(projectId: number) {
  const projectHistory = getProjectHistoryFromLS();
  const project = projectHistory[projectId];
  if (project) {
    return project.tasks;
  }
  return [];
}

export function getProjectsFromLS() {
  const projectHistory = getProjectHistoryFromLS();
  return Object.values(projectHistory);
}

export function saveDataToLSAfterDrop(
  tasks: Task[],
  taskId: number,
  draggingTask: Task,
  projectId: number
) {
  const projectHistory = getProjectHistoryFromLS();
  const project = projectHistory[projectId];
  const filteredTasks = tasks.filter((task) => task.id !== taskId);
  filteredTasks.push(draggingTask);
  project.tasks = filteredTasks;
  projectHistory[projectId] = project;
  localStorage.setItem("projectHistory", JSON.stringify(projectHistory));
}
