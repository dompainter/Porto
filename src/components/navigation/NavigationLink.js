import React from 'react'

const NavigationLink = ({ item }) => (
  <a className="NavigationLink" href={item.url}>
    {item.name}
  </a>

)

export default NavigationLink
