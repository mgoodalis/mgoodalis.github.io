import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Prints() {
  return (
    <Container className="py-5">
      <Card>
        <Card.Body>
          <Card.Title>Prints</Card.Title>
          <Card.Text>
            Add details about available prints or products here.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Prints;
