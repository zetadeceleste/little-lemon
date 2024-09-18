import React from 'react'
import HeroSection from '../../components/HeroSection'
import Highlights from '../../components/Highlights'
import Testimonials from '../../components/Testimonials'
import About from '../../components/About'
import Layout from '../../layout/'

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </Layout>
  )
}

export default HomePage
