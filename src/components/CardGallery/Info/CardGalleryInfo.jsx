import { useContext } from 'react';
import styles from './cardGalleryInfo.module.scss'
import { CardContext } from '../CardGallery';

const CardGalleryInfo = ({ title, description, text }) => {

  const { showInfo, setShowInfo } = useContext(CardContext)

  return (
    <div className={`${styles.wrapper} ${showInfo ? styles.active : styles.disabled}`}>
      <div className={styles.blackover} onClick={() => setShowInfo(false)} />
      <div className={styles.content}>
        <button className={styles.button} onClick={() => setShowInfo(false)}>
          <svg width="18" height="14" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 13.5L17 7M17 7L10.5 0.5M17 7H1" stroke="#333333" strokeLinecap="round"/>
          </svg>
        </button>
        <strong className={styles.title}>{ title }</strong>
        <p className={styles.description}>{ description }</p>
        <p className={styles.text}>{ text }</p>
      </div>
    </div>
  )
}

export default CardGalleryInfo;