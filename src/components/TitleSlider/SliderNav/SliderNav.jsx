import styles from './sliderNav.module.scss'

const SliderNav = ({setCurrentSlide, currentSlide, isAnimating, scrollDirection}) => {
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
            title: 'Individual approach',
        },
        {
            id: 4,
            title: 'Qualified tutors',
        },
        {
            id: 5,
            title: 'Individual approach',
        },
    ]

    return (
        <div className={styles.nav}>
            <div className={styles.titles}>
                {titles.map(({id, title}, index) => <div
                    className={`${styles.row} ${currentSlide === index ? styles.active : ''}`} key={id}
                    onClick={() => setCurrentSlide(index)}>
                    <div
                        className={`${styles.circle} ${currentSlide === index ? styles.active : ''}`}
                    >
                    </div>
                    <h4 className={`${styles.title} ${currentSlide === index ? styles.active : ''}`}
                    >{title}</h4>
                </div>)}
            </div>
        </div>
    )
}

export default SliderNav