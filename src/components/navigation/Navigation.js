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
    <div className="Navigation">
      <a href='/'>
        <img src="https://images.unsplash.com/photo-1518655061710-5ccf392c275a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" alt="logo" />
      </a>
      <div className="NavigationLinks">
        {navItems.map((item, i) => (
          <NavigationLink item={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Navigation