import Image from "node_modules/next/image";

import styles from './ImageInfo.module.scss'

const ImageInfo = ({ title, sentences = [], imageSrc = '', imageAlt = '', className = '', containerClassName = '', imageClassName = '' }) => {

  return (
    <article className={`${styles.wrapper} ${className}`}>
      <div className={`${styles.container} ${containerClassName}`}>
        <div className={`${styles.image} ${imageClassName}`}>
          {imageSrc && <Image src={imageSrc} alt={imageAlt} />}
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          {sentences.map((sentence, index) => (
            <p key={index} className={styles.description}>{sentence}</p>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ImageInfo;