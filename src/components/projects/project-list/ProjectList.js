import React from 'react'
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
  
  return (
    <Row className="ProjectList row--padding-top-small">
      { projects.map((project, i) => (
          <Col key={i} xs={12} md={6} center="md">
            <div className="ProjectListItem" onClick={e => handleProjectClick(project)}>
              <img className="ProjectImg" src={logos[project.name]} alt={project.name} />
              {project.active &&
                <span className="ProjectCircle">
                  <i className="fas fa-circle"></i>
                </span>
              }
            </div>
          </Col>
      )
      )}
    </Row>
  )
}

export default ProjectList