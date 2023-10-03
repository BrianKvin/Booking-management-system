import React, { useState } from "react";
import "./Services.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import dentalcare from "../../assets/images/services/dental-care-5557438_640.jpg";
import dentalchechup from "../../assets/images/services/istockphoto-149353790-612x612.webp";
import dentalhygiene from "../../assets/images/services/kenya-3009299_640.jpg";

const Services = () => {
  // State to manage the list of services
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Card Title 1",
      text: "Some quick example text for Card 1.",
      image: dentalcare,
    },
    {
      id: 2,
      title: "Card Title 2",
      text: "Some quick example text for Card 2.",
      image: dentalchechup,
    },
    {
      id: 3,
      title: "Card Title 3",
      text: "Some quick example text for Card 3.",
      image: dentalhygiene,
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
    <div>
      <div className="services-container" style={{ display: "flex" }}>
        {services.map((service) => (
          <Card className="service" style={{ width: "18rem" }} key={service.id}>
            <Card.Img className="img" variant="top" src={service.image} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}

        {/* Button to add a new service */}
      </div>
      <Button
        className="button"
        variant="primary"
        size="sm"
        onClick={addService}
        active
      >
        Add Service
      </Button>
    </div>
  );
};

export default Services;
