import React from 'react'
import NavigationLink from './NavigationLink'

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
    <div className="NavigationLinks">
      {navItems.map((item, i) => (
        <NavigationLink item={item} key={i} />
      ))}
    </div>
  )
}

export default Navigation
