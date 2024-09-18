import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import './styles.css'

function Layout({ children }) {
  return (
    <main className="layout">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
