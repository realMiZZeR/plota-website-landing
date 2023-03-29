import { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero';
import About from '@/components/About';
import ParallaxScroll from '../HOC/ParallaxScroll';
import Advantages from '../components/Advantages';
import PopularCourses from '../components/PopularCourses';

const Home = () => {

  const [isAlternative, setIsAlternative] = useState(true);

  return (
    <>
      <Head>
        <title>PlotA Website Landing</title>
        <meta name="description" content="PlanA Website Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isAlternative={isAlternative} />
      <ParallaxScroll>
        <main className='main'>
          <Hero />
          <About />
          <PopularCourses />
        </main>
      </ParallaxScroll>
      <footer>
        
      </footer>
    </>
  )
}

export default Home 
