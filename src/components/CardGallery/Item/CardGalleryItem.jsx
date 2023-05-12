import Image from 'node_modules/next/image';
import styles from './cardGalleryItem.module.scss'
import { useContext } from 'react';
import { CardContext } from '../CardGallery';

const CardGalleryItem = ({ className, imageSrc, title, description, text }) => {

  const { setCurrentCard, setShowInfo } = useContext(CardContext);

  const handleCardClick = () => {
    setCurrentCard({title, description, text});
    setShowInfo(true);
  }

  return (
    <div onClick={handleCardClick} className={`${styles.wrapper} ${className}`}>
      <div className={styles.image}>
        <Image src={imageSrc} alt='' />
      </div>
      <strong className={styles.title}>{ title }</strong>
      <p className={styles.description}>{ description }</p>
    </div>
  )
}

export default CardGalleryItem;