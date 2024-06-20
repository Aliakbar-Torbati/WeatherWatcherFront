import React from 'react'
import Navbar from '../component/Navbar'
import Intro from '../component/Intro'
import Footer from '../component/Footer'
import WeatherCard from '../component/WeatherCard'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Intro /> 
      <WeatherCard />
      <Footer />
    </div>
  )
}

export default Homepage
