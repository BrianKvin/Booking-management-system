import { Link } from "react-router-dom";
import "./Navbar.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-4">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          {" "}
          <img
            src="./logo.jpg"
            alt="Nama Care Logo"
            style={{ height: "100px", width: "100px" }}
            className="h-8 mr-3"
          />
          {/* <b> Nama Care </b>{" "} */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Who We Are
              </Link>

              {/* <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="custom-packaging">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Happy Clients
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Show Case
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Contact Us
                  </Link>
                </li>
              </ul> */}
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Partners
              </Link>
              {/* <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    General Dental Care
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Dental Health
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Healthy Teeth
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Explore All Services
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul> */}
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Members
              </Link>
              {/* <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Structural Samples
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Simplified Samples
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Pre-Designed Samples
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Sample kit
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Explore All Samples
                  </Link>
                </li>
              </ul> */}
            </li>
            {/* <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Clients
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Parents
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Children
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Tooth Deco
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Consumer Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Luxury Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Events
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Dental Nutrition
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Oral Health
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Diamond Teeth
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    View All Clients
                  </Link>
                </li>
              </ul>
            </li> */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Services
              </Link>
              {/* <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Tooth Refiling
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Tooth Removal
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Tooth Cleaning
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Tooth deco
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    General Health
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    View All Clients
                  </Link>
                </li>
              </ul> */}
            </li>
            <li>
              {" "}
              {/* <button className="btn btn-success" type="submit">
                Browse Products
              </button> */}
            </li>
          </ul>
          <Link>
            <Link to="/login">
              <button className="btn btn-primary" onClick={() => {}}>
                Book an Appointment
              </button>
            </Link>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
