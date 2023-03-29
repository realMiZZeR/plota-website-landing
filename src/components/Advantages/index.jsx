import Image from 'next/image';
import styles from './advantages.module.scss'
import AdvantagesSection from './AdvantagesSection';

const Advantages = () => {

  return (
    <article className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.title}>
          Only an <strong>integrated</strong> <br /> <strong>approach</strong> achieves the <br /> desired results
        </h3>
        <div className={styles.list}>
          <AdvantagesSection
            title={"Wissen & Lernen"}
            desciption={"Wenn Wissensmanagement nicht strategisch geplant und an den jeweiligen Reifegrad von Organisationen angepasst wird, kann dies deren Existenz gefährden.Wir begreifen Lernen als Performance Support und unterstützen dabei, Wissen entsprechend dem individuellen Bedarf verfügbar zu machen."}
            imageSrc={``}
            imageAlt={"Image"}
          />
          <AdvantagesSection
            title={"Person"}
            desciption={"Im Fokus unserer ganzheitlichen Betrachtung steht der Mensch – die gezielte Förderung und Weiterentwicklung seiner Potenziale und Kompetenzen ist Schlüsselelement organisationalen Erfolgs und individueller Zufriedenheit."}
            imageSrc={``}
            imageAlt={"Image"}
          />
          <AdvantagesSection
            title={"Collaboration"}
            desciption={"Wenn Wissensmanagement nicht strategisch geplant und an den jeweiligen Reifegrad von Organisationen angepasst wird, kann dies deren Existenz gefährden.Wir begreifen Lernen als Performance Support und unterstützen dabei, Wissen entsprechend dem individuellen Bedarf verfügbar zu machen."}
            imageSrc={``}
            imageAlt={"Image"}
          />
          <AdvantagesSection
            title={"Change-Management"}
            desciption={"Organisationsentwicklung und Personalentwicklung sollten als zwei Seiten derselben Medaille betrachtet und gestaltet werden.Erfolgreiche Veränderung passiert nicht von allein, sondern muss geplant und begleitet werden.Wir sorgen dafür, dass Veränderungsprozesse strategisch aufgesetzt und durchgeführt werden."}
            imageSrc={``}
            imageAlt={"Image"}
          />
        </div>
      </div>
    </article>
  )
}

export default Advantages;