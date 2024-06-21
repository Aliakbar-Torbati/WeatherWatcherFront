import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Intro2 from '../component/Intro2'
import AboutContent from '../component/AboutContent'
import WeatherCardHourly from '../component/WeatherCardHourly'

const About = () => {
  return (
    <div>
      <Navbar />
      <Intro2 heading="About me" text="I am an Enthusiastic Web Developer." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
