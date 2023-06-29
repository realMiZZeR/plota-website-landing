import styles from './titleSlider.module.scss'
import Slide from "@/components/TextSlider/Slide/Slide";
import ScrollableSlider from "@/hoc/ScrollableSlider";
import TextDescription from "@/components/TextDescription/TextDescription";
import SliderNav from "@/components/TitleSlider/SliderNav/SliderNav";

const TitleSlider = ({slides, currentSlide, isAnimating, scrollDirection, setCurrentSlide}) => {
    return (
        <article className={styles.wrapper}>
            <div className={styles.container}>
                <TextDescription
                    order={5}
                    pretitle={'Unsere Werte'}
                    className={styles.text}
                />
            </div>
            <div className={styles.container}>
                <SliderNav setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} isAnimating={isAnimating}
                           scrollDirection={scrollDirection}/>
                <div className={styles.slides}>
                    {slides.map(({id, text}, index) => (
                        <Slide
                            key={id}
                            text={text}
                            isCurrent={index === currentSlide}
                            isAnimating={isAnimating}
                            scrollDirection={scrollDirection}
                            className={'titles'}
                        />
                    ))}
                </div>
            </div>
        </article>
    )
}

const TitleSliderWithSlides = ScrollableSlider(TitleSlider, [
    {
        id: 1,
        text: '1 The Ontron is a hybrid work format. For example, the branding team is almost all in Berlin and meets on Wednesdays and Fridays at the office. ',
    },
    {
        id: 2,
        text: '2 The Ontron is a hybrid work format. For example, the branding team is almost all in Berlin and meets on Wednesdays and Fridays at the office. ',
    },
    {
        id: 3,
        text: '3 The Ontron is a hybrid work format. For example, the branding team is almost all in Berlin and meets on Wednesdays and Fridays at the office. ',
    },
    {
        id: 4,
        text: '4 The Ontron is a hybrid work format. For example, the branding team is almost all in Berlin and meets on Wednesdays and Fridays at the office. ',
    },
    {
        id: 5,
        text: '5 The Ontron is a hybrid work format. For example, the branding team is almost all in Berlin and meets on Wednesdays and Fridays at the office. ',
    },
], 'title')

export default TitleSliderWithSlides