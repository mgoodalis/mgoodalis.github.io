import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const imageImports = import.meta.glob('../assets/Equipment/*.{jpg,jpeg,JPG,png,webp}', { eager: true });

const gearItemLabels = {
  FujifilmXT5: { title: 'Fujifilm X-T5', description: 'The main camera body I use for my photograph. I really love Fuji\'s tactile design and dials.', link: 'https://www.keh.com/shop/28104483.html' },
  Fuji16_55: { title: 'Fujifilm XF 16-55mm f/2.8', description: 'My go-to lens while traveling for its versatility and sharpness.', link: 'https://www.keh.com/shop/fuji-16-55mm-f-2-8-xf-lm-wr-black-lens-for-fuji-x-mount-mirrorless-77-681812.html' },
  Fuji18_55: { title: 'Fujifilm XF 18-55mm f/2.8-4 OIS', description: 'A wonderful kit lens that comes with image stabilization. Great for videos.', link: 'https://www.keh.com/shop/fuji-18-55mm-f-2-8-4-xf-r-lm-ois-lens-for-fuji-x-mount-mirrorless-58-698212.html' },
  Fuji23f1_4: { title: 'Fujifilm XF 23mm f/1.4', description: 'A fast and incredibly sharp prime lens. I often use this in low light situations or indoors.', link: 'https://www.keh.com/shop/fujifilm-xf-23mm-f-1-4-r-lm-wr-fujinon-lens-for-aps-c-format-x-mount-black-58.html' },
  Fuji90f2: { title: 'Fujifilm XF 90mm f/2', description: 'A wonderfully sharp prime lens I use for portraits and subject isolation.', link: 'https://www.keh.com/shop/fuji-90mm-f-2-xf-r-lm-wr-lens-for-fuji-x-mount-mirrorless-62-681844.html' },
  Fuji_NP_W235: { title: 'Fujifilm NP-W235 Battery', description: 'You gotta have a spare battery. I would generally not recommend going 3rd party here, Fuji\'s own battery is the best.', link: 'https://shopusa.fujifilm-x.com/np-w235-rechargeable-battery-16651409/' },
  Lexar_256: { title: 'Lexar 256GB SD Card', description: 'High-capacity storage, and acceptably fast for amateur/hobbyist use.', link: 'https://www.amazon.com/dp/B07NLYT72D' },
  ProMaster_CardReader: { title: 'ProMaster Card Reader', description: 'A reliable way to offload images from the camera onto any device.', link: 'https://www.amazon.com/dp/B08KJPTFBV' },
  Samsung_T7: { title: 'Samsung T7 SSD', description: 'Fast and portable storage. I use this as a physical backup.', link: 'https://www.amazon.com/Samsung-Portable-Titan-Gray-050MB/dp/B0874XWW23' },
  TTArtisan500f6_3: { title: 'TTArtisan 500mm f/6.3', description: 'A surprisingly cheap 500mm prime lens, but has manual focus. I have used for astrophotography, and the lord of frogs.', link: 'https://www.amazon.com/dp/B0CW34YYKH' },
  Wandrd_PRVKE_Lite: { title: 'Wandrd PRVKE Lite Pack', description: 'A great lightweight camera bag. It is not the largest, but serves my needs.', link: 'https://www.amazon.com/PRVKE-Lite-11-Litre-Black/dp/B095JN689Y' },
  ZeissTouit32f1_8: { title: 'Zeiss Touit 32mm f/1.8', description: 'A magical little lens that seems to make your photos pop. The bokeh is incredible.', link: 'https://www.keh.com/shop/zeiss-touit-32-mm-f-1-8-fixed-focal-length-lens-for-fujifilm-x-mount.html' },
  Camera_Strap: { title: 'Blackrapid Retro Classic Shoulder Strap', description: 'Shoulder straps are the most comfortable way to carry your camera, this one is great.', link: 'https://www.amazon.com/dp/B079M1NKD4' },
};

const gearItems = Object.entries(imageImports).map(([path, importedAsset], index) => {
  const fileName = path.split('/').pop().replace(/\.[^/.]+$/, '');
  const normalizedName = fileName.replace(/[^a-zA-Z0-9]/g, '_');
  const match = gearItemLabels[normalizedName] || gearItemLabels[fileName];
  const title = match?.title || fileName.replace(/_/g, ' ');
  const description = match?.description || 'Gear for my photography workflow.';
  const link = match?.link || '#';

  return {
    id: index + 1,
    title,
    description,
    image: importedAsset?.default ?? importedAsset,
    link,
  };
});

function Equipment() {
  return (
    <Container className="py-5">
      <div className="text-center mb-4">
        <h1 className="mb-1 text-black">Equipment</h1>
        <p className="text-muted mb-0">Camera gear I use, with links to the gear pages.</p>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {gearItems.map((item) => (
          <Col key={item.id}>
            <Card className="h-100 border-0" style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)' }}>
              {item.image && (
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
              )}
              <Card.Body className="d-flex flex-column">
                <div className="mb-3">
                  <Card.Title className="mt-2 mb-2">{item.title}</Card.Title>
                  <Card.Text className="text-muted">{item.description}</Card.Text>
                </div>
                <div className="mt-auto">
                  <Button
                    variant="dark"
                    size="sm"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Product Page
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

export default Equipment;
