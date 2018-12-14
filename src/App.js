import React, { Component } from 'react'
import './App.css'
import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import ProjectList from './components/project-list/ProjectList'
import ProjectDetail from './components/project-detail/ProjectDetail'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <Hero />
        <ProjectList />
        <ProjectDetail />
        <Footer />
      </div>
    )
  }
}

export default App
