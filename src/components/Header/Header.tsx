import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to='/' className={styles.link}><p className={styles.logo}>LOGO</p></Link>
      </div>
    </header>
  )
}
