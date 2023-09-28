import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import FormButton from '../FormButton/FormButton'
import styles from './ProjectForm.module.scss'

interface Props {
  isProjectFormOpen: boolean,
  closeProjectForm: () => void
}

export default function ProjectForm({isProjectFormOpen, closeProjectForm}: Props) {

  return (
    <Modal isOpen={isProjectFormOpen}>
      <form className={styles.projectForm}>
        <input className={styles.input} placeholder='Project name...'/>
        <FormButton text={'Save'} />
        <FormButton text={'Close window'} type={'button'} clickHandler={closeProjectForm}/>
      </form>

    </Modal>
  )
}
