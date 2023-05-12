import Head from 'next/head'
import Header from '@/components/Header/Header'
import Hero from '@/layouts/Hero/Hero';
import ImageInfo from '@/layouts/ImageInfo/ImageInfo';
import CardList from '@/layouts/CardList/CardList';
import SimpleList from '@/layouts/SimpleList/SimpleList';
import JoinTeam from '@/components/Team/Join/JoinTeam';
import AboutTeam from '@/components/Team/About/AboutTeam';

const simpleListItems = [
  {imageSrc: '', title: 'Flexible Time Off', description: 'Organisationsentwicklung und Personalentwicklung sollten als zwei Seiten derselben Medaille betrachtet und gestaltet werden.Erfolgreiche'},
  {imageSrc: '', title: 'Professional Development', description: 'Organisationsentwicklung und Personalentwicklung sollten als zwei Seiten derselben Medaille betrachtet und gestaltet'},
  {imageSrc: '', title: 'Flexible Work Culture', description: 'Organisationsentwicklung und Personalentwicklung sollten als zwei Seiten derselben Medaille betrachtet und gestaltet werden.Erfolgreiche Veränderung'},
]

const valuesCards = [
  {order: '01', title: 'Together is better', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. '},
  {order: '01', title: 'Together is better', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. '},
  {order: '01', title: 'Together is better', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. '},
]

const Career = () => {

  return (
    <>
      <Head>
        <title>Career - PlotA</title>
        <meta name="description" content="PlanA Website Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='main'>
        <Hero
          title={<>Our Team is Our Family</>}
          hasDecorations={false}
        />
        <ImageInfo
          title={<>Only people who love their work can produce a quality product</>}
          sentences={['Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ssssssssssssssssssAenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.']}
        />
        <ImageInfo
          title={<>Only people who love their work can produce a quality product</>}
          sentences={['Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ssssssssssssssssssAenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.']}
        />
        <CardList
          title={'Our values'}
          items={valuesCards}
        />
        <SimpleList
          title={'Perks & benefits'}
          items={simpleListItems}
        />
        <JoinTeam />
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Career 
