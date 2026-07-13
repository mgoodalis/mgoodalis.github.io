import { useState } from 'react'
import bkgImg from './assets/Yosemite Morning Fog (16x9)-1.JPG'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={bkgImg} className="hero-image" alt="Scenic photography hero" />
        </div>
        <div>
          <h1>Goodalis Photography coming soon...</h1>
          <p>
            Meanwhile, enjoy this counter. Look how it keeps track!
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
