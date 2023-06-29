import React, {useEffect, useState} from 'react';
import {InView} from 'react-intersection-observer';

const ScrollableSlider = (WrappedComponent, slides, sliderAttr) => {
    const SliderComponent = () => {
        const [currentSlide, setCurrentSlide] = useState(0);
        const [isAnimating, setIsAnimating] = useState(false);
        const [blockScroll, setBlockScroll] = useState(false);
        const [scrollDirection, setScrollDirection] = useState('up');
        const [touchStartY, setTouchStartY] = useState(0);

        const handleIntersection = (entry) => {
            setBlockScroll(entry);
        };

        const handleScroll = (event) => {
            event.preventDefault();

            const delta = Math.sign(event.deltaY);

            setCurrentSlide((prevSlide) => {
                if (delta < 0 && prevSlide > 0) {
                    setIsAnimating(true);
                    setScrollDirection('up');
                    setBlockScroll(true);
                    return prevSlide - 1;
                } else if (delta > 0 && prevSlide < slides.length - 1) {
                    setIsAnimating(true);
                    setScrollDirection('down');
                    setBlockScroll(true);
                    return prevSlide + 1;
                } else if (delta < 0 && prevSlide === 0) {
                    const previousBlock = document.querySelector(
                        `[slider=${sliderAttr}]`
                    ).previousElementSibling;
                    if (previousBlock) {
                        previousBlock.scrollIntoView({behavior: 'smooth'});
                    }
                } else if (delta > 0 && prevSlide === slides.length - 1) {
                    const nextBlock = document.querySelector(
                        `[slider=${sliderAttr}]`
                    ).nextElementSibling;
                    if (nextBlock) {
                        nextBlock.scrollIntoView({behavior: 'smooth'});
                    }
                }

                if (prevSlide === 0 || prevSlide === slides.length - 1) {
                    setBlockScroll(false);
                }

                return prevSlide;
            });

            setTimeout(() => {
                setIsAnimating(false);
            }, 300);
        };

        const handleTouchStart = (event) => {
            setTouchStartY(event.touches[0].clientY);
        };

        const handleTouchEnd = (event) => {
            const touchEndY = event.changedTouches[0].clientY;
            const touchDelta = touchEndY - touchStartY;

            setCurrentSlide((prevSlide) => {
                if (touchDelta > 0 && prevSlide > 0) {
                    setIsAnimating(true);
                    setScrollDirection('up');
                    setBlockScroll(true);
                    return prevSlide - 1;
                } else if (touchDelta < 0 && prevSlide < slides.length - 1) {
                    setIsAnimating(true);
                    setScrollDirection('down');
                    setBlockScroll(true);
                    return prevSlide + 1;
                } else if (touchDelta > 0 && prevSlide === 0) {
                    const previousBlock = document.querySelector(
                        `[slider=${sliderAttr}]`
                    ).previousElementSibling;
                    if (previousBlock) {
                        previousBlock.scrollIntoView({behavior: 'smooth'});
                    }
                } else if (touchDelta < 0 && prevSlide === slides.length - 1) {
                    const nextBlock = document.querySelector(
                        `[slider=${sliderAttr}]`
                    ).nextElementSibling;
                    if (nextBlock) {
                        nextBlock.scrollIntoView({behavior: 'smooth'});
                    }
                }

                if (prevSlide === 0 || prevSlide === slides.length - 1) {
                    setBlockScroll(false);
                }

                return prevSlide;
            });

            setTimeout(() => {
                setIsAnimating(false);
            }, 300);
        };

        const handleTouchMove = (event) => {
            if (blockScroll) {
                event.preventDefault();
            }
        };

        useEffect(() => {
            if (blockScroll) {
                window.addEventListener('wheel', handleScroll, {passive: false});
                window.addEventListener('touchstart', handleTouchStart, {passive: false});
                window.addEventListener('touchend', handleTouchEnd, {passive: false});
                document.addEventListener('touchmove', handleTouchMove, {passive: false});
            } else {
                window.removeEventListener('wheel', handleScroll)
            }

            return () => {
                window.removeEventListener('wheel', handleScroll);
                window.removeEventListener('touchstart', handleTouchStart);
                window.removeEventListener('touchend', handleTouchEnd);
                document.removeEventListener('touchmove', handleTouchMove);
            };
        }, [blockScroll, handleTouchEnd, handleTouchStart]);

        return (
            <InView threshold={0.3} onChange={handleIntersection} slider={sliderAttr}>
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
