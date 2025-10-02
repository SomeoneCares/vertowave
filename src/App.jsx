import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Challenges from './components/Challenges'
import Process from './components/Process'
import Solutions from './components/Solutions'
import FeaturedSolutions from './components/FeaturedSolutions'
import SuccessStory from './components/SuccessStory'
import Industries from './components/Industries'
import Partners from './components/Partners'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} />
      <main>
        <Hero />
        <Challenges />
        <Process />
        <Solutions />
        <FeaturedSolutions />
        <SuccessStory />
        <Industries />
        <Partners />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
