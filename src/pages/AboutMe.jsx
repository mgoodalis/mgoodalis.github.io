import React from 'react';
import { Container, Card } from 'react-bootstrap';

function AboutMe() {
  return (
    <Container className="py-5">
      <Card>
        <Card.Body>
          <Card.Title>About Me</Card.Title>
          <Card.Text>
            This is a placeholder about page for your React portfolio site.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AboutMe;
