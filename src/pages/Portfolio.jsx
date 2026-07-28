import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const categories = [
  {
    title: 'Landscapes',
    slides: [
      { id: 1, image: 'https://via.placeholder.com/1200x800?text=Landscape+1', caption: 'Landscape sample 1' },
      { id: 2, image: 'https://via.placeholder.com/1200x800?text=Landscape+2', caption: 'Landscape sample 2' },
      { id: 3, image: 'https://via.placeholder.com/1200x800?text=Landscape+3', caption: 'Landscape sample 3' },
    ],
  },
  {
    title: 'Urban',
    slides: [
      { id: 1, image: 'https://via.placeholder.com/1200x800?text=Urban+1', caption: 'Urban sample 1' },
      { id: 2, image: 'https://via.placeholder.com/1200x800?text=Urban+2', caption: 'Urban sample 2' },
      { id: 3, image: 'https://via.placeholder.com/1200x800?text=Urban+3', caption: 'Urban sample 3' },
    ],
  },
  {
    title: 'Travel',
    slides: [
      { id: 1, image: 'https://via.placeholder.com/1200x800?text=Travel+1', caption: 'Travel sample 1' },
      { id: 2, image: 'https://via.placeholder.com/1200x800?text=Travel+2', caption: 'Travel sample 2' },
      { id: 3, image: 'https://via.placeholder.com/1200x800?text=Travel+3', caption: 'Travel sample 3' },
    ],
  },
  {
    title: 'Portraits',
    slides: [
      { id: 1, image: 'https://via.placeholder.com/1200x800?text=Portrait+1', caption: 'Portrait sample 1' },
      { id: 2, image: 'https://via.placeholder.com/1200x800?text=Portrait+2', caption: 'Portrait sample 2' },
      { id: 3, image: 'https://via.placeholder.com/1200x800?text=Portrait+3', caption: 'Portrait sample 3' },
    ],
  },
];

function Portfolio() {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-6 fw-semibold text-dark">Portfolio</h1>
        <p className="text-muted">A framework for your photography collections.</p>
      </div>

      <div className="d-flex flex-column gap-4">
        {categories.map((category) => (
          <Card className="border-0 shadow-sm" key={category.title}>
            <Card.Body>
              <Card.Title className="mb-3">{category.title}</Card.Title>
              <Carousel interval={null} indicators={false} className="rounded overflow-hidden">
                {category.slides.map((slide) => (
                  <Carousel.Item key={slide.id}>
                    <img src={slide.image} alt={slide.caption} className="d-block w-100" style={{ height: '280px', objectFit: 'cover' }} />
                    <Carousel.Caption className="bg-dark bg-opacity-50 rounded-pill px-3 py-2">
                      <p className="mb-0">{slide.caption}</p>
                    </Carousel.Caption>
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
