// import dentalcare from "../../assets/images/services/dental-care-5557438_640.jpg";
// import dentalchechup from "../../assets/images/services/istockphoto-149353790-612x612.webp";
// import dentalhygiene from "../../assets/images/services/kenya-3009299_640.jpg";
// import clean from "../../assets/images/services/photo-1609840114035-3c981b782dfe.avif";
// import healthy from "../../assets/images/services/photo-1620775997990-ee3c25938b4c.avif";
// import awesome from "../../assets/images/services/photo-1629909613654-28e377c37b09.avif";

const services = [
  {
    logo: <i className="fas fa-magic    "></i>,
    id: "1",
    h1: "General Maternal Care",
    p: "CWe provide every basic services.",
    // img: dentalcare,
    img: "public/1.jpeg",
  },
  {
    logo: <i className="fas fa-box    "></i>,
    id: "2",
    h1: "No Children Left Behind",
    p: "Effective care is crucial for every child.",
    // img: dentalchechup,
    img: "public/2.jpeg",
  },
  {
    logo: <i className="fa fa-dollar" aria-hidden="true"></i>,
    id: "3",
    h1: "All are welcome",
    p: "Here to serve",
    // img: dentalhygiene,
    img: "public/3.jpeg",
  },
  {
    logo: <i className="fa fa-mars-stroke-h" aria-hidden="true"></i>,
    id: "4",
    h1: "Luxury Services",
    p: "We provide more than maternal services.",
    // img: clean,
    img: "public/4.jpeg",
  },
  {
    logo: <i className="fas fa-business-time    "></i>,
    id: "5",
    h1: "Deliver with Confidence",
    p: "Once you talk to us, you can start your motherhood with confidence.",
    // img: healthy,
    img: "public/5.jpeg",
  },
  {
    logo: <i className="fa fa-plane" aria-hidden="true"></i>,
    id: "6",
    h1: "We Utilize Modern Equipment",
    p: "This is to give you confidence in the quality of our services, which guarantee value.",
    // img: awesome,
    img: "public/landing.jpeg",
  },
];

// eslint-disable-next-line array-callback-return
const Services = () => {
  const processDisplay = services.map((display) => (
    <div className="col-lg-4 me-0.5" key={Math.random() * 100}>
      <h1>{display.logo}</h1>
      <h3>
        {display.id} {display.h1}
      </h3>
      <p>{display.p}</p>
      <img
        src={display.img}
        alt={`Image ${display.id}`}
        className="img-fluid"
      />
    </div>
  ));

  return (
    <section>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#F5F9FC" }}
      >
        <div className="container ">
          <div className="row text-center">
            <div className="col-12">
              <h1>Our Services</h1>
              <p>
                We've broken down the services we provide so you know exactly
                what to expect.
              </p>
            </div>
            {processDisplay}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
