import React, { useState } from "react";
import { projects } from "../../data/data";
import { Link } from "react-router-dom";
import styles from "./Main.module.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Button from "../../components/Button/Button";
import ProjectForm from "../../components/ProjectForm/ProjectForm";

export default function Main() {

  const [isProjectFormOpen, setProjectFormOpen] = useState(false);

  function openProjectForm() {
    setProjectFormOpen(true);
  }

  function closeProjectForm() {
    setProjectFormOpen(false);
  }



  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Button text={"Create project"} clickHandler={openProjectForm}></Button>
        </div>
        <ul className={styles.list}>
          {projects.map((project) => (
            <Link to={`/taskboard/${project.id}`} key={project.id} className={styles.link} >
              <ProjectCard projectName={project.name}/>
            </Link>
          ))}
        </ul>
      </div>
      <ProjectForm isProjectFormOpen={isProjectFormOpen} closeProjectForm={closeProjectForm}/>
    </main>
  );
}
