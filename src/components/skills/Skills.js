import React from 'react'
import ReactLogo from '../../images/react.png'
import NodeLogo from '../../images/node.png'
import JSLogo from '../../images/js.png'

const Skills = (props) => {
  return (
    <div className="SkillImages">
      <img src={ReactLogo} alt="react" />
      <img src={NodeLogo} alt="nodejs" />
      <img src={JSLogo} alt="javascript" />
    </div>
  )
}

export default Skills