import React, { useMemo, useState } from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';

const CART_STORAGE_KEY = 'matt-goodalis-cart';
const imageImports = import.meta.glob('../assets/Prints/*.{JPG,jpg,jpeg}', { eager: true });

const printItems = [
  { id: 1, title: 'Morning Fog in Yosemite', price: '$150', imageKey: 'MorningFog_Thumbnail' },
  { id: 2, title: 'Half Dome Morning', price: '$75', imageKey: 'Halfdome_Thumbnail' },
  { id: 3, title: 'Valley View', price: '$50', imageKey: 'ValleyView_Thumbnail' },
  { id: 4, title: 'Tokyo Man', price: '$40', imageKey: 'TokyoMan_Thumbnail' },
  { id: 5, title: 'Cliffs of Moher', price: '$75', imageKey: 'CliffsofMoher_Thumbnail' },
  { id: 6, title: 'Frog', price: '$45', imageKey: 'Frog_Thumbnail' },
  { id: 7, title: 'Gap of Dunloe', price: '$60', imageKey: 'GapofDunloe_Thumbnail' },
  { id: 8, title: 'Gion', price: '$100', imageKey: 'Gion_Thumbnail' },
  { id: 9, title: 'Hakone', price: '$65', imageKey: 'Hakone_Thumbnail' },
  { id: 10, title: 'Imperial Palace', price: '$50', imageKey: 'ImperialPalace_Thumbnail' },
  { id: 11, title: 'Madison Capital Building', price: '$40', imageKey: 'MadisonCapital_Thumbnail' },
  { id: 12, title: 'Osaka Castle', price: '$75', imageKey: 'OsakaCastle_Thumbnail' },
  { id: 13, title: 'Stairs and Pillars', price: '$40', imageKey: 'StairsAndPillars_Thumbnail' },
  { id: 14, title: 'Sundown', price: '$50', imageKey: 'Sundown_Thumbnail' },
  { id: 15, title: 'Tokyo Skyline', price: '$55', imageKey: 'TokyoSkyline_Thumbnail' },
  { id: 16, title: 'Umbrella Man', price: '$100', imageKey: 'UmbrellaMan_Thumbnail' },
].map((item) => {
  const match = Object.entries(imageImports).find(([path]) => path.includes(item.imageKey));

  return {
    ...item,
    image: match ? match[1].default : null,
  };
});

const getStoredCart = () => {
  try {
    const storedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
    return Array.isArray(storedCart) ? storedCart : [];
  } catch (error) {
    return [];
  }
};

const formatPrice = (priceString) => {
  const parsed = Number.parseFloat((priceString || '$0').replace(/[^\d.]/g, '')) || 0;
  return parsed;
};

function Checkout() {
  const cart = useMemo(() => getStoredCart(), []);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const cartTotal = cart.reduce((total, item) => {
    const linePrice = formatPrice(item.price);
    const quantity = Number(item.quantity || 0);
    return total + linePrice * quantity;
  }, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your order! This is a fake checkout page, and no payment will be processed.');

    // Clear delivery and payment fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      cardName: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
    });
  };

  return (
    <Container className="py-5 text-start">
      <div className="alert alert-warning border-0 mb-4 text-center" role="alert">
        <strong>Fake Storefront:</strong> This is a fake checkout page. No payment will be processed, and no personal information will be stored or sent.
      </div>
      
      <div className="text-start mb-4">
        <h1 className="mb-1 text-black">Checkout</h1>
        <p className="text-muted mb-0">Review your order and enter your delivery and payment information.</p>
      </div>

      <Row className="g-4">
        <Col lg={5}>
          <Card className="shadow-sm border-0 h-100" style={{ backgroundColor: '#ffffff' }}>
            <Card.Body className="p-4">
              <h4 className="mb-3">Order Summary</h4>

              {cart.length === 0 ? (
                <p className="text-muted mb-0">Your cart is empty.</p>
              ) : (
                <ListGroup variant="flush">
                  {cart.map((item, index) => {
                    const lineTotal = formatPrice(item.price) * Number(item.quantity || 0);
                    const itemImage = printItems.find((print) => print.id === item.id)?.image;

                    return (
                      <ListGroup.Item key={`${item.id}-${index}`} className="px-0">
                        <div className="d-flex justify-content-between align-items-start gap-3">
                          <div className="d-flex align-items-center gap-3">
                            {itemImage && (
                              <img
                                src={itemImage}
                                alt={item.title}
                                style={{
                                  width: '200px',
                                  height: 'auto',
                                  maxHeight: '200px',
                                  objectFit: 'contain',
                                  borderRadius: '6px',
                                  border: '1px solid #ffffff',
                                  background: '#ffffff',
                                }}
                              />
                            )}
                            <div>
                              <div className="fw-semibold">{item.title}</div>
                              <small className="text-muted">Qty: {item.quantity || 1}</small>
                            </div>
                          </div>
                          <strong>${lineTotal.toFixed(2)}</strong>
                        </div>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              )}

              <div className="d-flex justify-content-between align-items-center fs-5 fw-semibold border-top pt-3 mt-3">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={7}>
          <Card className="shadow-sm border-0" style={{ backgroundColor: '#ffffff' }}>
            <Card.Body className="p-4">
              <Form onSubmit={handleSubmit}>
                <h4 className="mb-3">Delivery Information</h4>

                <Row className="g-3 mb-4">
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="text-start d-block mb-2">
                        Name <span className="text-danger">*</span>
                      </Form.Label>
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
                      <Form.Label className="text-start d-block mb-2">
                        Address <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Street address"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="text-start d-block mb-2">
                        City <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="text-start d-block mb-2">
                        State <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="text-start d-block mb-2">
                        ZIP Code <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        placeholder="ZIP"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h4 className="mb-3">Payment Information</h4>

                <Row className="g-3">
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="text-start d-block mb-2">
                        Name on Card <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        placeholder="Name as shown on card"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="text-start d-block mb-2">
                        Card Number <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, '').slice(0, 16);
                          setFormData((prev) => ({ ...prev, cardNumber: digits }));
                        }}
                        placeholder="1234567890123456"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={16}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-start d-block mb-2">
                        Expiration <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-start d-block mb-2">
                        CVV <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, '').slice(0, 4);
                          setFormData((prev) => ({ ...prev, cvv: digits }));
                        }}
                        placeholder="1234"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={4}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Button
                  type="submit"
                  className="w-100 mt-4"
                  style={{
                    backgroundColor: '#2e8b57',
                    borderColor: '#2e8b57',
                    fontWeight: 600,
                  }}
                >
                  Place Order
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
