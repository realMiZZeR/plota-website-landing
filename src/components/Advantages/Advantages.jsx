import AdvantagesItem from './Item/AdvantagesItem';
import styles from './advantages.module.scss'

const Advantages = () => {

  return (
    <article className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Advantages</h2>
        <div className={styles.list}>
          <AdvantagesItem
            title={'Easy Learning Format'}
            description={'Organisationsentwicklung und Personalentwicklung sollten als zwei Seiten derselben Medaille betrachtet und gestaltet werden.Erfolgreiche'}
            imageSrc={``}
            imageAlt={``}
          />
          <AdvantagesItem
            title={'Individual Approach'}
            description={'Organisationsentwicklung und Personalentwicklung sollten als zwei Seiten derselben Medaille betrachtet und gestaltet'}
            imageSrc={``}
            imageAlt={``}
          />
          <AdvantagesItem
            title={'Qualified Tutors'}
            description={'Organisationsentwicklung und Personalentwicklung sollten als zwei Seiten derselben Medaille betrachtet und gestaltet werden.Erfolgreiche Veränderung'}
            imageSrc={``}
            imageAlt={``}
          />
        </div>
      </div>
    </article>
  )
}

export default Advantages;