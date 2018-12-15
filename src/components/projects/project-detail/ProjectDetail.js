import React, { Fragment } from 'react'

const ProjectDetail = ({ activeProject = {} }) => {
  return (
    <Fragment>
      {activeProject.name}
      {activeProject.detail}
    </Fragment>
  )
}

export default ProjectDetail