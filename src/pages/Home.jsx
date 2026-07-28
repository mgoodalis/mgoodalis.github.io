import { useState } from 'react';
import bkgImg from '../assets/Yosemite Morning Fog (16x9)-1.JPG';
import '../App.css';

const slides = [
  {
    id: 1,
    image: bkgImg,
    title: 'Featured Landscape',
    caption: 'A placeholder slide for your photography gallery.',
  },
  {
    id: 2,
    image: bkgImg,
    title: 'Next Showcase',
    caption: 'Swap these with your real images later.',
  },
  {
    id: 3,
    image: bkgImg,
    title: 'Third Preview',
    caption: 'This gives you a working carousel structure right away.',
  },
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showNextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const showPreviousSlide = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={bkgImg} className="hero-image" alt="Scenic photography hero" />
        </div>

        <div className="carousel" aria-label="Photography carousel">
          <button type="button" className="carousel-button" onClick={showPreviousSlide} aria-label="Previous slide">
            ←
          </button>

          <div className="carousel-slide">
            <img src={slides[activeIndex].image} alt={slides[activeIndex].title} />
            <div className="carousel-caption">
              <h2>{slides[activeIndex].title}</h2>
              <p>{slides[activeIndex].caption}</p>
            </div>
          </div>

          <button type="button" className="carousel-button" onClick={showNextSlide} aria-label="Next slide">
            →
          </button>
        </div>

        <div>
          <h1>Goodalis Photography coming soon...</h1>
          <p>Browse a preview of the gallery below.</p>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default Home;
