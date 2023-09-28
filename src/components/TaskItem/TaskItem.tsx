import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './TaskItem.module.scss'
import { Task } from '../../types/types'

interface Props {
  task: Task
}

export default function TaskItem({task}: Props) {

  const [{isDragging}, drag] = useDrag(() => ({
    type: 'task',
    item: {id: task.id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div className={styles.task} ref={drag}>
      <div className={styles.container}>
        <p className={styles.title}>{task.title}</p>
        <p>Prio: {task.priority}</p>
        <p>Status: {task.status}</p>
      </div>
    </div>
  )
}
