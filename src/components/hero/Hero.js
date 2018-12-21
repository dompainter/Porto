import React, { Fragment } from 'react'
import heroImage from '../../images/hero2.png'
import { Col } from 'react-flexbox-grid'

const Hero = (props) => (
  <Fragment>
    <Col className="HeroText" xs={12} md={2}>
      <span className="NameOne">Dominick</span>
      <span className="NameTwo">Painter</span>
    </Col>
    <Col xs={12} md={9} className="HeroImage">
      <img src={heroImage} alt="hero" />
    </Col>
  </Fragment>
)

export default Hero