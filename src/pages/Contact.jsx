import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

import MattImage from '../assets/Contact/AboutMe.JPG';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_ylsn0j7', //Service ID
        'template_xmny2e6', //Template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
        },
        'dXfg0lz6CrwfTw8mN' //Public key
      );
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending email:', err);
      setStatus('error');
    }
  };

  const renderStatusAlert = () => {
    if (status === 'sending') {
      return (
        <Alert variant="info" className="mb-4">
          Sending your message...
        </Alert>
      );
    }

    if (status === 'success') {
      return (
        <Alert variant="success" className="mb-4">
          Your message was sent successfully. Thank you!
        </Alert>
      );
    }

    if (status === 'error') {
      return (
        <Alert variant="danger" className="mb-4">
          Something went wrong while sending your message. Please try again.
        </Alert>
      );
    }

    return null;
  };

  return (
    <Container className="py-5">
      <Row className="g-4 align-items-stretch">
        <Col md={6} className="d-flex">
          <img
            src={MattImage}
            alt="Matt Goodalis"
            className="img-fluid rounded"
            style={{ objectFit: 'cover', aspectRatio: '3 / 4' }}
          />
        </Col>

        <Col md={6}>
          <Card className="h-100 shadow-sm border-0 bg-light-subtle">
            <Card.Body className="d-flex flex-column justify-content-center p-4 p-lg-5 text-start">
              <Card.Title className="text-black mb-3" style={{ fontSize: '2.5rem', fontWeight: 500 }}>
                Contact Me
              </Card.Title>
              <Card.Text className="text-muted mb-4">
                If you have a question, or if you're intested in working with me, please provide
                your information below and I'll get back to you when I can.
              </Card.Text>

              {renderStatusAlert()}

              <Form onSubmit={handleSendMessage}>
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
                        maxLength={750}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Button
                      type="submit"
                      variant="dark"
                      className="px-4 py-2"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
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
