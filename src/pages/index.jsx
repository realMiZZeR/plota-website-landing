import { useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero';
import About from '@/components/About';

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
      <main className='main'>
        <Hero />
        <About />
      </main>
      <footer>
        
      </footer>
    </>
  )
}

export default Home 
