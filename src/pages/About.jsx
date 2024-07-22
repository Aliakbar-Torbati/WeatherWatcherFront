import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Intro2 from '../component/Intro2'
import { useAuthen } from "../context/AuthenContex";
import UserPreference from '../component/UserPreference';


const About = () => {
  const { user } = useAuthen();
  console.log('about user', user);
  return (
    <div>
      <Navbar />
      {/* <Intro2 heading="About me" text="I am an Enthusiastic Web Developer." /> */}
      <Intro2 profile={<UserPreference />} />

      <Footer />
    </div>
  )
}

export default About
