import Carousel from 'react-bootstrap/Carousel';
import MorningFog from '../assets/MorningFog.JPG';
import HalfDomeMorning from '../assets/HalfDomeMorning.JPG';
import ValleyView from '../assets/ValleyView.JPG';
import NeighborhoodsTokyo from '../assets/NeighborhoodsTokyo.JPG';
import TokyoSkyline from '../assets/TokyoSkyline.JPG';
import '../App.css';

const slides = [
  {
    id: 1,
    image: MorningFog,
  },
  {
    id: 2,
    image: HalfDomeMorning,
  },
  {
    id: 3,
    image: ValleyView,
  },
  {
    id: 4,
    image: NeighborhoodsTokyo,
  },
  {
    id: 5,
    image: TokyoSkyline,
  },
];

function Home() {
  return (
    <>
      <section id="center">
        <Carousel className="photo-carousel" interval={7500} controls indicators>
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
        </div>
      </section>
    </>
  );
}

export default Home;
