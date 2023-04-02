import { useEffect, useState } from "react"
import Link from "next/link"

import styles from "./header.module.scss"

const Header = ({ isAlternative = false }) => {

    const [logoColor, setLogoColor] = useState("black");

    useEffect(() => {
        let color = isAlternative ? "white" : "black"

        setLogoColor(color)
    }, [isAlternative])

    return (
        <header className={`header ${ isAlternative ? styles.alternative : styles.main }`}>
            <div className={styles.container}>
                <h1 className={ styles.logo }>
                    <Link href={"/"}>
                        <svg width="73" height="24" viewBox="0 0 73 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M33.5601 16.4942C30.9722 16.4731 29.2124 14.2153 29.2745 11.9786C29.3366 9.74195 31.2206 7.63186 33.6429 7.71626C35.9203 7.69516 37.9492 9.76305 37.9078 12.1686C37.8664 14.5319 35.8996 16.5153 33.5601 16.4942ZM33.6636 4.42452C29.4609 4.25571 26.169 7.94837 26.0655 11.8309C25.962 15.7135 29.0468 19.6383 33.5394 19.6805C37.618 19.7227 41.034 16.2621 41.0961 12.1686C41.179 7.99057 37.618 4.38232 33.6636 4.42452Z" fill={logoColor}/>
                                    <path d="M47.3071 4.34037V0.5H44.0981V4.34037V4.36147H41.945V7.61101H44.0981V12.0211C44.0981 16.1569 47.6177 19.7018 51.5306 19.6596C51.5513 19.6596 51.5927 19.6596 51.6134 19.6596V16.3679C51.5927 16.3679 51.5927 16.3679 51.572 16.3679C49.3361 16.389 47.3071 14.3844 47.3071 12.0211V7.61101H51.6134V4.36147L47.3071 4.34037Z" fill={logoColor}/>
                                    <path d="M19.9994 0.5H16.7904V12C16.7904 16.1358 20.31 19.6807 24.2229 19.6385C24.2436 19.6385 24.285 19.6385 24.3057 19.6385V16.3679C24.285 16.3679 24.285 16.3679 24.2643 16.3679C22.0284 16.389 19.9994 14.3844 19.9994 12.0211V0.5Z" fill={logoColor}/>
                                    <path d="M7.49461 16.4308C4.90669 16.4097 3.14691 14.1519 3.20902 11.9152C3.27113 9.67847 5.15513 7.56838 7.57742 7.65279C9.85479 7.63168 11.8837 9.69957 11.8423 12.1051C11.8009 14.4684 9.83409 16.4519 7.49461 16.4308ZM7.59813 4.36104C3.39535 4.19223 0.103517 7.8849 0 11.7886C0 11.873 0 11.9574 0 12.0418V23.4996H3.20902V18.2243C4.38911 19.0895 5.83834 19.617 7.47391 19.6381C11.5525 19.6803 14.9685 16.2198 15.0306 12.1262C15.1134 7.9271 11.5525 4.31884 7.59813 4.36104Z" fill={logoColor}/>
                                    <path d="M71.4265 19.5544H57.3897C56.8514 19.5544 56.3338 19.259 56.044 18.7948C55.7541 18.3306 55.7334 17.7397 55.9818 17.2333L62.9382 3.37002C63.2073 2.8425 63.7249 2.50488 64.3253 2.50488H64.346C64.9257 2.50488 65.4433 2.8214 65.7331 3.34892L70.4121 12.1058C70.8261 12.8865 70.5363 13.8572 69.7703 14.2792C69.0042 14.7012 68.0519 14.4058 67.6378 13.6462L64.3874 7.5269L59.9569 16.3682H71.4265C72.2961 16.3682 73 17.0856 73 17.9719C73 18.837 72.2961 19.5544 71.4265 19.5544Z" fill={logoColor == "black" ? "#F0643C" : logoColor}/>
                                </g>
                            <defs>
                                <clipPath id="clip0_4_284">
                                    <rect width="73" height="22.9996" fill="black" transform="translate(0 0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </h1>
                <nav className={styles.nav}>
                    <Link className={styles.link} href="/">Our Team</Link>
                    <Link className={styles.link} href="/">Career</Link>
                    <Link className={styles.link} href="/">Contact</Link>
                    <Link className={styles.link} href="/">
                        <span className={styles.language}>ENG</span> | EST
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header