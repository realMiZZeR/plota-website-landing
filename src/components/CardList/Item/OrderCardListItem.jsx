import styles from './OrderCardListItem.module.scss'

const OrderCardListItem = ({ order, title, description }) => {

  return (
    <div className={styles.wrapper}>
      <span className={styles.order}>{ order }</span>
      <h3 className={styles.title}>{ title }</h3>
      <p className={styles.description}>{ description }</p>
    </div>
  )
}

export default OrderCardListItem;