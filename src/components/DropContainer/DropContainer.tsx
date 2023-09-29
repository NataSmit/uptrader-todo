import React from "react";
import styles from "./DropContainer.module.scss";
import { useDrop } from "react-dnd";
import { Status, Task } from "../../types/types";

interface Props {
  children: React.ReactNode;
  handleDrop: (taskId: number, status: Status) => void;
  status: Status;
  name: string;
  
}

export default function DropContainer({
  children,
  status,
  handleDrop,
  name,
  
}: Props) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: { id: number }) => {
      handleDrop(item.id, status);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className={styles.dropBox} ref={drop}>
      <div className={styles.container}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.flexbox}>{children}</div>
      </div>
    </div>
  );
}
