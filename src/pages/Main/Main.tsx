import React, { useEffect, useState } from "react";
//import { projects } from "../../data/data";
import { Link } from "react-router-dom";
import styles from "./Main.module.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Button from "../../components/Button/Button";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import { getProjectsFromLS } from "../../utils/utils";
import { Project } from "../../types/types";
import { useProjectForm } from "../../hooks/useProjectForm";

export default function Main() {
  const [isProjectFormOpen, setProjectFormOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>();
  //const projects = getProjectsFromLS()
  console.log("projects", projects);

  const { projectName, newProject, handleProjectNameChange, handleFormSubmit } =
    useProjectForm();

 

  useEffect(() => {
    setProjects(getProjectsFromLS());
  }, [newProject]);

  function openProjectForm() {
    setProjectFormOpen(true);
  }

  function closeProjectForm() {
    setProjectFormOpen(false);
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <Button
            text={"Create project"}
            clickHandler={openProjectForm}
          ></Button>
        </div>
        <ul className={styles.list}>
          {projects &&
            projects.map((project) => (
              <Link
                to={`/taskboard/${project.id}`}
                key={project.id}
                className={styles.link}
              >
                <ProjectCard projectName={project.name} />
              </Link>
            ))}
        </ul>
      </div>
      <ProjectForm
        isProjectFormOpen={isProjectFormOpen}
        closeProjectForm={closeProjectForm}
        projectName={projectName}
        newProject={newProject}
        handleProjectNameChange={handleProjectNameChange}
        handleFormSubmit={handleFormSubmit}
      />
    </main>
  );
}
