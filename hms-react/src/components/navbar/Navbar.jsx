import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

// import logo from '../../assets/one-medical.svg'
import "./Navbar.css";


const Header = () => {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img src={logo} alt="logo" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="active">OneClinic</Nav.Link>
              <NavDropdown title="Doctors" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>Contact us</Nav.Link>
              <Nav.Link>
                {" "}
                <FontAwesomeIcon icon={faSearch} />
              </Nav.Link>
              <Nav.Link>
                <FontAwesomeIcon icon={faPhone} className="phone" />
                (+01) 999 888 777
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/login">
                  <button onClick={() => console.log("True")}>Login</button>
                </NavLink>
              </Nav.Link>
              {/* <NavLink to='/loginSignup'>Login</NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header;
