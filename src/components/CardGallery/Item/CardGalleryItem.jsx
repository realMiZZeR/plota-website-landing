import { useContext } from 'react';
import { CardContext } from '../CardGallery';
import Image from 'node_modules/next/image';
import styles from './cardGalleryItem.module.scss'

const CardGalleryItem = ({ className, imageSrc, title, description, text }) => {

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