import React, { Component } from 'react'
import './App.css'
import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import ProjectList from './components/project-list/ProjectList'
import ProjectDetail from './components/project-detail/ProjectDetail'
import Footer from './components/footer/Footer'
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
  render() {
    return (
      <Grid className="App" fluid>
        <Row>
          <Col xs={12}>
            <header className="App-header">
              <Navigation />
            </header>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Hero />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <ProjectList />
          </Col>
          <Col xs={12} md={8}>
            <ProjectDetail />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Footer />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App
