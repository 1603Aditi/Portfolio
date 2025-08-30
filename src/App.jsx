import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Title from './components/Title/Title'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Resume from './components/Resume/Resume'
const App = () => {
  return (
    <div id="home">
      <Navbar/>
      <Hero/>
      <div className='container' id="skills">
      <Title value="Skills"/>
      <Skills/>
      </div>
      <div className='container' id="projects">
        <Title value="Projects"/>
        <Projects/>
      </div>
      <div className='container' id="resume">
        <Title value="Resume"/>
        <Resume/>
      </div>
      <div className='container' id="connect">
      <Title value="Let's Connect"/>
      <Contact/>
      </div>
      <Footer />
    </div>
  )
}

export default App
