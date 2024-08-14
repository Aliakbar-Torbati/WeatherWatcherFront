import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Intro2 from '../component/Intro2'
import UserPreference from '../component/UserPreference';


function Profile() {
  return (
    <div>
      <Navbar />
      <Intro2 profile={<UserPreference />} imgSource="https://images.unsplash.com/photo-1561553543-e4c7b608b98d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Footer />
    </div>
  )
}

export default Profile
