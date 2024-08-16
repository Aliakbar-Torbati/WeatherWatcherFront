import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Intro2 from '../component/intro components/Intro2'
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
