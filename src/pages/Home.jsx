import React from 'react'
import Hero from '../components/home/Hero'

import Header from '../components/home/Header'

import Footer from '../components/home/Footer'
import Skills from '../components/home/Skills'
import Project from '../components/home/Project'
import Contact from '../components/home/Contact'
const Home = () => {
  

  return (
    <div>
      <Header />
      <main>
        <section id='Hero'>
          <Hero />
        </section>
        <section id='Skills'>
          <Skills/>
        </section>
        <section id='Project'>
          <Project />
        </section>
        <section id='Contact'>
          <Contact />
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default Home




