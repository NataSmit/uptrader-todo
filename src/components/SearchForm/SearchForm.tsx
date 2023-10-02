import React, {useState, ChangeEvent, FormEvent} from 'react'
import styles from './SearchForm.module.scss'
import FormButton from '../FormButton/FormButton'

interface Props {
  filterTasks: (title: string, number: number) => void,
  setFiltered: (arg: boolean) => void
}

export default function SearchForm({filterTasks, setFiltered}: Props) {
  const [title, setTitle] = useState('')
  const [number, setNumber] = useState('')
  
  function handleNumberChange(e: ChangeEvent<HTMLInputElement>) {
    setNumber(e.target.value)
  }

  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value)
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault()
    filterTasks(title, Number(number))
    setFiltered(true)
  }

  function handleShowAll() {
    setFiltered(false)
  } 

  return (
    <form className={styles.searchForm} onSubmit={handleFormSubmit}>
      <input className={styles.input} value={title} onChange={handleTitleChange} placeholder='search by title'/>
      <input className={styles.input} value={number} onChange={handleNumberChange} placeholder='search by number'/>
      <button className={styles.searchBtn}>Search</button>
      <button className={styles.searchBtn} type='button' onClick={handleShowAll}>Show all tasks</button>
    </form>
  )
}
