import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skill/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />  
      <Hero />  
      <About />  
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App