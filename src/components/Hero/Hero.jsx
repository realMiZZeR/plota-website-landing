import Image from 'next/image';
import styles from './hero.module.scss'

import triangles from '@/assets/images/triangles.svg';

const Hero = ({ title, textInversed = false, hasDecorations = false }) => {

  return (
    <article className={`${styles.content} ${textInversed ? styles.textInversed : ''}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>{ title }</h2>
      </div>
      {hasDecorations && 
      <div className={styles.decorations}>
        <div className={styles.triangles}>
          <Image src={triangles} alt='' />
        </div>
      </div>}
    </article>
  )
}

export default Hero;