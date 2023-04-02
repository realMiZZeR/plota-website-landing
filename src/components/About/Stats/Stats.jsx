
import styles from './stats.module.scss'

const Stats = () => {
  

  return (
    <article className={styles.wrapper}>
      <div className={styles.item}>
        <h3 className={styles.title}>12k+</h3>
        <p className={styles.description}>Fresh Graduates</p>
      </div>
      <div className={styles.item}>
        <h3 className={styles.title}>9k+</h3>
        <p className={styles.description}>Years of Experience</p>
      </div>
      <div className={styles.item}>
        <h3 className={styles.title}>358+</h3>
        <p className={styles.description}>Brand Partners</p>
      </div>
      <div className={styles.item}>
        <h3 className={styles.title}>46+</h3>
        <p className={styles.description}>Brand Partners</p>
      </div>
    </article>
  )
}

export default Stats;