import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import facebook from "../../assets/images/download.png";
import twitter from "../../assets/images/download (1).png";
import instagram from "../../assets/images/download (2).png";
import linkedin from "../../assets/images/download (3).png";
import logo from "../../assets/one-medical.svg";
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
            {/* <div className="footer-contact">
                <FontAwesomeIcon icon={faPhone} />
              </div> */}
            {/* <div className="footer-text">
                <h6>Contact Us</h6>
                <h4>(888) 4421-1238-32</h4>
              </div> */}
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
                <a href="#">Physiology Care</a>
              </li>
              <li>
                <a href="#">Screening</a>
              </li>
              <li>
                <a href="#">Therapy</a>
              </li>
              <li>
                <a href="#">Consultation</a>
              </li>
              <li>
                <a href="#">Diagnosis</a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h2>Contact Us</h2>
            <Form className="email">
              {/* <Form.Control type="email" placeholder="Enter email" /> */}
              <Button type="submit">Send an email</Button>
            </Form>
            {/* <ul className="social">
                <li><a href="#"><img src={facebook} alt="Facebook" /></a></li>
                <li><a href="#"><img src={twitter} alt="Twitter" /></a></li>
                <li><a href="#"><img src={instagram} alt="Instagram" /></a></li>
                <li><a href="#"><img src={linkedin} alt="LinkedIn" /></a></li>
              </ul> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
