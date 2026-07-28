import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MattImage from '../assets/Matt.jpg';

function AboutMe() {
  return (
    <Container className="py-5">
      <Row className="g-4 align-items-center">
        <Col lg={6}>
          <Card className="border-0 shadow-sm">
            <Card.Img src={MattImage} alt="Matt Goodalis" className="img-fluid rounded" style={{ objectFit: 'cover', aspectRatio: '3 / 4' }} />
          </Card>
        </Col>
        <Col lg={6}>
          <div className="px-lg-4">
            <h1 className="display-6 fw-semibold mb-3 text-dark">About Me</h1>
            <p className="lead text-muted">
              Hello! I’m Matt Goodalis, a photographer focused on capturing memorable moments through a calm,
              natural, and thoughtful approach.
            </p>
            <p className="text-muted">
              This space is currently a placeholder for your story, background, and creative philosophy. You can
              replace this text with a short biography, your journey, your inspirations, and what motivates your
              work.
            </p>
            <p className="text-muted">
              Add a few more paragraphs here whenever you are ready to share more about yourself and your vision.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
