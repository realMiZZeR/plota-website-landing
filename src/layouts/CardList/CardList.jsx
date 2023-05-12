import ValueCard from './Item/CardListItem';
import styles from './cardList.module.scss'

const CardList = ({ className, title, items = [] }) => {

  return (
    <article className={`${styles.wrapper} ${className}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>{ title }</h2>
        <div className={styles.content}>
          {items.map(item => (
            <ValueCard
              key={Date.now()}
              order={item.order}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </article>
  )
}

export default CardList;