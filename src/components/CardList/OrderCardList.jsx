import 'swiper/css';
import styles from './OrderCardList.module.scss'
import {createBreakpointObject, useSwiperResize} from "@/hooks/useSwiperResize";
import {Swiper, SwiperSlide} from "swiper/react";
import OrderCardListItem from './Item/OrderCardListItem';

const OrderCardList = ({ title, className = '', items = [] }) => {

  // Adaptive Swiper.
  const viewBreakpoints = createBreakpointObject(1.1, 1.8, 2, 3)
  const spaceBreakpoints = createBreakpointObject(10, 20, 20, 50)
  const { slidesPerView, spaceBetweenSlides } = useSwiperResize(viewBreakpoints, spaceBreakpoints);

  return (
    <article className={`${styles.wrapper} ${className}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>{ title }</h2>
        <Swiper
          className={styles.slider}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetweenSlides}
          slideNextClass={styles.slideNext}
        >
          {items.map(item => (
            <SwiperSlide key={item.id} className={styles.sliderItem}>
              <OrderCardListItem
                order={item.order}
                title={item.title}
                description={item.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  )
}

export default OrderCardList;