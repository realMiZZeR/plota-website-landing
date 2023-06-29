import Head from 'node_modules/next/head'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Customers from '@/components/Customers/Customers'
import PopularCourses from '@/components/Course/PopularCourses/PopularCourses'
import TitleSliderWithSlides from "@/components/TitleSlider/TitleSlider";
import TextSliderWithSlides from "@/components/TextSlider/TextSlider";
import {useState} from "react";
import AboutTeam from "@/components/Team/About/AboutTeam";

const Home = () => {

    const [headerColor, setHeaderColor] = useState('black')

    return (
        <>
            <Head>
                <title>Home - PlotA</title>
                <meta name="description" content="PlanA Website Landing Page"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header color={headerColor}/>
            <main className="main">
                <Hero title={'Title describing the company’s business'}/>
                <About/>
                <TextSliderWithSlides/>
                <Customers/>
                <PopularCourses/>
                <TitleSliderWithSlides/>
                <AboutTeam/>
            </main>
        </>
    )
}

export default Home
