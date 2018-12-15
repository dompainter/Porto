import React, { Fragment } from 'react'
import ProjectList from './project-list/ProjectList'
import ProjectDetail from './project-detail/ProjectDetail'
import { Col } from 'react-flexbox-grid'

const ProjectsContainer = ({ projects }) => (
  <Fragment>
    <Col xs={12} md={4}>
      <ProjectList projects={projects} />
    </Col>
    <Col xs={12} md={8}>
      <ProjectDetail projects={projects} activeProject={projects[0]} />
    </Col>
  </Fragment>
)

export default ProjectsContainer