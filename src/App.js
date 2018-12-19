import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './App.css'
import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import ProjectsContainer from './components/projects/ProjectsContainer'
import Footer from './components/footer/Footer'
import projects from './projects.json'
import Logo from './images/logo3.png'
import About from './components/about/About'

class App extends Component {
  componentDidMount () {
    window.funkyHello()
  }

  render() {
    return (
      <Grid className="App" fluid>
        <Row className="row--no-padding">
          <Col xs={2} className="NavigationLogo">
            <a href='/'>
              <img src={Logo} alt="logo" />
            </a>
          </Col>
          <Col xs={3}>
            <Navigation />
          </Col>
        </Row>
        <Row className="row--padding-bottom">
          <Hero />
        </Row>
        <Row className="row--padding-bottom">
          <About />
        </Row>
        <Row className="row--padding-bottom" id="projects" center="md">
          <ProjectsContainer projects={projects} />
        </Row>
        <Row className="row--padding-bottom">
          <Footer />
        </Row>
      </Grid>
    )
  }
}

export default App
