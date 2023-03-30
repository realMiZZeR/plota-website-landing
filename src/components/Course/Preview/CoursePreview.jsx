import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './coursePreview.module.scss';
import Background from '@/assets/images/hero-background.png';

const CoursePreview = ({ title, tag, imageSrc, imageAlt }) => {

  return (
    <section 
      className={styles.wrapper}
    >
      <div className={styles.imagePreview}>
        <Image src={imageSrc} alt={imageAlt} />
      </div>
      <strong className={styles.tag}>{ tag }</strong>
      <h4 className={styles.title}>{ title }</h4>   
      <div className={styles.background}>
        <Image src={Background} alt='' />
      </div>   
    </section>
  )
}

export default CoursePreview;