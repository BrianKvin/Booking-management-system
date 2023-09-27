import headerimg from "../../assets/images/headerimg.png";
import "./Landing.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Footer from "../../components/footer/Footer";
import pressure from "../../assets/images/services/blood-pressure-monitor-1749577_640.jpg";
import istock from "../../assets/images/services/istockphoto-1079107724-612x612.webp";
import istockphoto from "../../assets/images/services/istockphoto-1452736789-612x612.webp";

const Landing = () => {
  return (
    <header>
      <Navbar />
      <div className="container ">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <h5>We Provide All Therapy Solutions</h5>
            <h2>Protect Your Mental and Physical Condition</h2>
            <button>
              <Link to={"/register"}>Get Started Today</Link>
            </button>
          </div>

          {/* <div className="col-lg-6 col-md-6">
            <button>
              <a href="#">Login</a>
            </button>
          </div> */}
          <div className="col-lg-6 col-md-6">
            <div className="header-box">
              <img src={headerimg} />
              {/* <FontAwesomeIcon icon={faSquare} /> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="more">What We Do</h1>
        <Row className="pitch">
          <Col>
            <div className="header-box">
              <img src={pressure} />
              <h4>Blood Pressure Monitoring</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                consequuntur veritatis numquam sunt quasi accusamus, officiis
                obcaecati delectus et quae culpa voluptatem neque eos quos. Ut
                voluptates quia repudiandae accusamus, facilis ullam explicabo a
                nostrum culpa. Vero sed, ad nesciunt eveniet nemo, nobis,
                blanditiis enim fugiat voluptatibus commodi ipsa laboriosam!
              </p>
            </div>
          </Col>
          <Col>
            <div className="header-box">
              <img src={istock} />
              <h4>Physio Therapy</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                enim ipsa, placeat quod, voluptatum, non architecto reiciendis
                tempora vero repellat exercitationem! Ab officiis labore soluta,
                ad ipsum placeat quod quia fuga delectus magni, consectetur
                nobis aliquam modi! Eos, iusto dolor?
              </p>
            </div>
          </Col>
          <Col>
            <div className="header-box">
              <img src={istockphoto} />
              <h4>Paediatric Psychotherapy</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                hic debitis. Reprehenderit culpa numquam ullam ducimus, beatae
                amet itaque eligendi veniam labore repellendus, ad, minima ipsum
                impedit nam optio omnis.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <h1 className="more">Why Choose Us</h1>
        <Row className="pitch">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur quasi molestiae illum explicabo nam similique?
                    Voluptates, magnam dicta assumenda quasi doloribus omnis eos
                    voluptatibus pariatur aspernatur nostrum, id repellendus?
                    Pariatur cupiditate dolorum iure quod fuga atque quia
                    quisquam voluptatibus cum facilis error possimus
                    reprehenderit voluptatum suscipit harum, esse nobis rerum.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem distinctio quidem maxime recusandae nemo beatae
                    voluptatem pariatur perferendis deleniti numquam? Labore aut
                    vitae optio dolor perspiciatis eius accusantium at nesciunt
                    perferendis ratione impedit, aliquid sit cumque odit fugiat
                    corrupti illo.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos repellendus nobis quod quidem incidunt! Repellat iusto
                    maiores autem. Molestiae temporibus magni animi cumque
                    cupiditate nobis assumenda voluptates officiis dolor
                    laboriosam, corrupti unde nam dolores reiciendis quisquam
                    adipisci incidunt aliquam doloremque! Facere aspernatur
                    iusto illum fugiat?
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </header>
  );
};

export default Landing;
