import styles from './sliderNav.module.scss'

// переделать верстку линий так, чтобы высота высчитывалась автоматически, вне зависимости от высоты и позиции контента по индексу

// решить проблему с длинными заголовками

// сделать анимацию перетекания цвета линии от слайда к слайду

const SliderNav = ({setCurrentSlide, currentSlide}) => {
    const titles = [
        {
            id: 1,
            title: 'Qualified tutors',
        },
        {
            id: 2,
            title: 'Easy learning ',
        },
        {
            id: 3,
            title: 'Qualified tutors',
        },
        {
            id: 4,
            title: 'Qualified tutors',
        },
        {
            id: 5,
            title: 'Easy learning',
        },
    ]

    return (
        <div className={styles.nav}>
            <div className={styles.titles}>
                {titles.map(({id, title}, index) => <div className={styles.row} key={id}
                                                         onClick={() => setCurrentSlide(index)}>
                    <div
                        className={`${styles.circle} ${styles.line} ${currentSlide === index ? styles.active : ''} ${index === titles.length - 1 ? styles.last : ''} ${index === 0 ? styles.first : ''}`}
                    >
                        {/*{index < titles.length - 1 ? <div*/}
                        {/*    className={`${styles.line} ${currentSlide === index ? styles.active : ''}`}></div> : <></>}*/}
                    </div>
                    <h4 className={`${styles.title} ${currentSlide === index ? styles.active : ''}`}
                    >{title}</h4>
                </div>)}
            </div>
        </div>
    )
}

export default SliderNav