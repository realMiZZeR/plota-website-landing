import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import ReactFullpage from '@fullpage/react-fullpage'
import Head from 'node_modules/next/head'


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
      <ReactFullpage
        licenseKey={''}
        credits={{enabled: false, label: ''}}
        scrollingSpeed={1000}
        render={({state, fullpageApi}) => {
          return (
            <div className='section'>
              <Hero title={'Title describing the company’s business'} />
            </div>
          )
        }}
      />
    </>
  )
}

export default Home