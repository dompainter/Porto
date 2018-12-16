import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './App.css'
import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import ProjectsContainer from './components/projects/ProjectsContainer'
import Footer from './components/footer/Footer'
import projects from './projects.json'
import Logo from './images/porto-logo.png'

class App extends Component {
  render() {
    return (
      <Grid className="App" fluid>
        <Row>
          <Col xs={1} className="NavigationLogo">
            <a href='/'>
              <img src={Logo} alt="logo" />
            </a>
          </Col>
          <Col xs={4}>
            <Navigation />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Hero />
          </Col>
        </Row>
        <Row center="md">
          <ProjectsContainer projects={projects} />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Grid>
    )
  }
}

export default App
