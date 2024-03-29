import styles from './activitySection.module.scss'

const ActivitySection = ({ title, desciption, imageSrc, imageAlt }) => {

  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <h4 className={styles.title}>{ title }</h4>
        <p className={styles.description}>{ desciption }</p>
      </div>
      <div className={styles.image}>
        {/* <Image src={imageSrc} alt={imageAlt} /> */}
      </div>
  </section>
  );
}

export default ActivitySection;