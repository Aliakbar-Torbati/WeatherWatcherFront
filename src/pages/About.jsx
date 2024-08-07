import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Intro2 from '../component/Intro2'
import { useAuthen } from "../context/AuthenContex";
import UserPreference from '../component/UserPreference';
import AboutMe from '../component/About/AboutMe';
import AboutFeature from '../component/About/AboutFeature';


const About = () => {
  const { user } = useAuthen();
  console.log('about user', user);
  return (
    <div>
      <Navbar />
      <Intro2 profile={<AboutMe />} imgSource="https://images.unsplash.com/photo-1461511669078-d46bf351cd6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <AboutFeature />
      <Footer />
    </div>
  )
}

export default About
