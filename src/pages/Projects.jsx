import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Intro2 from '../component/Intro2'
import ProjectsList from '../component/ProjectsList';






const Projects = () => {
  return (
    <div>
      <Navbar />
      <Intro2 heading="Projects" text="My most recent works" />
      <ProjectsList /> 
      <Footer />
    </div>
  )
}

export default Projects
