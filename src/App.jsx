import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Prints from './pages/Prints'
import Equipment from './pages/Equipment'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const redirect = params.get('redirect')
    if (redirect) {
      const path = redirect.startsWith('/') ? redirect : '/' + redirect
      navigate(path, { replace: true })
    }
  }, [location.search, navigate])

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
