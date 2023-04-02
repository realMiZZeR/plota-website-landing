import { useState } from 'react';
import Link from 'node_modules/next/link';

import styles from './vacancy.module.scss'

const Vacancy = ({ title, description, location, linkHref, linkName }) => {
  
  const [isOpened, setIsOpened] = useState(false)

  const arrowClickHandler = () => setIsOpened(prev => !prev)

  return (
    <section className={`${styles.vacancy} ${isOpened ? styles.active : ''}`}>
      <div className={styles.head}>
        <h3 className={styles.title}>{ title }</h3>
        <button onClick={arrowClickHandler} className={styles.arrow}>
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 13.5L17 7M17 7L10.5 0.5M17 7H1" stroke="#333333" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <div className={`${styles.content}`}>
        <p className={styles.description}>{ description }</p>
        <div className={styles.footer}>
          <strong className={styles.location}>Location: { location }</strong>
          <Link className={styles.link} href={linkHref}>{ linkName }</Link>
        </div>
      </div>
    </section>
  )
}

export default Vacancy;