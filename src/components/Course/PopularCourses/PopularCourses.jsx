import { useState } from 'react'

import CoursePreview from '../Preview/CoursePreview'

import styles from './popularCourses.module.scss'
import ImageTest from '@/assets/images/course-preview-test.png'

const PopularCourses = () => {

  const [isHovered, setIsHovered] = useState(false);

  const mouseEnterHandler = () => {
    console.log(isHovered);
  }

  return (
    <article 
      onMouseEnter={mouseEnterHandler}
      className={styles.wrapper}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.title}>Popular <br /> Courses</h3>
          <p className={styles.description}>We do not have a fixed course program, all our <br /> training is fully adapted to the client. We also develop tailor-made courses for our clients.</p>
        </div>
        <div className={styles.courses}>
          <CoursePreview
            title={<span>Agile <br /> Methodology</span>}
            description={''}
            tag={"Management"}
            imageSrc={ImageTest}
            imageAlt={"Image"}
          />
          <CoursePreview
            title={<span>Test <br /> Management</span>}
            description={''}
            tag={"Management"}
            imageSrc={ImageTest}
            imageAlt={"Image"}
          />
          <CoursePreview
            title={<span>SAC <br /> SAP Analytics</span>}
            description={'Organisationsentwicklung und Personalentwicklung sollten als zwei Seiten derselben'}
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