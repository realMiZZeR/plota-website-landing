import CoursePreview from '../Course/Preview/CoursePreview'
import styles from './popularCourses.module.scss'

import ImageTest from '@/assets/images/course-preview-test.png'

const PopularCourses = () => {

  return (
    <article className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.title}>Popular <br /> Courses</h3>
          <p className={styles.description}>We do not have a fixed course program, all our training is fully <br /> adapted to the client. We also develop tailor-made courses for our clients.</p>
        </div>
        <div className={styles.courses}>
          <CoursePreview
            title={"Agile Methodology"}
            tag={"Management"}
            imageSrc={ImageTest}
            imageAlt={"Image"}
          />
          <CoursePreview
            title={"Test Management"}
            tag={"Management"}
            imageSrc={ImageTest}
            imageAlt={"Image"}
          />
          <CoursePreview
            title={`SAC SAP Analytics`}
            tag={"Management"}
            imageSrc={ImageTest}
            imageAlt={"Image"}
          />
        </div>
      </div>
    </article>
  );
}

export default PopularCourses;