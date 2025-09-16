import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Services = () => {
  // Services Data
  const servicesData = [
    {
      id: 1,
      title: "Real-Time GPS Tracking",
      text: "Track your fleet live on the map with accurate, real-time GPS updates for better visibility and control over your truck movements.",
      img: "services.jpg",
    },
    {
      id: 2,
      title: "Route Optimization",
      text: "Automatically suggest the most efficient routes to reduce fuel costs, minimize delays, and improve delivery times.",
      img: "services.jpg",
    },
    {
      id: 3,
      title: "Driver Monitoring",
      text: "Monitor driver behavior, including speed, idle time, and route deviations to ensure safety and performance standards are met.",
      img: "services.jpg",
    },
    {
      id: 4,
      title: "Delivery Status Updates",
      text: "Receive instant updates on pickup, in-transit, and delivered statuses to keep your customers and team informed at all times.",
      img: "services.jpg",
    },
    {
      id: 5,
      title: "Maintenance Alerts",
      text: "Get timely alerts for vehicle maintenance to avoid unexpected breakdowns and keep your fleet running smoothly.",
      img: "services.jpg",
    },
    {
      id: 6,
      title: "Analytics & Reporting",
      text: "Gain insights into fleet performance, fuel usage, and delivery trends with easy-to-understand reports and dashboards.",
      img: "services.jpg",
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
                    <Card.Img
                      variant="top"
                      src={`${import.meta.env.BASE_URL}${card.img}`}
                    />
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
