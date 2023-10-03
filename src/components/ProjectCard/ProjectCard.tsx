import React from "react";
import styles from "./ProjectCard.module.scss";

interface Props {
  projectName: string;
}

export default function ProjectCard({ projectName }: Props) {
  return (
    <li className={styles.card}>
      <div className={styles.container}>
        <h1 className={styles.title}>{projectName}</h1>
      </div>
    </li>
  );
}
