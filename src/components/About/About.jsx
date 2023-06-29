import TextDescription from '@/components/TextDescription/TextDescription'
import Counter from '@/components/Counter/Counter'

import styles from './about.module.scss'

const About = () => {

    return (
        <article className={styles.wrapper}>
            <div className={styles.container}>
                <TextDescription
                    title={''}
                    description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'}
                    order={1}
                    pretitle={'Who we are'}
                    className={styles.text}
                />
                <div className={styles.counters}>
                    <Counter reachNumber={20} countDelay={150} description='Training programmes'/>
                    <Counter reachNumber={416} countDelay={5} description='Current students'/>
                    <Counter reachNumber={48} countDelay={150} description='Clients'/>
                </div>
            </div>
        </article>
    )
}

export default About