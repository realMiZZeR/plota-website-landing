import styles from './FullscreenMenu.module.scss'
import Link from "next/link";
import SocialLink from "@/ui/SocialLink/SocialLink";
import LinkedInIcon from "@/assets/images/socials/linkedin.svg"
import {useRouter} from "next/router";

const links = [
  {id: 1, title: 'Homepage', href: '/'},
  {id: 2, title: 'Our team', href: '/team'},
  {id: 3, title: 'Career', href: '/career'},
  {id: 4, title: 'Contact', href: '/contacts'},
]

const FullscreenMenu = ({ isActive = false }) => {

  const router = useRouter()

  const getActiveLink = (href) => {

    if (href === router.pathname) {
      return `${styles.link} ${styles.active}`
    }

    return styles.link
  }

  return (
    <div className={`${styles.wrapper} ${isActive ? styles.active : ''}`}>
      <div className={styles.info}>
        <span className={styles.lang}>eng</span> {/* todo: language component */}
        <address className={styles.address}>
          <p>Mustakivi Tee 25-623,</p>
          <p>13912 Tallinn</p>
          <p>Estland</p>
        </address>
        <SocialLink link={'/'} imageSrc={LinkedInIcon} />
      </div>
      <nav className={styles.nav}>
        {links.map(link => (
          <Link className={getActiveLink(link.href)} key={link.id} href={link.href}>
            <h2 className={styles.title}>{ link.title }</h2>
            <span className={styles.order}>/0{ link.id }</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default FullscreenMenu;