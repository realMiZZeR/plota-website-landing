import Image from 'node_modules/next/image'
import styles from './simpleListItem.module.scss'

const SimpleListItem = ({ title, description, imageSrc, imageAlt }) => {

  return (
    <section className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={imageSrc} alt={imageAlt} />
      </div>
      <h3 className={styles.title}>{ title }</h3>
      <p className={styles.description}>{ description }</p>
    </section>
  )
}

export default SimpleListItem