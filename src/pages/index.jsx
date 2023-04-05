import { useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header/Header'
import Hero from '@/layouts/Hero/Hero';
import About from '@/components/About/About';
import PopularCourses from '@/components/Course/PopularCourses/PopularCourses';
import Advantages from '@/components/Advantages/Advantages';
import AboutTeam from '@/components/Team/About/AboutTeam';
import JoinTeam from '@/components/Team/Join/JoinTeam';
import Footer from '@/components/Footer/Footer';

const Home = () => {

  return (
    <>
      <Head>
        <title>Home - PlotA</title>
        <meta name="description" content="PlanA Website Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='main'>
        <Hero
          title={<>E-education for<br />corporate clients</>}
          hasDecorations={true}
          />
        <About />
        <PopularCourses />
        <Advantages />
        <AboutTeam />
        <JoinTeam />
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Home 
