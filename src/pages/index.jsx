import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header/Header'
import Hero from '@/layouts/Hero/Hero';
import About from '@/components/About/About';
import PopularCourses from '@/components/Course/PopularCourses/PopularCourses';
import Advantages from '@/components/Advantages/Advantages';
import AboutTeam from '@/components/Team/About/AboutTeam';
import JoinTeam from '@/components/Team/Join/JoinTeam';
import Footer from '@/components/Footer/Footer';
import { InView } from 'react-intersection-observer';

const Home = () => {

  const [headerColor, setHeaderColor] = useState("white");

  return (
    <>
      <Head>
        <title>Home - PlotA</title>
        <meta name="description" content="PlanA Website Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header color={headerColor} />
      <main className='main'>
        <InView threshold={0.3} onChange={() => setHeaderColor("white")}>
          <Hero
            title={<>E-education for<br />corporate clients</>}
            hasDecorations={true}
            />
        </InView>

        <InView threshold={0.3} onChange={() => setHeaderColor("black")}>
          <About />
        </InView>

        <InView threshold={0.9} onChange={() => setHeaderColor("white")}>
          <PopularCourses />
        </InView>

        <InView threshold={0.3} onChange={() => setHeaderColor("black")}>
          <Advantages />
        </InView>

        <InView threshold={0.3} onChange={() => setHeaderColor("black")}>
          <AboutTeam />
        </InView>

        <InView threshold={0.3} onChange={() => setHeaderColor("black")}>
          <JoinTeam />
        </InView>

      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Home 
