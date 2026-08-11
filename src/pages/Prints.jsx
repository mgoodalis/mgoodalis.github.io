import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const imageImports = import.meta.glob('../assets/Prints/*.{JPG,jpg,jpeg}', { eager: true });

const printItems = [
  {
    id: 1,
    title: 'Morning Fog',
    price: '$75',
    description: 'Archival matte print in a 12x18 format.',
    imageKey: 'MorningFog_Thumbnail',
  },
  {
    id: 2,
    title: 'Half Dome Morning',
    price: '$75',
    description: 'Premium gallery print with rich tonal detail.',
    imageKey: 'Halfdome_Thumbnail',
  },
  {
    id: 3,
    title: 'Valley View',
    price: '$40',
    description: 'A crisp landscape print ready for display.',
    imageKey: 'ValleyView_Thumbnail',
  },
  {
    id: 4,
    title: 'Tokyo Man',
    price: '$38',
    description: 'An urban-inspired photo print with bold contrast.',
    imageKey: 'TokyoMan_Thumbnail',
  },
  {
    id: 5,
    title: 'Cliffs of Moher',
    price: '$45',
    description: 'A dramatic coastal landscape print with layered textures.',
    imageKey: 'CliffsofMoher_Thumbnail',
  },
  {
    id: 6,
    title: 'Frog',
    price: '$35',
    description: 'A close-up study that celebrates a curious, vivid subject.',
    imageKey: 'Frog_Thumbnail',
  },
  {
    id: 7,
    title: 'Gap of Dunloe',
    price: '$48',
    description: 'A scenic valley composition with atmospheric depth.',
    imageKey: 'GapofDunloe_Thumbnail',
  },
  {
    id: 8,
    title: 'Gion',
    price: '$42',
    description: 'A moody street scene filled with character and detail.',
    imageKey: 'Gion_Thumbnail',
  },
  {
    id: 9,
    title: 'Hakone',
    price: '$46',
    description: 'A tranquil mountain-inspired image with soft tonal balance.',
    imageKey: 'Hakone_Thumbnail',
  },
  {
    id: 10,
    title: 'Imperial Palace',
    price: '$52',
    description: 'A refined urban composition highlighting structure and symmetry.',
    imageKey: 'ImperialPalace_Thumbnail',
  },
  {
    id: 11,
    title: 'Madison Capital',
    price: '$41',
    description: 'A civic landmark print with bold architectural framing.',
    imageKey: 'MadisonCapital_Thumbnail',
  },
  {
    id: 12,
    title: 'Osaka Castle',
    price: '$44',
    description: 'An elevated view of a historic landmark with depth and contrast.',
    imageKey: 'OsakaCastle_Thumbnail',
  },
  {
    id: 13,
    title: 'Stairs and Pillars',
    price: '$39',
    description: 'A minimalist architectural study with strong form and shadow.',
    imageKey: 'StairsAndPillars_Thumbnail',
  },
  {
    id: 14,
    title: 'Sundown',
    price: '$50',
    description: 'Warm evening light in a cinematic landscape composition.',
    imageKey: 'Sundown_Thumbnail',
  },
  {
    id: 15,
    title: 'Tokyo Skyline',
    price: '$55',
    description: 'A high-contrast cityscape with the energy of the skyline.',
    imageKey: 'TokyoSkyline_Thumbnail',
  },
  {
    id: 16,
    title: 'Umbrella Man',
    price: '$37',
    description: 'A textured urban moment with rich color and motion.',
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
  return (
    <Container className="py-5">
      <div className="alert alert-warning border-0 mb-4" role="alert">
        <strong>Fake Storefront:</strong> This is a fake storefront that will not store, save, or send any information provided.
      </div>

      <div className="text-center mb-4">
        <h1 className="mb-1 text-black">Prints</h1>
        <p className="text-muted mb-0">Choose a photograph to purchase a print.</p>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {printItems.map((item) => (
          <Col key={item.id}>
            <Card className="h-100 shadow-sm border-0">
              <div style={{ height: '240px', overflow: 'hidden', background: '#f5f5f5' }}>
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
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start gap-3 mb-2">
                  <Card.Title className="mb-0">{item.title}</Card.Title>
                  <strong>{item.price}</strong>
                </div>
                <Card.Text className="text-muted">{item.description}</Card.Text>
                <div className="mt-auto d-flex gap-2">
                  <Button variant="outline-dark" size="sm">
                    Select Print
                  </Button>
                  <Button variant="dark" size="sm">
                    Buy Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Prints;
