import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CART_STORAGE_KEY = 'matt-goodalis-cart';
const imageImports = import.meta.glob('../assets/Prints/*.{JPG,jpg,jpeg}', { eager: true });

const normalizeCartItem = (item) => {
  if (typeof item === 'string') {
    return { id: Date.now() + Math.random(), title: item, price: '$0', quantity: 1 };
  }

  if (item && typeof item === 'object' && item.title && item.price) {
    return {
      ...item,
      quantity: Number.isFinite(Number(item.quantity)) ? Number(item.quantity) : 1,
    };
  }

  return null;
};

const getStoredCart = () => {
  try {
    const storedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
    if (!Array.isArray(storedCart)) {
      return [];
    }

    return storedCart.map(normalizeCartItem).filter(Boolean);
  } catch (error) {
    return [];
  }
};

const printItems = [
  {
    id: 1,
    title: 'Morning Fog in Yosemite',
    price: '$150',
    imageKey: 'MorningFog_Thumbnail',
  },
  {
    id: 2,
    title: 'Half Dome',
    price: '$75',
    imageKey: 'Halfdome_Thumbnail',
  },
  {
    id: 3,
    title: 'The Valley View',
    price: '$50',
    imageKey: 'ValleyView_Thumbnail',
  },
  {
    id: 4,
    title: 'Tokyo Neighborhoods',
    price: '$40',
    imageKey: 'TokyoMan_Thumbnail',
  },
  {
    id: 5,
    title: 'The Cliffs of Moher',
    price: '$75',
    imageKey: 'CliffsofMoher_Thumbnail',
  },
  {
    id: 6,
    title: 'Lord of the Frogs',
    price: '$45',
    imageKey: 'Frog_Thumbnail',
  },
  {
    id: 7,
    title: 'The Gap of Dunloe',
    price: '$60',
    imageKey: 'GapofDunloe_Thumbnail',
  },
  {
    id: 8,
    title: 'Gion Pagoda',
    price: '$100',
    imageKey: 'Gion_Thumbnail',
  },
  {
    id: 9,
    title: 'Hakone Mountains',
    price: '$65',
    imageKey: 'Hakone_Thumbnail',
  },
  {
    id: 10,
    title: 'Tokyo Imperial Palace',
    price: '$50',
    imageKey: 'ImperialPalace_Thumbnail',
  },
  {
    id: 11,
    title: 'Madison Capital Building',
    price: '$40',
    imageKey: 'MadisonCapital_Thumbnail',
  },
  {
    id: 12,
    title: 'Osaka Castle',
    price: '$75',
    imageKey: 'OsakaCastle_Thumbnail',
  },
  {
    id: 13,
    title: 'Stairs and Pillars',
    price: '$40',
    imageKey: 'StairsAndPillars_Thumbnail',
  },
  {
    id: 14,
    title: 'Fishing at Sundown',
    price: '$50',
    imageKey: 'Sundown_Thumbnail',
  },
  {
    id: 15,
    title: 'Tokyo Skyline',
    price: '$55',
    imageKey: 'TokyoSkyline_Thumbnail',
  },
  {
    id: 16,
    title: 'Morning Commuter in Tokyo',
    price: '$100',
    imageKey: 'UmbrellaMan_Thumbnail',
  },
].map((item) => {
  const match = Object.entries(imageImports).find(([path]) => path.includes(item.imageKey));

  return {
    ...item,
    image: match ? match[1].default : null,
  };
});

