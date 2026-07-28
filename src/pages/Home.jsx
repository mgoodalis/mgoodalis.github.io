import Carousel from 'react-bootstrap/Carousel';
import MorningFog from '../assets/MorningFog.JPG';
import HalfDomeMorning from '../assets/HalfDomeMorning.JPG';
import ValleyView from '../assets/ValleyView.JPG';
import '../App.css';

const slides = [
  {
    id: 1,
    image: MorningFog,
    title: 'Featured Landscape',
    caption: 'A placeholder slide for your photography gallery.',
  },
  {
    id: 2,
    image: HalfDomeMorning,
    title: 'Next Showcase',
    caption: 'Swap these with your real images later.',
  },
  {
    id: 3,
    image: ValleyView,
    title: 'Third Preview',
    caption: 'This gives you a working carousel structure right away.',
  },
];

function Home() {
  return (
    <>
      <section id="center">
        <Carousel className="photo-carousel" interval={5000} controls indicators>
          {slides.map((slide) => (
            <Carousel.Item key={slide.id}>
              <img className="d-block w-100 carousel-slide-image" src={slide.image} alt={slide.title} />
              <Carousel.Caption className="carousel-caption-box">
                <h3>{slide.title}</h3>
                <p>{slide.caption}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

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
