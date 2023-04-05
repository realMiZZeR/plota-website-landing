import Head from 'next/head'
import Header from '@/components/Header/Header'
import Hero from '@/layouts/Hero/Hero';

const Team = () => {

  return (
    <>
      <Head>
        <title>Our Team - PlotA</title>
        <meta name="description" content="PlanA Website Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='main'>
        <Hero
          title={<>We work for You</>}
          hasDecorations={false}
          />
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Team 
