import React from 'react'
import styles from '../styles/header.module.css'

export default function Header() {
  /*
  return (
    <div className={ styles.header }>
        <button className={ styles.title }>save</button>
    </div>
  )
  */

  return (
    <div className={ styles.header }>
      <div className={ styles.title }>My Note App</div>
    </div>
  );
}
