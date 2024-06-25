import React from 'react'
import Navbar from '../component/Navbar'
import Intro from '../component/Intro'
import Footer from '../component/Footer'
import WeatherCard from '../component/WeatherCard'
import WeatherCardHourly from '../component/WeatherCardHourly'
import CitySearch from '../component/CitySearch'
import UserPreference from '../component/UserPreference'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Intro /> 
      <WeatherCard />
      <WeatherCardHourly />
      <Footer />
    </div>
  )
}

export default Homepage
