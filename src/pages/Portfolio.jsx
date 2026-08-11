import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const imageImports = import.meta.glob('../assets/Portfolio/*.{JPG,jpg,jpeg}', { eager: true });

const categories = [
  {
    title: 'Yosemite Valley',
    slides: [
      { id: 1, caption: 'Morning Fox', imageKey: 'MorningFox_16x9' },
      { id: 2, caption: 'Half Dome', imageKey: 'Halfdome' },
      { id: 3, caption: 'Valley View', imageKey: 'ValleyView' },
      ,
    ],
  },
  {
    title: 'Japan',
    slides: [
      { id: 1, caption: 'Tokyo Skyline', imageKey: 'TokyoSkyline_16x10' },
      { id: 3, caption: 'Tokyo Man', imageKey: 'TokyoMan_16x10' },
      { id: 4, caption: 'Umbrella Man', imageKey: 'UmbrellaMan_5x7' },
      { id: 5, caption: 'Gion', imageKey: 'Gion_5x7' },
      { id: 6, caption: 'Hakone', imageKey: 'Hakone_5x7' },
      { id: 7, caption: 'Imperial Palace', imageKey: 'ImperialPalace_5x7' },
      { id: 8, caption: 'Osaka Castle', imageKey: 'OsakaCastle_5x7' },
    ],
  },
  {
    title: 'Ireland',
    slides: [
      { id: 1, caption: 'Cliffs of Moher', imageKey: 'CliffsofMoher_16x9' },
      { id: 2, caption: 'Gap of Dunloe', imageKey: 'GapofDunloa_16x9' },
    ],
  },
  {
    title: 'Wisconsin',
    slides: [
      { id: 1, caption: 'Madison Capital Building', imageKey: 'MadisonCapital_5x7' },
      { id: 2, caption: 'Stairs and Pillars', imageKey: 'StairsAndPillars_5x7' },
      { id: 3, caption: 'Frog', imageKey: 'Frog_16x9' },
      { id: 4, caption: 'Sundown', imageKey: 'Sundown' },
    ],
  },
].map((category) => ({
  ...category,
  slides: category.slides.map((slide) => {
    const match = Object.entries(imageImports).find(([path]) => path.includes(slide.imageKey));

    return {
      ...slide,
      image: match ? match[1].default : null,
    };
  }),
}));

function Portfolio() {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-6 fw-semibold text-dark">Portfolio</h1>
      </div>

      <div className="d-flex flex-column gap-4">
        {categories.map((category) => (
          <Card className="h-100 border-0" style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)' }} key={category.title}>
            <Card.Body>
              <Card.Title className="mb-4 text-start fs-4 fw-semibold">{category.title}</Card.Title>
              <Carousel interval={3000} controls={false} className="rounded overflow-hidden">
                {category.slides.map((slide) => (
                  <Carousel.Item key={slide.id}>
                    {slide.image ? (
                      <img
                        src={slide.image}
                        alt={slide.caption}
                        className="d-block w-100"
                        style={{
                          height: 'auto',
                          maxHeight: '700px',
                          objectFit: 'contain',
                          background: '#ffffff',
                          display: 'block',
                          margin: '0 auto',
                        }}
                      />
                    ) : null}
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default Portfolio;
