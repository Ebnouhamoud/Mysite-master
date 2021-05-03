import React from 'react'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Header from './Header'
import Portfolio from './Portfolio'
import Skils from './Skils'

export default function Home() {
  return (
    <div>
      <Header/>
      <AboutMe/>
      <Skils/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}
