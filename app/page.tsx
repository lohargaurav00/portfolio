'use client'
import React from 'react';
import { Navbar } from '@/components'
import { Header, About, Work, Skills, Testimonials, Footer } from '@/container'
import './page.scss'

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  )
}
