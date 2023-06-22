import styles from './TextDescription.module.scss'

const TextDescription = ({ title, description, pretitle, order, wrapperClassName = '', descriptionClassName = '' }) => {

  return (
    <div className={`${styles.wrapper} ${wrapperClassName}`}>
      <p className={styles.head}>
        {pretitle && <span className={styles.headItem}>{pretitle}</span>}
        {order && <span className={styles.headItem}>/0{order}</span>}
      </p>
      { title && <h3 className={styles.title}>{title}</h3> }
      <p className={`${styles.description} ${descriptionClassName}`}>{description}</p>
    </div>
  )
}

export default TextDescription