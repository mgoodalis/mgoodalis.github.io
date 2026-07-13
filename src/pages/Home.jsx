import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container className="py-5">
      <Jumbotron>
        <h1>Welcome to My Portfolio</h1>
        <p>This is a simple starter home page built with React, React Bootstrap, and React Router.</p>
        <p>
          <Button variant="primary">Get Started</Button>
        </p>
      </Jumbotron>
    </Container>
  );
}

export default Home;
