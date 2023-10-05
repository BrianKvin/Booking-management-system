// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { NavLink } from "react-router-dom";

// // import logo from '../../assets/one-medical.svg'
// import "./Navbar.css";

import { Link } from "react-router-dom";
import "./Navbar.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-0">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          {" "}
          <b> OneClinic </b>{" "}
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
              <ul className="dropdown-menu">
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
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dental Services
              </Link>
              <ul className="dropdown-menu">
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
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Samples
              </Link>
              <ul className="dropdown-menu">
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
              </ul>
            </li>
            <li className="nav-item dropdown">
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
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Products
              </Link>
              <ul className="dropdown-menu">
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
              </ul>
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
                Login
              </button>
            </Link>
          </Link>
        </div>
      </div>
    </nav>

    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       {/* <img src={logo} alt="logo" /> */}
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link className="active">OneClinic</Nav.Link>
    //         <NavDropdown title="Doctors" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         </NavDropdown>
    //         <NavDropdown title="Services" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         </NavDropdown>
    //         <NavDropdown title="Blog" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         </NavDropdown>
    //         <Nav.Link>Contact us</Nav.Link>
    //         <Nav.Link>
    //           {" "}
    //           <FontAwesomeIcon icon={faSearch} />
    //         </Nav.Link>
    //         <Nav.Link>
    //           <FontAwesomeIcon icon={faPhone} className="phone" />
    //           (+01) 999 888 777
    //         </Nav.Link>
    //         <Nav.Link>
    //           <NavLink to="/login">
    //             <button onClick={() => {}}>Login</button>
    //           </NavLink>
    //         </Nav.Link>
    //         {/* <NavLink to='/loginSignup'>Login</NavLink> */}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
