import { useInView } from 'react-intersection-observer';
import { useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import PopularCourses from '@/components/Course/PopularCourses/PopularCourses';
import SimpleList from '@/components/SimpleList/SimpleList';
import AboutTeam from '@/components/Team/About/AboutTeam';
import JoinTeam from '@/components/Team/Join/JoinTeam';
import Footer from '@/components/Footer/Footer';
import { InView } from 'react-intersection-observer';

const simpleListItems = [
  {id: 1, imageSrc: '', title: 'Easy learning format', description: 'Organisationsentwicklung und Personalentwicklung sollten als zwei Seiten derselben Medaille betrachtet und gestaltet werden.Erfolgreiche'},
  {id: 2, imageSrc: '', title: 'Individual approach', description: 'Organisationsentwicklung und Personalentwicklung sollten als zwei Seiten derselben Medaille betrachtet und gestaltet'},
  {id: 3, imageSrc: '', title: 'Qualified tutors', description: 'Organisationsentwicklung und Personalentwicklung sollten als zwei Seiten derselben Medaille betrachtet und gestaltet werden.Erfolgreiche Veränderung'},
]

const ObsoleteHome = () => {

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
          <SimpleList
            title={'Our advantages'}
            items={simpleListItems}
          />
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

export default ObsoleteHome 
