import styles from './SocialLink.module.scss'
import Link from "next/link";
import Image from "next/image";

const SocialLink = ({ link, imageSrc }) => {

  return (
    <Link href={link} className={styles.item}>
      <Image src={imageSrc} alt={''} />
    </Link>
  )
}

export default SocialLink