import { useEffect } from "react";


const ParallaxScroll = ({ children }) => {

  const scrollListener = () => {

  }

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <>
      {children}
    </>
  )
}

export default ParallaxScroll;