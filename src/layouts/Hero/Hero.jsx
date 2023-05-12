import Image from 'next/image';

import triangle from '@/assets/images/hero-triangle.svg';
import noBodyTriangle from '@/assets/images/hero-triangle-no-body.svg';
import styles from './hero.module.scss'

const Hero = ({ title, textInversed = false, hasDecorations = false }) => {

  return (
    <article className={`${styles.content} ${textInversed ? styles.textInversed : ''}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>{ title }</h2>
      </div>
      <div className={`${hasDecorations ? styles.decorations : ''}`}>
        <Image src={triangle} alt="" />
        <Image src={noBodyTriangle} alt="" />
        <Image src={noBodyTriangle} alt="" />
      </div>
    </article>
  )
}

export default Hero;