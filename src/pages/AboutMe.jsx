import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MattImage from '../assets/AboutMe/AboutMe.jpg';

function AboutMe() {
  return (
    <Container className="py-5">
      <Row className="g-4 align-items-center">
        <Col lg={6}>
          <Card className="border-0 shadow-sm">
            <Card.Img
              src={MattImage}
              alt="Matt Goodalis"
              className="img-fluid rounded"
              style={{ objectFit: 'cover', aspectRatio: '3 / 4' }}
            />
          </Card>
        </Col>
        <Col lg={6}>
          <div className="px-lg-4 text-start">
            <h1 className="display-6 fw-semibold mb-3 text-dark">About Me</h1>
            <p className="text-dark">
              Hello there! I’m Matt, an amateur photographer who enjoys taking photos of just about anything.
              My journey into photography started during a family trip to Ireland in 2019, where I inadvertently became
              the trip's photographer using my Grandpa's older digital camera. It was my first time using a 'real'
              camera, and I became hooked on learning how to use it to capture every moment.
            </p>
            <br />
            <p className="text-dark">
              Since then, I have explored many different genres of photography, including landscape, portait, street,
              and wildlife photography. I enjoy challenging myself to find interesting compositions and capturing unique moments.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
