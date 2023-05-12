import SimpleListItem from './Item/SimpleListItem';
import styles from './simpleList.module.scss'

const SimpleList = ({ title, items = [] }) => {

  return (
    <article className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>{ title }</h2>
        <div className={styles.list}>
          {items.map(item => (
            <SimpleListItem
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              imageAlt={item.title}
            />
          ))}
        </div>
      </div>
    </article>
  )
}

export default SimpleList;