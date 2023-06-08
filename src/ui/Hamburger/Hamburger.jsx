import styles from './Hamburger.module.scss'
import {useEffect, useState} from "react";

const Hamburger = ({ onClick }) => {

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(prev => !prev)
    onClick()
  }

  return (
    <div className={`${styles.icon} ${isActive ? styles.active : ''}`} onClick={handleClick}>
      <span className={styles.rect}></span>
    </div>
  )
}

export default Hamburger;