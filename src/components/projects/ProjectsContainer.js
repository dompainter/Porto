import React, { Fragment, Component } from 'react'
import ProjectList from './project-list/ProjectList'
import ProjectDetail from './project-detail/ProjectDetail'
import { Col } from 'react-flexbox-grid'

class ProjectsContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeProject: props.projects[0],
      projects: props.projects
    }

    this.handleProjectClick = this.handleProjectClick.bind(this)
  }

  handleProjectClick (project) {
    const newProjects = this.state.projects.map(proj => {
      if (project.name === proj.name) {
        proj.active = true
      } else {
        proj.active = false
      }
      return proj
    })

    this.setState(() => ({
      activeProject: project,
      projects: newProjects
    }))
  }

  render () {
    return (
      <Fragment>
        <Col xs={12} md={3}>
          <ProjectList projects={this.state.projects} activeProject={this.state.active} handleProjectClick={this.handleProjectClick} />
        </Col>
        <Col xs={12} md={9}>
          <ProjectDetail activeProject={this.state.activeProject} />
        </Col>
      </Fragment>
    )
  }
}

export default ProjectsContainer