import classes from "./Landing.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import CustomerReviews from "./CustomerReviews";
import Process from "./Process";
import dentist from "../../assets/images/landing-page-images/dentist-2530983_640.jpg";

const Landing = () => {
  return (
    <header>
      <Navbar />

      <div className={"container-fluid " + classes.containerfluid}>
        <div className="container ">
          <div className="row align-items-center" style={{ height: "41rem" }}>
            <div className="col-5 text-start ">
              <h1 className={classes.h1}>
                With you from the start
                <br />
              </h1>
              <h2 className="mt-4">
                We envision a world where every mother and child has access to
                comprehensive, high-quality health care, ensuring healthy lives
                and thriving communities.
              </h2>
              <button className={"btn btn-success px-3 py-2 " + classes.button}>
                Explore Services
              </button>
            </div>
            <div className="col-7 ml-4">
              {/* <img src={dentist} /> */}
              <img
                src="./landing.jpeg"
                alt="Landing page"
                // style={{ height: "400px", width: "400px" }}
                // className="h-8 mr-3"
                className="img-fluid"
              />
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
                <h1>Start your Maternal Journey Today</h1>
                <p>
                  Get to know our range of dental solutions and choose one that
                  meets your needs.
                </p>
                <button className="mt-5 btn btn-success">
                  Explore our Services
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
  );
};

export default Landing;
