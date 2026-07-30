import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FujifilmXT5 from '../assets/FujifilmXT5.jpg';
import Fuji16_55 from '../assets/Fuji16_55.jpg';

const gearItems = [
  {
    id: 1,
    title: 'Fujifilm X-T5',
    category: 'Camera Body',
    description: 'The main body I use for my travel and landscape photography.',
    link: 'https://www.keh.com/shop/28104483.html',
    image: FujifilmXT5,
  },
  {
    id: 2,
    title: 'Fujifilm 16-55mm f/2.8 Lens',
    category: 'Lens',
    description: 'One of my primary zoom lenses for versatile daily shooting.',
    link: 'https://www.keh.com/shop/28804068.html',
    image: Fuji16_55,
  },
  {
    id: 3,
    title: 'Additional Gear',
    category: 'Accessories',
    description: 'More camera gear and accessories can be added here later.',
    link: '#',
  },
];

function Equipment() {
  return (
    <Container className="py-5">
      <div className="text-center mb-4">
        <h1 className="mb-1 text-black">Equipment</h1>
        <p className="text-muted mb-0">Camera gear I use, with links to the gear pages.</p>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {gearItems.map((item) => (
          <Col key={item.id}>
            <Card className="h-100 shadow-sm border-0">
              {item.image && (
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  style={{ height: '240px', objectFit: 'cover' }}
                />
              )}
              <Card.Body className="d-flex flex-column">
                <div className="mb-3">
                  <span className="text-uppercase small text-muted">{item.category}</span>
                  <Card.Title className="mt-2 mb-2">{item.title}</Card.Title>
                  <Card.Text className="text-muted">{item.description}</Card.Text>
                </div>
                <div className="mt-auto">
                  <Button
                    variant="dark"
                    size="sm"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Product Page
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

export default Equipment;
