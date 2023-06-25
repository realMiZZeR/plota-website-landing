import TeamVacancy from '@/components/Team/TeamVacancy/TeamVacancy';
import styles from './JoinTeam.module.scss'

const JoinTeam = () => {

  return (
    <article className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h2 className={styles.title}>Join Our Team</h2>
          <p className={styles.description}>If you're innovative, creative, and thrive in a team-oriented environment, we'd love to hear from you!</p>
        </div>
        <div className={styles.vacancies}>
          <TeamVacancy
            title={'Developer'}
            description={''}
            location={''}
            linkHref={'#'}
            linkName={'Application'}
          />
          <TeamVacancy
            title={'Scrum Master'}
            description={'Wenn Wissensmanagement nicht strategisch geplant und an den jeweiligen Reifegrad von Organisationen angepasst wird'}
            location={'Estonia, Tallinn'}
            linkHref={'#'}
            linkName={'Application'}
          />
        </div>
      </div>
    </article>
  )
}

export default JoinTeam;