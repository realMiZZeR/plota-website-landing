import Image from 'next/image';
import Header from '@/components/Header';
import Stats from '@/components/Stats';

import customerLogo from '@/assets/images/customer-logo.png';
import styles from './about.module.scss';

const About = () => {
  return (
    <article className={styles.wrapper}>
      <Header isAlternative={false} />

      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.info}>
            <h3 className={styles.title}>About Us</h3>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
          </div>

          <div className={styles.gallery}>
            <Image src={customerLogo} alt="Customer Logo" />
            <Image src={customerLogo} alt="Customer Logo" />
            <Image src={customerLogo} alt="Customer Logo" />
            <Image src={customerLogo} alt="Customer Logo" />
            <Image src={customerLogo} alt="Customer Logo" />
            <Image src={customerLogo} alt="Customer Logo" />
          </div>
        </div>

        <Stats />
      </div>

    </article>
  )
}

export default About;