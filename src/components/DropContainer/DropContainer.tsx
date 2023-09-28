import React from 'react'
import styles from './DropContainer.module.scss'
import { useDrop } from 'react-dnd'
import { Status } from '../../types/types'

interface Props {
  children: React.ReactNode,
  handleDrop: (taskId: number,  status: Status) => void,
  status: Status
}

export default function DropContainer({children, status, handleDrop}: Props) {

  const [{ isOver, }, drop] = useDrop(
    () => ({
      accept: 'task',
      drop: (item: {id: number}) => {
        handleDrop(item.id, status)
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    })
  )

  return (
    <div className={styles.container} ref={drop}>
      {children}
    </div>
  )
}
