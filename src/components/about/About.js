import React, { Fragment } from 'react'
import { Col } from 'react-flexbox-grid'
import Skills from '../skills/Skills'

const About = (props) => {
  return (
    <Fragment>
      <Col xs={2} />
      <Col xs={8} className="AboutBody">
        <p>Mauris expedita vehicula arcu viverra urna odit diam eros! Ornare class labore blandit parturient aliquet! Ligula recusandae soluta, egestas, arcu accumsan sunt maiores lectus.</p>
        <p>Do? Fermentum iusto perspiciatis, wisi eros rhoncus do recusandae ipsam, magni repudiandae arcu consequatur fames, soluta voluptatum torquent nihil voluptatem class! Anim tristique neque.</p>
        <Skills />
      </Col>
      <Col xs={2} />
    </Fragment>
  )
}

export default About