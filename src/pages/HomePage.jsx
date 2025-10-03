import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Challenges from '../components/Challenges'
import Process from '../components/Process'
import Solutions from '../components/Solutions'
import FeaturedSolutions from '../components/FeaturedSolutions'
import SuccessStory from '../components/SuccessStory'
import Industries from '../components/Industries'
import Partners from '../components/Partners'
import Stats from '../components/Stats'
import CTA from '../components/CTA'

const HomePage = () => {
  return (
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
  )
}

export default HomePage
