import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import AustralianLogo from '../../../images/the-australian.png'
import SaintsLogo from '../../../images/saints.png'
import TigersLogo from '../../../images/tigers.png'
import RiotLogo from '../../../images/riot-logo.png'
// import MiniLogo from '../../../images/mini.png'

const ProjectList = ({ projects, handleProjectClick }) => {
  const logos = {
    'The Australian': AustralianLogo,
    'Northampton Saints': SaintsLogo,
    'Leicester Tigers': TigersLogo,
    'Riot Games': RiotLogo
  }
  
  console.log("​ProjectList -> projects", projects)
  return (
    <Row className="ProjectList">
      { projects.map((project, i) => (
          <Col key={i} xs={12} md={6} center="md">
            <div onClick={e => handleProjectClick(project)}>
              <img className="ProjectImg" src={logos[project.name]} alt={project.name} />
              {project.active && <span>ACTIVE</span>}
            </div>
          </Col>
      )
      )}
    </Row>
  )
}

export default ProjectList