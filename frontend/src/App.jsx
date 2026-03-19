import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Tools from './components/Tools'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AllProjects from './components/AllProjects'

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Tools />
    <Projects />
    <Contact />
  </>
)

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen bg-white dark:bg-[#020617] transition-colors duration-500">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

