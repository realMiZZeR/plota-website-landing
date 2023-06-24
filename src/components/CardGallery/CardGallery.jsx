import {createContext, useEffect, useRef, useState} from 'react'
import CardGalleryInfo from './Info/CardGalleryInfo'
import CardGalleryItem from './Item/CardGalleryItem'
import styles from './CardGallery.module.scss'
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import {getWindowBreakpoint} from "@/assets/scripts/getWindowBreakpoint";

export const CardContext = createContext()

const CardGallery = ({ title, cards = [] }) => {

  // Reference to swiper component.
  const swiperRef = useRef()

  const [slidesPerView, setSlidesPerView] = useState(4)
  const [spaceBetweenSlides, setSpaceBetweenSlides] = useState(50)
  const [currentCard, setCurrentCard] = useState({title: '', description: '', text: ''})
  const [showInfo, setShowInfo] = useState(false)

  // Slides per view by screen resolution.
  const handleWindowResize = () => {
    let windowWidth = window.innerWidth
    let breakpoint = getWindowBreakpoint(windowWidth)

    switch (breakpoint) {
      case 'sm':
        setSpaceBetweenSlides(10)
        setSlidesPerView(1)
        break
      case 'md':
        setSpaceBetweenSlides(20)
        setSlidesPerView(1.5)
        break
      case 'lg':
        setSpaceBetweenSlides(20)
        setSlidesPerView(3)
        break
      case 'xl':
        setSpaceBetweenSlides(50)
        setSlidesPerView(4)
        break
    }
  }

  useEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <article className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h2 className={styles.title}>{ title }</h2>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={() => swiperRef.current.slidePrev()}>
              <svg width="18" height="14" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 13.5L17 7M17 7L10.5 0.5M17 7H1" stroke="#333333" strokeLinecap="round"/>
              </svg>
            </button>
            <button className={styles.button} onClick={() => swiperRef.current.slideNext()}>
              <svg width="18" height="14" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 13.5L17 7M17 7L10.5 0.5M17 7H1" stroke="#333333" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        <CardContext.Provider value={{setCurrentCard, setShowInfo, showInfo}}>
          <Swiper
            spaceBetween={spaceBetweenSlides}
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: false }}
            onSwiper={swiper => swiperRef.current = swiper}
          >

            {cards.map(card => (
              <SwiperSlide key={card.id} className={styles.slideItem}>
                <CardGalleryItem
                  title={card.title}
                  description={card.description}
                  text={card.text}
                  imageSrc={card.imageSrc}
                />
              </SwiperSlide>
            ))}
          </Swiper>
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