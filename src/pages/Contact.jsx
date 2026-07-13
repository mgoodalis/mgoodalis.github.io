import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="py-5">
      <Card>
        <Card.Body>
          <Card.Title>Contact</Card.Title>
          <Card.Text>
            Reach out here once you are ready to connect.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;
