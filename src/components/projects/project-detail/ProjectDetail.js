import React, { Fragment } from 'react'
import AustralianScreen from '../../../images/screen-australian.png'
import TigersScreen from '../../../images/screen-leicester.png'
import RiotScreen from '../../../images/screen-riot.png'
import SaintsScreen from '../../../images/screen-saints.png'

const ProjectDetail = ({ activeProject = {} }) => {
  const screenshots = {
    'The Australian': AustralianScreen,
    'Northampton Saints': SaintsScreen,
    'Leicester Tigers': TigersScreen,
    'Riot Games': RiotScreen
  }

  const screenshot = screenshots[activeProject.name]

  return (
    <Fragment>
      <h2 className="ProjectHeading">{activeProject.name}</h2>
      {screenshot && <img className="ProjectScreenshot" src={screenshot} alt={activeProject.name} />}
      <div className="ProjectDetail" dangerouslySetInnerHTML={{__html: activeProject.detail }} />
    </Fragment>
  )
}

export default ProjectDetail