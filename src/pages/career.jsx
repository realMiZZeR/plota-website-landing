import Head from 'next/head'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero';
import ImageInfo from '@/components/ImageInfo/ImageInfo';
import OrderCardList from '@/components/CardList/OrderCardList';
import SimpleList from '@/components/SimpleList/SimpleList';
import JoinTeam from '@/components/Team/Join/JoinTeam';
import AboutTeam from '@/components/Team/About/AboutTeam';

const simpleListItems = [
  { id: 1, imageSrc: '', title: 'Flexible Time Off', description: 'Organisationsentwicklung und Personalentwicklung sollten als zwei Seiten derselben Medaille betrachtet und gestaltet werden.Erfolgreiche'},
  { id: 2, imageSrc: '', title: 'Professional Development', description: 'Organisationsentwicklung und Personalentwicklung sollten als zwei Seiten derselben Medaille betrachtet und gestaltet'},
  { id: 3, imageSrc: '', title: 'Flexible Work Culture', description: 'Organisationsentwicklung und Personalentwicklung sollten als zwei Seiten derselben Medaille betrachtet und gestaltet werden.Erfolgreiche Veränderung'},
]

const cards = [
  { id: 1, order: '01', title: 'Together is better', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. '},
  { id: 2, order: '01', title: 'Together is better', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. '},
  { id: 3, order: '01', title: 'Together is better', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. '},
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
        <OrderCardList
          title={'Our values'}
          items={cards}
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
