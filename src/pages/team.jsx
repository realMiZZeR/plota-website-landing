import Head from 'next/head'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero';
import ImageInfo from '@/components/ImageInfo/ImageInfo';

import styles from '@/styles/pages/team.module.scss';
import CardGallery from '@/components/CardGallery/CardGallery';

let userCards = [
  { id: 1, title: 'Sergei Tsernuhha', description: 'Key Accountant Manager', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ssssssssssssssssssAenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', imageSrc: ''},
  { id: 2, title: 'Maria Skvortsova', description: 'Scrum master', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ssssssssssssssssssAenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', imageSrc: ''},
  { id: 3, title: 'Yulia Arkadeva', description: 'Developer', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ssssssssssssssssssAenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', imageSrc: ''},
  { id: 4, title: 'Ihor Holovin', description: 'Motion design', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ssssssssssssssssssAenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', imageSrc: ''},
  { id: 5, title: 'Sergei Tsernuhha', description: 'Key Accountant Manager', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ssssssssssssssssssAenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', imageSrc: ''},
  { id: 6, title: 'Maria Skvortsova', description: 'Scrum master', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ssssssssssssssssssAenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', imageSrc: ''},
  { id: 7, title: 'Yulia Arkadeva', description: 'Developer', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ssssssssssssssssssAenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', imageSrc: ''},
  { id: 8, title: 'Ihor Holovin', description: 'Motion design', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ssssssssssssssssssAenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', imageSrc: ''},
]

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
          title={'We work for You'}
          hasDecorations={false}
          />
        <ImageInfo
          title={'Our team is our pride'}
          sentences={['We are professionals in love with our work, working to benefit your business.', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ssssssssssssssssssAenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.']}
          className={styles.pride}
          imageClassName={styles.prideImage}
          imageSrc={''}
          imageAlt={''}
        />
        <ImageInfo
          title={'We are for quality'}
          sentences={['Our staff is not large, but productive. Each member of our team is a professional in his field, which works with full dedication.', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ssssssssssssssssssAenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.']}
          className={styles.quality}
          imageSrc={''}
          imageAlt={''}
        />
        <CardGallery
          title={`Let's get acquainted`}
          cards={userCards}
        />
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Team 
