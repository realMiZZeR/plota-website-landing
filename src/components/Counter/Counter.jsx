import { InView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import styles from './Counter.module.scss'

const Counter = ({ reachNumber = 0, countDelay = 10, description = '' }) => {

  // Observe component.
  const [observed, setObserved] = useState(false)
  const [observedClass, setObservedClass] = useState('')

  const getObservedClass = () => observed ? styles.observed : ''

  useEffect(() => {
    setObservedClass(getObservedClass())
  }, [observed]);

  const handleInView = (inView, entry) => {
    setObserved(inView)
  }

  // Counter.
  const [number, setNumber] = useState(0)

  useEffect(() => {
    if (!observed) return

    const interval = setInterval(() => {
      setNumber(prev => {
        let number = prev + 1
        if (number >= reachNumber) number = reachNumber

        return number
      })
    }, countDelay)

    if (number >= reachNumber) clearInterval(interval)

    return () => {
      clearInterval(interval)
    }
  }, [number, observed])

  return (
    <InView threshold={0.1} className={`${styles.wrapper} ${observedClass}`} onChange={handleInView}>
      <strong className={`${styles.number} ${observedClass}`}>{ number }</strong>
      <p className={`${styles.description} ${observedClass}`}>{ description }</p>
    </InView>
  )
}

export default Counter