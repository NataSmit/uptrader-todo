import React, { useState } from 'react'
import Modal from '../../Modal/Modal'
import styles from './TaskDetailsModal.module.scss'
import { Task } from '../../../types/types'
import FormButton from '../../FormButton/FormButton'

interface Props {
  task: Task,
  isTaskModalOpen: boolean,
  closeTaskModal: () => void
}

export default function TaskDetailsModal({task, isTaskModalOpen, closeTaskModal}: Props) {
  
  return (
    <Modal isOpen={isTaskModalOpen}>
      <div className={styles.taskDetails}>
        <p className={styles.info}><span>Title:</span> {task.title}</p>
        <p className={styles.info}><span>Description: </span>{task.description}</p>
        <p className={styles.info}><span>Number: </span>{task.number}</p>
        <p className={styles.info}><span>Creation Date: </span>{task.creationDate}</p>
        <p className={styles.info}><span>Working time: </span>{task.workingTime}</p>
        <p className={styles.info}><span>Due date: </span>{task.dueDate}</p>
        <p className={styles.info}><span>Priority: </span>{task.priority}</p>
        <p className={styles.info}><span>Status: </span>{task.status}</p>
        <FormButton text={'Close window'} clickHandler={closeTaskModal}/>
      </div>
    </Modal>
  )
}
