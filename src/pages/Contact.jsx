import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Intro2 from '../component/Intro2'
import { useAuthen } from "../context/AuthenContex";
import UserPreference from '../component/UserPreference';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Intro2 profile={<UserPreference />} />
      <Footer />
    </div>
  )
}

export default Contact
