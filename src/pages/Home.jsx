import React from 'react'
import Hero from '../components/home/Hero'

import Header from '../components/home/Header'

import Footer from '../components/home/Footer'
import Skills from '../components/home/Skills'
import MiniProject from '../components/home/MiniProject'
import MainProject from '../components/home/MainProject'
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
        <section id='MiniProject'>
          <MiniProject />
        </section>
        <section id='MainProject'>
          <MainProject />
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




