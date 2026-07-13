import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Equipment() {
  return (
    <Container className="py-5">
      <Card>
        <Card.Body>
          <Card.Title>Equipment</Card.Title>
          <Card.Text>
            List your tools, camera gear, or workspace setup here.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Equipment;