function Prints() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => getStoredCart());
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (print) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === print.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === print.id
            ? { ...item, quantity: Number(item.quantity || 0) + 1 }
            : item
        );
      }

      return [
        ...prevCart,
        {
          id: print.id,
          title: print.title,
          price: print.price,
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (itemId, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id !== itemId) return item;

          const newQuantity = Number(item.quantity || 0) + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        })
        .filter(Boolean)
    );
  };

  const cartCount = cart.reduce((total, item) => total + Number(item.quantity || 0), 0);
  const cartTotal = cart.reduce((total, item) => {
    const itemPrice = typeof item?.price === 'string' ? item.price : '$0';
    const numericPrice = Number.parseFloat(itemPrice.replace(/[^\d.]/g, '')) || 0;
    return total + numericPrice * Number(item.quantity || 0);
  }, 0);

  return (
    <>
      <Container className="py-5">
        <div className="alert alert-warning border-0 mb-4" role="alert">
          <strong>Fake Storefront:</strong> This is a fake storefront that will not store, save, or send any information provided.
        </div>

        <div className="text-center mb-4">
          <h1 className="mb-1 text-black">Prints</h1>
          <p className="text-muted mb-0">Please consider supporting me by purchasing prints below.</p>
        </div>

        <Row xs={1} md={2} lg={3} className="g-4">
          {printItems.map((item) => (
            <Col key={item.id}>
              <Card className="h-100 border-0" style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)' }}>
                <div style={{ height: '240px', overflow: 'hidden', background: '#ffffff' }}>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center',
                      display: 'block',
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column justify-content-center">
                  <div className="text-center mb-3">
                    <Card.Title className="mb-1">{item.title}</Card.Title>
                    <strong>{item.price}</strong>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Button
                      size="sm"
                      onClick={() => addToCart(item)}
                      style={{
                        backgroundColor: '#c4f3cb',
                        borderColor: '#c4f3cb',
                        color: '#1b2d1f',
                        fontWeight: 400,
                        minWidth: '140px',
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Offcanvas show={isCartOpen} onHide={() => setIsCartOpen(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <p className="text-muted mb-0">Your cart is empty.</p>
          ) : (
            <>
              <ul className="list-unstyled mb-4">
                {cart.map((item, index) => {
                  const itemPrice = Number.parseFloat((item.price || '$0').replace(/[^\d.]/g, '')) || 0;
                  const lineTotal = itemPrice * Number(item.quantity || 0);
                  const itemImage = printItems.find((print) => print.id === item.id)?.image;

                  return (
                    <li key={`${item.id}-${index}`} className="d-flex justify-content-between align-items-center py-2 border-bottom gap-3">
                      <div className="d-flex align-items-center gap-3">
                        {itemImage && (
                          <img
                            src={itemImage}
                            alt={item.title}
                            style={{
                              width: '48px',
                              height: '48px',
                              objectFit: 'cover',
                              borderRadius: '6px',
                              border: '1px solid #e9ecef',
                              background: '#f8f9fa',
                            }}
                          />
                        )}
                        <div>
                          <div>{item.title}</div>
                          <div className="d-flex align-items-center gap-2 mt-1">
                            <button
                              type="button"
                              onClick={() => updateCartQuantity(item.id, -1)}
                              className="btn btn-sm btn-outline-dark px-2 py-0"
                              aria-label={`Remove one ${item.title}`}
                            >
                              −
                            </button>
                            <small className="text-muted">Qty: {item.quantity || 1}</small>
                            <button
                              type="button"
                              onClick={() => updateCartQuantity(item.id, 1)}
                              className="btn btn-sm btn-outline-dark px-2 py-0"
                              aria-label={`Add one ${item.title}`}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <strong>${lineTotal.toFixed(2)}</strong>
                    </li>
                  );
                })}
              </ul>

              <div className="d-flex justify-content-between align-items-center fs-5 fw-semibold mt-3">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>

              <Button
                className="w-100 mt-4"
                style={{
                  backgroundColor: '#2e8b57',
                  borderColor: '#2e8b57',
                  fontWeight: 600,
                }}
                onClick={() => navigate('/checkout')}
              >
                Checkout
              </Button>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      <button
        type="button"
        aria-label="Open shopping cart"
        onClick={() => setIsCartOpen(true)}
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          width: '56px',
          height: '56px',
          border: 'none',
          borderRadius: '50%',
          background: '#111111',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 24px rgba(0, 0, 0, 0.25)',
          zIndex: 1030,
          cursor: 'pointer',
        }}
      >
        <span style={{ fontSize: '20px' }}>🛒</span>
        <span
          style={{
            position: 'absolute',
            top: '-6px',
            right: '-4px',
            minWidth: '22px',
            height: '22px',
            padding: '0 6px',
            borderRadius: '999px',
            background: '#dc3545',
            color: '#ffffff',
            fontSize: '12px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {cartCount}
        </span>
      </button>
    </>
  );
}

export default Prints;
