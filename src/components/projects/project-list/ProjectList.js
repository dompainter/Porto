import React from 'react'
import classNames from 'classnames'
import { Row, Col } from 'react-flexbox-grid'
import AustralianLogo from '../../../images/the-australian.png'
import TigersSvg from '../../../images/tigers.svg'
import RiotLogo from '../../../images/riot-logo.png'
import SaintsSvg from '../../../images/saints.svg'
import MiniLogo from '../../../images/mini.png'

const ProjectList = ({ projects, handleProjectClick }) => {
  const logos = {
    'The Australian': AustralianLogo,
    'Northampton Saints': SaintsSvg,
    'Leicester Tigers': TigersSvg,
    'Riot Games': RiotLogo,
    'Mini': MiniLogo
  }

  const firstProject = projects[0]
  const otherProjects = projects.slice(1)
  
  return (
    <Row className="ProjectList">
      <Col xs={12}>
        <div className="ProjectListItem" onClick={e => handleProjectClick(firstProject)}>
          <img className={classNames('ProjectImgFirst', { 'ProjectImgActive': firstProject.active })} src={logos[firstProject.name]} alt={firstProject.name} />
        </div>
      </Col>
      { otherProjects.map((project, i) => (
          <Col key={i} xs={12} md={6} center="md">
            <div className="ProjectListItem" onClick={e => handleProjectClick(project)}>
              <img className={classNames('ProjectImg', { 'ProjectImgActive': project.active })} src={logos[project.name]} alt={project.name} />
            </div>
          </Col>
      )
      )}
    </Row>
  )
}

export default ProjectList