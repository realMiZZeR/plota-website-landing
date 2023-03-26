import Image from 'next/image';

import triangle from '@/assets/images/hero-triangle.svg';
import noBodyTriangle from '@/assets/images/hero-triangle-no-body.svg';
import styles from './hero.module.scss'

const Hero = () => {

  return (
    <article className={styles.content}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          E-education for <br /> 
          corporate clients
        </h2>
      </div>

      <div className={styles.decorations}>
          <Image src={triangle} alt="" />
          <Image src={noBodyTriangle} alt="" />
          <Image src={noBodyTriangle} alt="" />
      </div>
    </article>
  )
}

export default Hero;