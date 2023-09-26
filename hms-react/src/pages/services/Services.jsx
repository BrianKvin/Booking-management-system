import React, { useState } from "react";
import "./Services.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; // Import Button from react-bootstrap
// import image1 from "../../assets/images/istockphoto-1384499192-612x612.jpg";
// import image2 from "../../assets/images/pexels-photo-7433148.jpeg";
// import image3 from "../../assets/images/pexels-photo-8313421.webp";

const Services = () => {
  // State to manage the list of services
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Card Title 1",
      text: "Some quick example text for Card 1.",
      image: "/doctor1",
    },
    {
      id: 2,
      title: "Card Title 2",
      text: "Some quick example text for Card 2.",
      image: "/doctor2",
    },
    {
      id: 3,
      title: "Card Title 3",
      text: "Some quick example text for Card 3.",
      image: "/doctor3",
    },
  ]);

  // Function to add a new service card
  const addService = () => {
    const newService = {
      id: services.length + 1,
      title: "New Card Title",
      text: "Some quick example text for the new card.",
      image: "", // Provide the image URL for the new card
    };

    setServices([...services, newService]);
  };

  return (
    <div className="services-container">
      {services.map((service) => (
        <Card className="service" style={{ width: "18rem" }} key={service.id}>
          <Card.Img className="img" variant="top" src={service.image} />
          <Card.Body>
            <Card.Title>{service.title}</Card.Title>
            <Card.Text>{service.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}

      {/* Button to add a new service */}
      <Button variant="primary" size="sm" onClick={addService} active>
        Add Service
      </Button>
    </div>
  );
};

export default Services;
