import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Head from 'node_modules/next/head'
import About from '@/components/About/About'
import Customers from '@/components/Customers/Customers'
import PopularCourses from '@/components/Course/PopularCourses/PopularCourses'

const Home = () => {

  return (
    <>
      <Head>
        <title>Home - PlotA</title>
        <meta name="description" content="PlanA Website Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header color={'black'} />
      <main className='main'>
        <Hero title={'Title describing the company’s business'} />
        <About />
        <Customers />
        <PopularCourses />
      </main>
    </>
  )
}

export default Home