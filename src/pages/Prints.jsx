import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import MorningFog from '../assets/MorningFog.JPG';
import HalfDomeMorning from '../assets/HalfDomeMorning.JPG';
import ValleyView from '../assets/ValleyView.JPG';
import NeighborhoodsTokyo from '../assets/NeighborhoodsTokyo.JPG';

const printItems = [
  {
    id: 1,
    title: 'Morning Fog',
    price: '$35',
    description: 'Archival matte print in a 12x18 format.',
    image: MorningFog,
  },
  {
    id: 2,
    title: 'Half Dome Morning',
    price: '$45',
    description: 'Premium gallery print with rich tonal detail.',
    image: HalfDomeMorning,
  },
  {
    id: 3,
    title: 'Valley View',
    price: '$40',
    description: 'A crisp landscape print ready for display.',
    image: ValleyView,
  },
  {
    id: 4,
    title: 'Neighborhoods Tokyo',
    price: '$38',
    description: 'An urban-inspired photo print with bold contrast.',
    image: NeighborhoodsTokyo,
  },
];

function Prints() {
  return (
    <Container className="py-5">
      <div className="alert alert-warning border-0 mb-4" role="alert">
        <strong>Fake Storefront:</strong> This is a fake storefront that will not store, save, or send any information provided.
      </div>

      <div className="text-center mb-4">
        <h1 className="mb-1 text-black">Prints</h1>
        <p className="text-muted mb-0">Choose a photograph to purchase a print.</p>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {printItems.map((item) => (
          <Col key={item.id}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.title}
                style={{ height: '240px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start gap-3 mb-2">
                  <Card.Title className="mb-0">{item.title}</Card.Title>
                  <strong>{item.price}</strong>
                </div>
                <Card.Text className="text-muted">{item.description}</Card.Text>
                <div className="mt-auto d-flex gap-2">
                  <Button variant="outline-dark" size="sm">
                    Select Print
                  </Button>
                  <Button variant="dark" size="sm">
                    Buy Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Prints;
