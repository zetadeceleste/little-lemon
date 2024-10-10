import React from 'react'
import HeroSection from '../../components/HeroSection'
import HighlightsSection from '../../components/HighlightsSection'
import TestimonialsSection from '../../components/TestimonialsSection'
import AboutSection from '../../components/AboutSection'
import Layout from '../../layout/'

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <HighlightsSection />
      <TestimonialsSection />
      <AboutSection />
    </Layout>
  )
}

export default HomePage
