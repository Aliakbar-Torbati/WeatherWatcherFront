import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Intro2 from '../component/Intro2'
import { useAuthen } from "../context/AuthenContex";
import SignUp from '../component/fourms/SignUp';



function LogInPage() {
  return (
    <div>
      <Navbar />
      <Intro2 profile={<SignUp />} imgSource="https://images.unsplash.com/photo-1461511669078-d46bf351cd6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Footer />
    </div>
  )
}

export default LogInPage