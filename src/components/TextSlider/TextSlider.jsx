import styles from './TextSlider.module.scss'
import Slide from "@/components/TextSlider/Slide/Slide";
import ScrollableSlider from "@/hoc/ScrollableSlider";
import TextDescription from "@/components/TextDescription/TextDescription";

const TextSlider = ({slides, currentSlide, isAnimating, scrollDirection, setCurrentSlide}) => {
    return (
        <article className={styles.wrapper}>
            <div className={styles.container}>
                <TextDescription
                    descriptionClassName={styles.textDescription}
                    description={'Only an integrated approach achieves the desired results'}
                    order={2}
                    pretitle={'Approach to work'}
                    className={styles.text}
                />
                <div className={styles.slides}>
                    {slides.map(({id, title, text}, index) => (
                        <Slide
                            key={id}
                            title={title}
                            text={text}
                            isCurrent={index === currentSlide}
                            isAnimating={isAnimating}
                            scrollDirection={scrollDirection}
                        />
                    ))}
                </div>
            </div>
            <div className={`${styles.container} ${styles.mobile}`}>
                <div className={styles.counter}>
                    <span>{currentSlide + 1}</span> / <span>{slides.length}</span>
                </div>
            </div>
        </article>
    )
}

const TextSliderWithSlides = ScrollableSlider(TextSlider, [
    {
        id: 1,
        title: 'Wissen & Lernen',
        text: 'Wenn Wissensmanagement nicht strategisch geplant und an den jeweiligen Reifegrad von Organisationen angepasst wird, kann dies deren Existenz gefährden.Wir begreifen Lernen als Performance Support und unterstützen dabei, Wissen entsprechend dem individuellen Bedarf verfügbar zu machen.',
    },
    {
        id: 2,
        title: 'Change-management',
        text: 'Organisationsentwicklung und Personalentwick-lung sollten als zwei Seiten derselben Medaille betrachtet und gestaltet werden.Erfolgreiche Veränderung passiert nicht von allein, sondern muss geplant und begleitet werden.Wir sorgen dafür, dass Veränderungsprozesse strategisch aufgesetzt und durchgeführt werden.',
    },
    {
        id: 3,
        title: 'Collaboration',
        text: 'Aktiv gestaltete Kommunikationsprozesse sehen wir als Grundlage einer erfolgreichen Zusammen-arbeit.Denn wirksam gestaltete Kommunikation reduziert die Komplexität und hilft dabei, den Fokus auf das Wichtige zu legen.Agile Zusammenarbeit fördert dabei nicht nur die Ressourcenaktivierung, sondern auch die Entwicklung nachhaltig erfolg-reicher Prozesse.',
    },
    {
        id: 4,
        title: 'Person',
        text: 'Im Fokus unserer ganzheitlichen Betrachtung steht der Mensch – die gezielte Förderung und Weiterentwicklung seiner Potenziale und Kompeten- zen ist Schlüsselelement organisationalen Erfolgs und individueller Zufriedenheit.',
    },
], 'text')

export default TextSliderWithSlides