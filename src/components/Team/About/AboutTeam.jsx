import Image from 'node_modules/next/image';
import Link from 'node_modules/next/link';
import styles from './aboutTeam.module.scss'

const AboutTeam = () => {

  return (
    <article className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src={``} alt={``} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>Our Team</h2>
          <p className={styles.description}>The Plot-A is a hybrid work format. For example, the branding team is almost all in Estonia and meets on Wednesdays and Fridays at the office. The digital entertainment team is the opposite - almost all online and scattered across countries and cities.</p>
          <Link href={'#'} className={styles.link}>Whole team</Link>
        </div>
      </div>
    </article>
  )
}

export default AboutTeam;