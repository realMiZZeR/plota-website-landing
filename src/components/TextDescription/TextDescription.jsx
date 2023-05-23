import styles from './TextDescription.module.scss'

const TextDescription = ({ title, description, pretitle, order, className = '' }) => {

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <p className={styles.head}>
        {pretitle && <span className={styles.headItem}>{pretitle}</span>}
        {order && <span className={styles.headItem}>/0{order}</span>}
      </p>
      { title && <h3 className={styles.title}>{title}</h3> }
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default TextDescription