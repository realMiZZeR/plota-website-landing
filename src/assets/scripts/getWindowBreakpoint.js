/**
 * Returns window breakpoint.
 * @param windowWidth
 * @return Value like 'xl', 'lg', 'md', 'sm'.
 */
export function getWindowBreakpoint(windowWidth) {
  try {
    if (windowWidth <= 320) {
      return 'sm'
    }

    if (windowWidth <= 768) {
      return 'md'
    }

    if (windowWidth <= 1024) {
      return 'lg'
    }

    if (windowWidth >= 1440) {
      return 'xl'
    }
  } catch (error) {
    console.error(error.message)
  }
}