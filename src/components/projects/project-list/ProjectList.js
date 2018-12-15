import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import AustralianLogo from '../../../images/riot-logo-black-text.png'
const ProjectList = ({ projects }) => {
  
  return (
    <Row className="ProjectList">
      { projects.map((project, i) => (
          <Col key={i} xs={12} md={6} center="md">
            <img className="ProjectImg" src={AustralianLogo} alt={project.name} />
          </Col>
      )
      )}
    </Row>
  )
}

export default ProjectList