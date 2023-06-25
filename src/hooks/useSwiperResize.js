import {getWindowBreakpoint} from "../assets/scripts/getWindowBreakpoint";
import {useCallback, useEffect, useState} from "react";

let breakpointsType = {
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
}

export function createBreakpointObject(sm, md, lg, xl) {
  return {
    sm,
    md,
    lg,
    xl
  }
}

export function useSwiperResize(slidesPerViewBreakpoints = {}, spaceBetweenBreakpoints = {}) {
  const [slidesPerView, setSlidesPerView] = useState(breakpointsType.xl)
  const [spaceBetweenSlides, setSpaceBetweenSlides] = useState(breakpointsType.xl)

  // Slides per view by screen resolution.
  const handleWindowResize = useCallback(() => {
    let windowWidth = window.innerWidth
    let breakpoint = getWindowBreakpoint(windowWidth)

    switch (breakpoint) {
      case 'sm':
        setSlidesPerView(slidesPerViewBreakpoints.sm)
        setSpaceBetweenSlides(spaceBetweenBreakpoints.sm)
        break
      case 'md':
        setSlidesPerView(slidesPerViewBreakpoints.md)
        setSpaceBetweenSlides(spaceBetweenBreakpoints.md)
        break
      case 'lg':
        setSlidesPerView(slidesPerViewBreakpoints.lg)
        setSpaceBetweenSlides(spaceBetweenBreakpoints.lg)
        break
      case 'xl':
        setSlidesPerView(slidesPerViewBreakpoints.xl)
        setSpaceBetweenSlides(spaceBetweenBreakpoints.xl)
        break
    }
  }, [slidesPerViewBreakpoints, spaceBetweenBreakpoints])

  useEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [handleWindowResize])

  return {
    slidesPerView,
    spaceBetweenSlides
  }
}