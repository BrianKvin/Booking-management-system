import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/utilities/one-medical.svg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="level">
          <Col md={3} sm={6}>
            <img src={logo} className="footer-logo" alt="Logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              dicta cumque voluptatibus fugiat! Reprehenderit, numquam!
              Excepturi ab maiores repudiandae ratione.
            </p>
          </Col>
          <Col md={3} sm={6}>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Physiology Care</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Booking</a>
              </li>
              <li>
                <a href="#">Faqs</a>
              </li>
              <li>
                <a href="#">Our Doctors</a>{" "}
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h2>Services</h2>
            <ul>
              <li>
                <a href="#">Complete Exams</a>
              </li>
              <li>
                <a href="#">X-rays</a>
              </li>
              <li>
                <a href="#">Dental Cleaning</a>
              </li>
              <li>
                <a href="#">Fillings</a>
              </li>
              <li>
                <a href="#">Extractions</a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h2>Contact Us</h2>
            <Form className="email">
              <Button type="submit">Send an email</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
