import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Services = () => {
  // Services Data
  const servicesData = [
    {
      id: 1,
      title: "Service 1",
      text: "This is the first service by the company.",
      img: "src/assets/Images/services.jpg",
    },
    {
      id: 2,
      title: "Service 2",
      text: "This is the second service by the company.",
      img: "src/assets/Images/services.jpg",
    },
    {
      id: 3,
      title: "Service 3",
      text: "This is the third service by the company.",
      img: "src/assets/Images/services.jpg",
    },
    {
      id: 4,
      title: "Service 4",
      text: "This is the fourth service by the company.",
      img: "src/assets/Images/services.jpg",
    },
    {
      id: 5,
      title: "Service 5",
      text: "This is the fifth service by the company.",
      img: "src/assets/Images/services.jpg",
    },
    {
      id: 6,
      title: "Service 6",
      text: "This is the sixth service by the company.",
      img: "src/assets/Images/services.jpg",
    },
  ];

  return (
    <>
      <div className="wrapper">
        <div className="services_heading">
          <h1>Services</h1>
        </div>
        <hr />
        <div className="cardsWrapper">
          <div className="cards_inner_wrapper">
            <Row>
              {servicesData.map((card) => (
                <Col key={card.id} md={4} className="mb-4">
                  <Card className="services_card" style={{ width: "100%" }}>
                    <Card.Img variant="top" src={card.img} />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <Button variant="outline-success">Xplore</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
