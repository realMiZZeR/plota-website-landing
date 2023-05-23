import styles from './Customers.module.scss'
import TextDescription from '../TextDescription/TextDescription'

const Customers = () => {

  return (
    <article className={styles.wrapper}>
      <div className={styles.container}>
        <TextDescription
          title={'Lorem ipsum dolor'}
          description={'Lorem ipsum dolor sit amet, consectetuer adipis-cing elit. Aenean commodo ligula eget dolor. '}
          pretitle={'our customers'}
          className={styles.text}
         />
      </div>
    </article>
  )
}

export default Customers