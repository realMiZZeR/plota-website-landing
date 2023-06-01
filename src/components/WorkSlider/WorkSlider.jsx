import TextDescription from '../TextDescription/TextDescription'
import Slide from './Slide/Slide'
import styles from './workSlider.module.scss'
import { InView } from 'react-intersection-observer'
import { useState, useEffect, useCallback } from 'react'

const WorkSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [blockScroll, setBlockScroll] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('down')

  const slides = [
    {
      id: 1,
      title: 'Wissen & Lernen',
      text: 'Wenn Wissensmanagement nicht strategisch geplant und an den jeweiligen Reifegrad von Organisationen angepasst wird, kann dies deren Existenz gefährden.Wir begreifen Lernen als Performance Support und unterstützen dabei, Wissen entsprechend dem individuellen Bedarf verfügbar zu machen.',
    },
    {
      id: 2,
      title: 'Change-managemen',
      text: 'Organisationsentwicklung und Personalentwick-lung sollten als zwei Seiten derselben Medaille betrachtet und gestaltet werden.Erfolgreiche Veränderung passiert nicht von allein, sondern muss geplant und begleitet werden.Wir sorgen dafür, dass Veränderungsprozesse strategisch aufgesetzt und durchgeführt werden.',
    },
    {
      id: 3,
      title: 'Collaboration',
      text: 'Aktiv gestaltete Kommunikationsprozesse sehen wir als Grundlage einer erfolgreichen Zusammen-arbeit.Denn wirksam gestaltete Kommunikation reduziert die Komplexität und hilft dabei, den Fokus auf das Wichtige zu legen.Agile Zusammenarbeit fördert dabei nicht nur die Ressourcenaktivierung, sondern auch die Entwicklung nachhaltig erfolg-reicher Prozesse.',
    },
    {
      id: 4,
      title: 'Person',
      text: 'Im Fokus unserer ganzheitlichen Betrachtung steht der Mensch – die gezielte Förderung und Weiterentwicklung seiner Potenziale und Kompeten- zen ist Schlüsselelement organisationalen Erfolgs und individueller Zufriedenheit.',
    },
  ]

  const handleIntersection = (entry) => {
    setBlockScroll(entry)
  }

  const handleScroll = useCallback(
    (event) => {
      if (blockScroll) {
        event.preventDefault()

        const delta = Math.sign(event.deltaY)

        setCurrentSlide((prevSlide) => {
          if (delta < 0 && prevSlide > 0) {
            setIsAnimating(true)
            setScrollDirection('up')
            return prevSlide - 1
          } else if (delta > 0 && prevSlide < slides.length - 1) {
            setIsAnimating(true)
            setScrollDirection('down')
            return prevSlide + 1
          }

          if (prevSlide === 0 || prevSlide === slides.length - 1) {
            setBlockScroll(false)
          }

          return prevSlide
        })

        setTimeout(() => {
          setIsAnimating(false)
        }, 300)
      }
    },
    [blockScroll, slides.length],
  )

  useEffect(() => {
    if (blockScroll) {
      window.addEventListener('wheel', handleScroll, { passive: false })
    } else {
      window.removeEventListener('wheel', handleScroll)
    }

    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [handleScroll, blockScroll])

  return (
    <InView threshold={0.3} onChange={handleIntersection}>
      <article className={styles.wrapper}>
        <div className={styles.container}>
          <TextDescription
            description={'Only an integrated approach achieves the desired results'}
            order={2}
            pretitle={'Approach to work'}
            className={styles.text}
          />
          <div className={styles.slides}>
            {slides.map(({ id, title, text }, index) => (
              <Slide
                key={id}
                title={title}
                text={text}
                isCurrent={index === currentSlide}
                isAnimating={isAnimating}
                scrollDirection={scrollDirection}
              />
            ))}
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.counter}>
            <span>{currentSlide + 1}</span> / <span>{slides.length}</span>
          </div>
        </div>
      </article>
    </InView>
  )
}

export default WorkSlider
