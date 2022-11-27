import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectCardContainer,
  ProjectImage,
  ProjectTitleAndDurationContainer,
  ProjectTitle,
  DurationContainer,
  Duration,
  ProjectDescription,
  VisitLink,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <ProjectCardContainer>
      <ProjectImage src={imageUrl} alt="project" />
      <ProjectTitleAndDurationContainer>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <DurationContainer>
          <AiFillCalendar color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </ProjectTitleAndDurationContainer>
      <ProjectDescription>{description}</ProjectDescription>
      <VisitLink href={projectUrl}>Visit</VisitLink>
    </ProjectCardContainer>
  )
}

export default ProjectTimelineCard

/* Write your code here

import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectList} = props
  const {
    id,
    projectTitle,
    duration,
    description,
    projectUrl,
    imageUrl,
  } = projectList
  return (
    <div>
      <div key={id} className="projectTimeLine">
        <img alt="project" className="project-image" src={imageUrl} />
        <div className="project-title-container">
          <h1 className="project-title">{projectTitle}</h1>
          <p className="project-duration">
            <AiFillCalendar />
            {duration}
          </p>
        </div>
        <p className="project-description">{description}</p>
        <a href={projectUrl} target="_self" className="anchor">
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
*/
