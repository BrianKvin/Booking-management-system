import classes from "./Landing.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import CustomerReviews from "./CustomerReviews";
import Process from "./Process";

// import { Link } from "react-router-dom";
// import { Row, Col } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import Footer from "../../components/footer/Footer";
import dentist from "../../assets/images/landing-page-images/dentist-2530983_640.jpg";
// import tooth from "../../assets/images/landing-page-images/tooth-replacement-3532980_640.jpg";
// import teeth from "../../assets/images/landing-page-images/teeth-5522650_640.jpg";
// import doctor from "../../assets/images/landing-page-images/young-3009300_640.jpg";
// import classes from "./Introduction.module.css";

const Landing = () => {
  return (
    <header>
      <Navbar />

      <div className={"container-fluid " + classes.containerfluid}>
        <div className="container ">
          <div className="row align-items-center" style={{ height: "41rem" }}>
            <div className="col-5 text-start ">
              <h1 className={classes.h1}>
                Get The Best Denal Care <br /> Service Today
              </h1>
              <h2 className="mt-4">
                Deliver the best dental experience <br />
                with custom dental hygiene.
              </h2>
              <button className={"btn btn-success px-3 py-2 " + classes.button}>
                Explore Products
              </button>
            </div>
            <div className="col-7 ml-4">
              <img src={dentist} />
            </div>
          </div>
        </div>
      </div>

      <Process />

      <section className="py-5" style={{ backgroundColor: "#F5F9FC" }}>
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row text-center py-5">
              <div className="col-12">
                <h1>Start your Dental Journey Today</h1>
                <p>
                  Get to know our range of dental solutions and choose one that
                  meets your needs.
                </p>
                <button className="mt-5 btn btn-success">
                  Explore our Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomerReviews />
      <FrequentlyAskedQuestions />
      <Footer />
    </header>
    // <header>
    //   <Navbar />
    //   <div className="container ">
    //     <div className="row">
    //       <div className="col-md-4 col-lg-6">
    //         <h5>We Provide All Therapy Solutions</h5>
    //         <h2>Protect Your Mental and Physical Condition</h2>
    //         <button>
    //           <Link to={"/register"}>Get Started Today</Link>
    //         </button>
    //       </div>

    //       <div className="col-lg-4 col-md-8">
    //         <div className="header-box">
    //           <img src={doctor} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //     <h1 className="more">What We Do</h1>
    //     <Row className="pitch">
    //       <Col>
    //         <div className="header-box">
    //           <img src={tooth} />
    //           <h4>Tooth Cleaning</h4>
    //           <p>
    //             Tooth cleaning: Essential for oral health. Removes plaque,
    //             prevents cavities, freshens breath, and brightens smiles.
    //             Routine care for lasting hygiene.
    //           </p>
    //         </div>
    //       </Col>
    //       <Col>
    //         <div className="header-box">
    //           <img src={teeth} />
    //           <h4>Dental Chekup</h4>
    //           <p>
    //             Dental checkup: Regular exams ensure oral health. Detect issues
    //             early, prevent problems, maintain a confident smile. Essential
    //             for overall well-being.
    //           </p>
    //         </div>
    //       </Col>
    //       <Col>
    //         <div className="header-box">
    //           <img src={dentist} />
    //           <h4>Dental X-ray</h4>
    //           <p>
    //             Dental X-ray: Non-invasive diagnostic tool. Reveals hidden
    //             issues, aids in treatment planning. Minimal radiation, maximum
    //             benefits for oral health.
    //           </p>
    //         </div>
    //       </Col>
    //     </Row>
    //   </div>
    //   <div>
    //     <h1 className="more">Why Choose Us</h1>
    //     <Row className="pitch">
    //       <Col>
    //         <Card style={{ width: "18rem" }}>
    //           <Card.Body>
    //             <Card.Title>We Care</Card.Title>
    //             <Card.Text>
    //               <p>
    //                 Experience compassionate care at our clinic. Skilled
    //                 professionals, state-of-the-art technology, and a welcoming
    //                 environment ensure top-notch treatment. Your smile's best
    //                 friend.
    //               </p>
    //             </Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //       <Col>
    //         <Card style={{ width: "18rem" }}>
    //           <Card.Body>
    //             <Card.Title>Affordable</Card.Title>
    //             <Card.Text>
    //               <p>
    //                 At our clinic, we prioritize affordable healthcare. Quality
    //                 meets affordability, ensuring accessible treatments without
    //                 compromising excellence. Trust us to provide cost-effective
    //                 solutions for your dental needs, making oral health
    //                 achievable for all.
    //               </p>
    //             </Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //       <Col>
    //         <Card style={{ width: "18rem" }}>
    //           <Card.Body>
    //             <Card.Title>Tailor-Made Services</Card.Title>
    //             <Card.Text>
    //               <p>
    //                 Our clinic takes pride in tailoring dental care to your
    //                 unique needs. From personalized treatment plans to attentive
    //                 service, your smile's individuality is our top priority.
    //               </p>
    //             </Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </div>
    //   <Footer />
    // </header>
  );
};

export default Landing;
