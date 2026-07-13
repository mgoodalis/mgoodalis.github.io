import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Portfolio() {
  return (
    <Container className="py-5">
      <Card>
        <Card.Body>
          <Card.Title>Portfolio</Card.Title>
          <Card.Text>
            Showcase your featured work and projects here.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Portfolio;
