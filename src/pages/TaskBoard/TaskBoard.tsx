import React from "react";
import styles from "./TaskBoard.module.scss";
import CreateTaskForm from "../../components/CreateTaskForm/CreateTaskForm";

export default function TaskBoard() {
  return (
    <div>
      <CreateTaskForm />
      <div className={styles.taskboard}>
        <div className={styles.section}>Queue</div>
        <div className={styles.section}>Development</div>
        <div className={styles.section}>Done</div>
      </div>
    </div>
  );
}
