import React from 'react'
import styles from './Buton.module.scss'

interface Props {
  text: string,
  clickHandler: () => void
}

export default function Button({text, clickHandler}: Props) {
  return (
    <button className={styles.button} onClick={clickHandler}>{text}</button>
  )
}
