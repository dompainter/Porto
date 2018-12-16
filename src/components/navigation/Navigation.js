import React from 'react'
import NavigationLink from './NavigationLink'
import { Col } from 'react-flexbox-grid'
import Logo from '../../images/porto-logo.png'

const Navigation = (props) => {
  const navItems = [ {
    name: 'About',
    url: '#about'
  }, {
    name: 'Projects',
    url: '#projects'
  }, {
    name: 'Contact',
    url: '#contact'
  } ]

  return (
    <div className="Navigation">
      <Col xs={6}>
        <div className="NavigationLinks">
          <a href='/'>
            <img src={Logo} alt="logo" />
          </a>
          {navItems.map((item, i) => (
            <NavigationLink item={item} key={i} />
          ))}
        </div>
      </Col>
    </div>
  )
}

export default Navigation
