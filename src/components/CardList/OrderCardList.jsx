import OrderCardListItem from './Item/OrderCardListItem';
import styles from './OrderCardList.module.scss'

const OrderCardList = ({ className, title, items = [] }) => {

  return (
    <article className={`${styles.wrapper} ${className}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>{ title }</h2>
        <div className={styles.content}>
          {items.map(item => (
            <OrderCardListItem
              key={item.id}
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

export default OrderCardList;