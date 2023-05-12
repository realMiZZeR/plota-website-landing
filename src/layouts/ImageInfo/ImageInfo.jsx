import Image from "node_modules/next/image";

import styles from './imageInfo.module.scss'

const ImageInfo = ({ className = '', title, sentences = [], imageSrc, imageAlt }) => {

  return (
    <article className={`${styles.wrapper} ${className}`}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src={imageSrc} alt={imageAlt} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          {sentences.map(sentence => (
            <p key={Date.now} className={styles.description}>{sentence}</p>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ImageInfo;