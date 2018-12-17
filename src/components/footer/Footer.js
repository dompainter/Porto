import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Emoji from 'react-emoji-render';

const Footer = (props) => {
  const socialMedias = {
    linkedIn: 'http://linkedin.com',
    facebook: 'http://facebook.com',
    twitter: 'http://twitter.com',
    instagram: 'http://instagram.com'
  }
  return (
    <Col xs={12} className="Footer">
      <Row className="row--no-padding" center="xs">
        <Col xs />
        <Col xs>
          <Row className="row--padding-bottom-small" xs={12}>
            <Col xs>
              <a href={socialMedias.linkedIn} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </Col>
            <Col xs>
              <a href={socialMedias.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </Col>
            <Col xs>
              <a href={socialMedias.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </Col>
            <Col xs>
              <a href={socialMedias.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs>
              <Emoji text=":wave:" onlyEmojiClassName="Emoji" />
            </Col>
          </Row>
        </Col>
        <Col xs />
      </Row>
    </Col>
  )
}

export default Footer