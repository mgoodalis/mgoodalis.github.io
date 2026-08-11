import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Prints from './pages/Prints'
import Equipment from './pages/Equipment'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/prints" element={<Prints />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
