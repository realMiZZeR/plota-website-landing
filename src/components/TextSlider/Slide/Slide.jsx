import styles from './slide.module.scss'

const Slide = ({title, text, isCurrent, isAnimating, scrollDirection, className}) => {
    const slideClass = `${styles.slide} ${className ? styles[className] : ''}${isCurrent ? ` ${styles.current}` : ''}${
        isAnimating
            ? scrollDirection === 'down'
                ? isCurrent
                    ? ` ${styles['animating-next-top']}`
                    : ` ${styles['animating-prev-bottom']}`
                : isCurrent
                    ? ` ${styles['animating-next-bottom']}`
                    : ` ${styles['animating-prev-top']}`
            : ''
    }`

    return (
        <div className={slideClass}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default Slide
