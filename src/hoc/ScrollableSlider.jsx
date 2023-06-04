import {useCallback, useEffect, useState} from 'react';
import {InView} from "react-intersection-observer";

const ScrollableSlider = (WrappedComponent, slides) => {
    const SliderComponent = () => {
        const [currentSlide, setCurrentSlide] = useState(0)
        const [isAnimating, setIsAnimating] = useState(false)
        const [blockScroll, setBlockScroll] = useState(false)
        const [scrollDirection, setScrollDirection] = useState('down')

        const handleIntersection = (entry) => {
            setBlockScroll(entry)
        }

        const handleScroll = useCallback(
            (event) => {
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
            },
            [slides.length]
        )

        useEffect(() => {
            if (blockScroll) {
                window.addEventListener('wheel', handleScroll, {passive: false})
            } else {
                window.removeEventListener('wheel', handleScroll)
            }

            return () => {
                window.removeEventListener('wheel', handleScroll)
            }
        }, [handleScroll, blockScroll])

        return (
            <InView threshold={0.3} onChange={handleIntersection}>
                <WrappedComponent
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                    isAnimating={isAnimating}
                    scrollDirection={scrollDirection}
                    setBlockScroll={setBlockScroll}
                    slides={slides}
                />
            </InView>
        );
    };

    return SliderComponent;
};

export default ScrollableSlider;
