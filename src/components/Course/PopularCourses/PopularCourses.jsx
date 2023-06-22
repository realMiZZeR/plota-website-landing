import { useState } from 'react'

import CoursePreview from '../Preview/CoursePreview'

import styles from './PopularCourses.module.scss'
import ImageTest from '@/assets/images/course-preview-test.png'
import TextDescription from '@/components/TextDescription/TextDescription'

const courses = [
  {id: 1, title: 'Agile methodology', description: '', tag: 'Management', imageSrc: ImageTest, imageAlt: ''},
  {id: 2, title: 'Test management', description: '', tag: 'Management', imageSrc: ImageTest, imageAlt: ''},
  {id: 3, title: 'SAC SAP Analytics', description: 'Organisationsentwicklung und Personalentwicklung sollten als zwei Seiten derselben', tag: 'Management', imageSrc: ImageTest, imageAlt: ''},
]

const PopularCourses = () => {

  const [isHovered, setIsHovered] = useState(false);

  const mouseEnterHandler = () => {
    console.log(isHovered);
  }

  return (
    <article className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h3 className={styles.title}>Popular courses</h3>
          <TextDescription
            wrapperClassName={styles.wrapperTextDescription}
            descriptionClassName={styles.textDescription}
            pretitle={'Our Customers'}
            description={'We do not have a fixed course program, all our training is fully adapted to the client. We also develop tailor-made courses for our clients.'}
            order={4}
           />
        </div>
        <div className={styles.courses}>
          {courses.length > 0 && courses.map(course => (
            <CoursePreview
              key={course.id}
              title={course.title}
              description={course.description}
              tag={course.tag}
              imageSrc={course.imageSrc}
              imageAlt={course.imageAlt}
             />
          ))}
        </div>
      </div> 
    </article>
  );
}

export default PopularCourses;