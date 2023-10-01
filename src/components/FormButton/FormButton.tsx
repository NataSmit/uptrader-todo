import React from 'react'
import styles from './FormButton.module.scss'

interface Props {
  text: string,
  clickHandler?: () => void,
  type?: 'button' | 'submit' | 'reset'
} 

export default function FormButton({text, clickHandler, type}: Props) {
  
  return (
    <button className={styles.formButton} onClick={clickHandler} type={type}>{text}</button>
  )
}
