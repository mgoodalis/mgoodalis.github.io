import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Matt from '../assets/Matt.JPG';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`New message from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `First Name: ${formData.firstName}\n` +
        `Last Name: ${formData.lastName}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
    );

    window.location.href = `mailto:goodalis.m2@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Container className="py-5">
      <Row className="g-4 align-items-stretch">
        <Col md={6} className="d-flex">
          <img
            src={Matt}
            alt="Matt"
            className="img-fluid w-100 h-100 rounded-4 shadow-sm"
            style={{ objectFit: 'cover', minHeight: '500px' }}
          />
        </Col>

        <Col md={6}>
          <Card className="h-100 shadow-sm border-0 bg-light-subtle">
            <Card.Body className="d-flex flex-column justify-content-center p-4 p-lg-5">
              <Card.Title className="text-black mb-2">Contact</Card.Title>
              <Card.Text className="text-muted mb-4">
                Reach out here once you are ready to connect.
              </Card.Text>

              <Form onSubmit={handleSubmit}>
                <Row className="g-4">
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="text-start d-block mb-2">Name <span className="text-danger">*</span></Form.Label>
                      <Row className="g-3">
                        <Col md={6}>
                          <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                          />
                        </Col>

                        <Col md={6}>
                          <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                          />
                        </Col>
                      </Row>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="text-start d-block mb-2">Email <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="text-start d-block mb-2">Message <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Button type="submit" variant="dark" className="px-4 py-2">
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
