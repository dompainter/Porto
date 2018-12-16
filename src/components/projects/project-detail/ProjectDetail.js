import React, { Fragment } from 'react'

const ProjectDetail = ({ activeProject = {} }) => {
  return (
    <Fragment>
      <h2 className="ProjectHeading">{activeProject.name}</h2>
      <p className="ProjectDetail">{activeProject.detail}</p>
    </Fragment>
  )
}

export default ProjectDetail