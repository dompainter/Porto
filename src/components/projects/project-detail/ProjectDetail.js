import React, { Fragment } from 'react'

const ProjectDetail = ({ activeProject = {} }) => {
  return (
    <Fragment>
      <h2 className="ProjectHeading">{activeProject.name}</h2>
      <div className="ProjectDetail" dangerouslySetInnerHTML={{__html: activeProject.detail }} />
    </Fragment>
  )
}

export default ProjectDetail