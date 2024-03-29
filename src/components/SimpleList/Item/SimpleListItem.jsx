import Image from 'node_modules/next/image'
import styles from './SimpleListItem.module.scss'

const SimpleListItem = ({ title, description, imageSrc = '', imageAlt = '' }) => {

  return (
    <section className={styles.wrapper}>
      <div className={styles.image}>
        { imageSrc && <Image src={imageSrc} alt={imageAlt} /> }
      </div>
      <h3 className={styles.title}>{ title }</h3>
      <p className={styles.description}>{ description }</p>
    </section>
  )
}

export default SimpleListItem