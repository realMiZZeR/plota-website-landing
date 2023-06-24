import { useContext } from 'react';
import { CardContext } from '../CardGallery';
import Image from 'node_modules/next/image';
import styles from './CardGalleryItem.module.scss'

const CardGalleryItem = ({ imageSrc, title, description, text, className = '' }) => {

  const {setCurrentCard, setShowInfo} = useContext(CardContext)

  const handleClick = () => {
    setCurrentCard({title, description, text})
    setShowInfo(true)
  }

  return (
    <div onClick={handleClick} className={`${styles.wrapper} ${className}`}>
      <div className={styles.image}>
        {imageSrc && <Image src={imageSrc} alt='' />}
      </div>
      <strong className={styles.title}>{ title }</strong>
      <p className={styles.description}>{ description }</p>
    </div>
  )
}

export default CardGalleryItem;