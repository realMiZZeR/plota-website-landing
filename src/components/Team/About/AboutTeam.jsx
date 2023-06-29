import Image from 'node_modules/next/image';
import Link from 'node_modules/next/link';
import styles from './aboutTeam.module.scss'
import TextDescription from "@/components/TextDescription/TextDescription";


const AboutTeam = () => {

    const teamImageSrc = '';

    return (
        <article className={styles.wrapper}>
            <div className={styles['title-container']}>
                <TextDescription
                    order={6}
                    pretitle={'Out team'}
                    className={styles.text}
                />
            </div>
            <div className={styles.container}>
                <div className={styles.image}>
                    {teamImageSrc && <Image src={teamImageSrc} alt={``}/>}
                </div>
                <div className={styles.info}>
                    <h2 className={styles.title}>We unite cities</h2>
                    <p className={styles.description}>The Plot-A is a hybrid work format. For example, the branding team
                        is almost all in Berlin and meets on Wednesdays and Fridays at the office. The digital
                        entertainment team is the opposite - almost all online and scattered across countries and
                        cities.</p>
                    <Link href={'#'} className={styles.link}><span>Whole team</span>
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 13.5L17 7M17 7L10.5 0.5M17 7H1" stroke="#333333" strokeLinecap="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default AboutTeam;