import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import FormButton from "../FormButton/FormButton";
import styles from "./ProjectForm.module.scss";
import { Project } from "../../types/types";
import { saveProjectToLS } from "../../utils/utils";

interface Props {
  isProjectFormOpen: boolean;
  closeProjectForm: () => void;
  projectName: string;
  newProject: Project | undefined;
  handleProjectNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: () => void
}

export default function ProjectForm({
  isProjectFormOpen,
  closeProjectForm,
  projectName,
  newProject,
  handleProjectNameChange,
  handleFormSubmit
}: Props) {
  

  useEffect(() => {
    if (newProject) {
      saveProjectToLS(newProject);
    }
  }, [newProject]);

  function handleProjectFormSubmit(e: FormEvent) {
    e.preventDefault()
    handleFormSubmit()
    closeProjectForm()
  }


  console.log("newProject", newProject);

  return (
    <Modal isOpen={isProjectFormOpen}>
      <form className={styles.projectForm} onSubmit={handleProjectFormSubmit}>
        <input
          value={projectName}
          onChange={handleProjectNameChange}
          className={styles.input}
          placeholder="Project name..."
        />
        <FormButton text={"Save"} />
        <FormButton
          text={"Close window"}
          type={"button"}
          clickHandler={closeProjectForm}
        />
      </form>
    </Modal>
  );
}
