import './App.scss'
import Homepage from './pages/Homepage'
import { Routes , Route} from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'


export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";


function App() {
  return (
    <div className='App'>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/:userId" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
