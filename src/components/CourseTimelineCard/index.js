import {AiFillClockCircle} from 'react-icons/ai'

import {
  CourseTitleAndDurationContainer,
  CourseTitle,
  DurationContainer,
  Duration,
  CourseDescription,
  CourseTagsList,
  CourseTagItem,
  CourseTag,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <CourseTitleAndDurationContainer>
        <CourseTitle>{courseTitle}</CourseTitle>
        <DurationContainer>
          <AiFillClockCircle color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </CourseTitleAndDurationContainer>
      <CourseDescription>{description}</CourseDescription>
      <CourseTagsList>
        {tagsList.map(eachTag => (
          <CourseTagItem key={eachTag.id}>
            <CourseTag>{eachTag.name}</CourseTag>
          </CourseTagItem>
        ))}
      </CourseTagsList>
    </>
  )
}

export default CourseTimelineCard

/* Write your code here

import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseList} = props
  const {id, courseTitle, description, duration, tagsList} = courseList
  return (
    <div>
      <div key={id} className="courseTimeLine">
        <div className="course-title-container">
          <h1 className="course-title">{courseTitle}</h1>
          <p className="course-duration">
            <AiFillClockCircle />
            {duration}
          </p>
        </div>
        <p className="course-description">{description}</p>
        <div className="course-single-item-container">
          {tagsList.map(single => (
            <p key={single.id} className="course-single-item">
              {single.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourseTimelineCard
*/
