import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import AboutMe from './pages/AboutMe'
import './App.css'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

// Create a wrapper component for routing
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper
