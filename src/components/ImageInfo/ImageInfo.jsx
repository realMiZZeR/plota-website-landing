import Image from "node_modules/next/image";

import styles from './imageInfo.module.scss'

const ImageInfo = ({ title, sentences = [], className = '', imageClassName = '', imageSrc = '', imageAlt = '' }) => {

  return (
    <article className={`${styles.wrapper} ${className}`}>
      <div className={styles.container}>
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