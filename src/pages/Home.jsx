import Carousel from 'react-bootstrap/Carousel';
import MorningFog from '../assets/Home/MorningFog.JPG';
import Halfdome from '../assets/Home/Halfdome.JPG';
import ValleyView from '../assets/Home/ValleyView.JPG';
import TokyoMan from '../assets/Home/TokyoMan.JPG';
import TokyoSkyline from '../assets/Home/TokyoSkyline.JPG';
import Frog from '../assets/Home/Frog.JPG';
import CliffsOfMoher from '../assets/Home/CliffsOfMoher.JPG';
import GapOfDunloe from '../assets/Home/GapOfDunloe.JPG';
import '../App.css';

const slides = [
  {
    id: 1,
    image: MorningFog,
  },
  {
    id: 2,
    image: Halfdome,
  },
  {
    id: 3,
    image: ValleyView,
  },
  {
    id: 4,
    image: TokyoMan,
  },
  {
    id: 5,
    image: TokyoSkyline,
  },
  {
    id: 6,
    image: Frog,
  },
  {
    id: 7,
    image: CliffsOfMoher,
  },
  {
    id: 8,
    image: GapOfDunloe,
  }
];

function Home() {
  return (
    <>
      <section id="center">
        <Carousel className="photo-carousel" interval={4000} ride="carousel" pause={false} controls={false} indicators>
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
