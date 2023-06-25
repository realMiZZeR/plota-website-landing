import styles from './SimpleList.module.scss'
import 'swiper/swiper.css'

import SimpleListItem from './Item/SimpleListItem';
import {createBreakpointObject, useSwiperResize} from "@/hooks/useSwiperResize";
import {Swiper, SwiperSlide} from "swiper/react";

const SimpleList = ({ title, items = [] }) => {

  // Adaptive Swiper.

  const viewBreakpoints = createBreakpointObject(1.1, 1.9, 3,3)
  const spaceBreakpoints = createBreakpointObject(15, 30, 40, 50)
  const { slidesPerView, spaceBetweenSlides } = useSwiperResize(viewBreakpoints, spaceBreakpoints)

  return (
    <article className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>{ title }</h2>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetweenSlides}
        >
          {items.map(item => (
            <SwiperSlide key={item.id}>
              <SimpleListItem
                key={item.id}
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                imageAlt={item.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  )
}

export default SimpleList;