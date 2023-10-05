import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";

import "./Services.css";
import useAuth from "../../hooks/useAuth";
import dentalhygiene from "../../assets/images/services/kenya-3009299_640.jpg";
import dentalcare from "../../assets/images/services/dental-care-5557438_640.jpg";
import dentalchechup from "../../assets/images/services/istockphoto-149353790-612x612.webp";

const images = [dentalcare, dentalchechup, dentalhygiene];

const Services = () => {
  const { services, setServices, auth } = useAuth();
  const form = useForm({ defaultValues: { service: "", cost: "" } });

  const { register, handleSubmit, reset } = form;

  const addService = (data) => {
    const newService = {
      service: data.service,
      cost: data.cost,
    };

    const postService = async () => {
      try {
        const res = await axios.post(
          "http://127.0.0.1:8000/api/service/",
          newService
        );
        // console.log(res.data);
        reset();
        setServices([...services, res.data]);
      } catch (error) {
        console.log(error);
      }
    };

    postService();
  };

  return (
    <div className="container">
      {auth.role === "physio" && (
        <div className="row my-2">
          <Form>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Service"
                  {...register("service")}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Cost"
                  {...register("cost")}
                />
              </Col>
              <Col>
                <Button
                  className="button"
                  variant="primary"
                  size="sm"
                  onClick={handleSubmit(addService)}
                  active
                >
                  Add Service
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      )}

      <div className="my-2">
        <Row xs={1} md={4} className="g-3">
          {services.map((service) => (
            <Col key={service.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={images[Math.floor(Math.random() * images.length)]}
                />
                <Card.Body>
                  <div className="row">
                    <Card.Title className="col">{service.service}</Card.Title>
                    <Card.Text className="col">Ksh {service.cost}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
