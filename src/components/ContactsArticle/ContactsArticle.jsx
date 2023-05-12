import Link from 'node_modules/next/link';
import styles from './contactsArticle.module.scss'
import ContactsForm from '../ContactsForm/ContactsForm';

const ContactsAritcle = () => {


  return (
    <article className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.hint}>Let us know how we can reach you and we'll respond as soon as possible.</p>
          <div className={styles.info}>
            <Link className={styles.infoItem} href={`mailto:Agentur@ontron.de`}>Agentur@ontron.de</Link>
            <address className={styles.infoItem}>
              Mustakivi Tee 25-623,<br />13912 Tallinn<br />Estland
            </address>
            <Link className={styles.infoItem} href={`tel:+37253651337`}>+37253651337</Link>
          </div>
        </div>
        <ContactsForm />
      </div>
    </article>
  )
}

export default ContactsAritcle;