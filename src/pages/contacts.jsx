import Head from 'next/head'
import Header from '@/components/Header/Header'
import Hero from '@/layouts/Hero/Hero';
import ContactsAritcle from '@/components/ContactsArticle/ContactsArticle';

const Contacts = () => {

  return (
    <>
      <Head>
        <title>Contacts - PlotA</title>
        <meta name="description" content="PlanA Website Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='main'>
        <Hero
          title={<>It all<br/>starts with<br/>Hello</>}
          hasDecorations={false}
          textInversed={true}
        />
        <ContactsAritcle />
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Contacts 
