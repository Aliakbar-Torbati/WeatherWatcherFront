import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Intro2 from '../component/Intro2'
import ContactForm from '../component/ContactForm'


const Contact = () => {
  return (
    <div>
      <Navbar />
      <Intro2 heading="CONTACT" text="Lets have a chat" />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
