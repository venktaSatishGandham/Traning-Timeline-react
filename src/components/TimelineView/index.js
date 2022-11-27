import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import {
  TimelineContainer,
  ResponsiveContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <TimelineContainer>
      <ResponsiveContainer>
        <HeaderContainer>
          <Heading>
            MY JOURNEY OF <br />
            <CCBPHeading>CCBP 4.0 WEB DEVELOPMENT TRAINING</CCBPHeading>
          </Heading>
        </HeaderContainer>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </ResponsiveContainer>
    </TimelineContainer>
  )
}

export default TimelineView

/* Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard/index'
import ProjectTimelineCard from '../ProjectTimelineCard/index'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const courseList = timelineItemsList.filter(
    each => each.categoryId === 'COURSE',
  )
  const projectList = timelineItemsList.filter(
    each => each.categoryId === 'PROJECT',
  )

  return (
    <div className="chrono-container">
      <h1 className="chrono-des">MY JOURNEY OF CCBP 4.0</h1>
  
      <Chrono items={timelineItemsList} mode="VERTICAL">
        {courseList.map(each => (
          <CourseTimelineCard key={each.id} courseList={each} />
        ))}
        {projectList.map(each => (
          <ProjectTimelineCard key={each.id} projectList={each} />
        ))}
      </Chrono>
    </div>
  )
}

export default TimelineView
*/
