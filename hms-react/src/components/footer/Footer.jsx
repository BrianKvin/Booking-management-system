import classes from "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className={"container " + classes.footer}>
          <div className="row ">
            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h5>Nama Care</h5>
                <li>
                  <NavLink to="/">about us</NavLink>
                </li>
                <li>
                  <NavLink to="/">Happy Clients</NavLink>
                </li>
                <li>
                  <NavLink to="/">Showcase</NavLink>
                </li>
                <li>
                  <NavLink to="/">Partners</NavLink>
                </li>
                <li>
                  <NavLink to="/">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/">Contact us</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h5>Discover Packaging</h5>
                <li>
                  <NavLink to="/">Custom Designed Services</NavLink>
                </li>
                <li>
                  <NavLink to="/">Luxury Services</NavLink>
                </li>
                <li>
                  <NavLink to="/">Gift Box Services</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h5>Packaging Products</h5>
                <li>
                  <NavLink to="/">All Products</NavLink>
                </li>
                <li>
                  <NavLink to="/">Screening Services</NavLink>
                </li>
                <li>
                  <NavLink to="/">Single Services</NavLink>
                </li>
                <li>
                  <NavLink to="/">Special Requests</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h5>Resources</h5>
                <li>
                  <NavLink to="/">Maternal Beds</NavLink>
                </li>
                <li>
                  <NavLink to="/">Home Care</NavLink>
                </li>
                <li>
                  <NavLink to="/">Sterilization Equipment</NavLink>
                </li>
                <li>
                  <NavLink to="/">X-ray Machines</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ color: "white" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <p className="text-secondary">
                &copy; 2023 Nama Care, All Rights Reserved. | Privacy Policy |
                Terms
              </p>
            </div>

            <div className="col-lg-6 col-12 text-center text-lg-end text-md-end text-sm-center ">
              <h4>
                <i className="fab fa-facebook-f ms-3   "></i>
                <i className="fab fa-instagram   ms-3 "></i>
                <i className="fab fa-linkedin   ms-3 "></i>
                <i className="fab fa-twitter-square  ms-3  "></i>
                <i className="fab fa-youtube   ms-3 "></i>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
