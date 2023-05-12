import { createContext, useRef, useState } from 'react'
import CardGalleryInfo from './Info/CardGalleryInfo'
import CardGalleryItem from './Item/CardGalleryItem'
import styles from './cardGallery.module.scss'

export const CardContext = createContext();

const CardGallery = ({ title, cards = [] }) => {

  const [currentCard, setCurrentCard] = useState({title: '', description: '', text: ''})
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h2 className={styles.title}>{ title }</h2>
          <div className={styles.buttons}>
            <button className={styles.button}>
              <svg width="18" height="14" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 13.5L17 7M17 7L10.5 0.5M17 7H1" stroke="#333333" strokeLinecap="round"/>
              </svg>
            </button>
            <button className={styles.button}>
              <svg width="18" height="14" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 13.5L17 7M17 7L10.5 0.5M17 7H1" stroke="#333333" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        <CardContext.Provider value={{setCurrentCard, showInfo, setShowInfo}}>
          <div className={styles.slider}>
            {cards.map(card => (
              <CardGalleryItem
                key={card.id}
                title={card.title}
                description={card.description}
                text={card.text}
                imageSrc={card.imageSrc}
              />
            ))}
          </div>
          <CardGalleryInfo
            title={currentCard.title}
            description={currentCard.description}
            text={currentCard.text}
          />
        </CardContext.Provider>
      </div>

    </article>
  )
}

export default CardGallery