import {useEffect, useState} from "react"
import Link from "next/link"

import styles from "./Header.module.scss"
import HamburgerHeader from "@/components/Header/HamburgerHeader/HamburgerHeader";
import DefaultHeader from "@/components/Header/DefaultHeader/DefaultHeader";

const Header = ({color = "white"}) => {

  const [isHamburger, setIsHamburger] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  // #F0643C - color of triangle in logo

  const handleHamburgerHeader = (e) => {

  }

  useEffect(() => {

    window.addEventListener('wheel', handleHamburgerHeader, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleHamburgerHeader)
    }
  }, [scrollY])

  return (
    <header className={`header ${styles.wrapper} ${styles[color]}`}>
      <div className={styles.container}>
        {isHamburger
        ? <HamburgerHeader />
        : <DefaultHeader />}
      </div>
    </header>
  )
}

export default Header