import { ChangeEvent, FormEvent, useState } from "react";
import { Project } from "../types/types";

export const useProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [newProject, setNewProject] = useState<Project>();

  function handleProjectNameChange(e: ChangeEvent<HTMLInputElement>) {
    setProjectName(e.target.value);
  }

  function handleFormSubmit() {
    setNewProject({
      id: Number((Math.random() * 100).toFixed(0)),
      name: projectName,
      tasks: [],
    });
    setProjectName("");
  }

  return {
    projectName,
    newProject,
    handleProjectNameChange,
    handleFormSubmit
  }
}