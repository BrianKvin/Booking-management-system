import "./Doctors.css";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import doctor1 from "../../assets/images/doctors/doctor1.jpeg";
import doctor2 from "../../assets/images/doctors/doctor2.jpeg";
import doctor3 from "../../assets/images/doctors/doctor3.jpeg";
import useAuth from "../../hooks/useAuth";

const images = [doctor1, doctor2, doctor3];

const Doctors = () => {
  const { physios } = useAuth();

  // Function to add a new Doctor's card
  // const addDoctor = () => {
  //   const newDoctor = {
  //     id: doctors.length + 1,
  //     title: "New Card Title",
  //     text: "Some quick example text for the new card.",
  //     image: "",
  //   };

  //   setDoctors([...doctors, newDoctor]);
  // };

  return (
    <div className="container my-3">
      <Row xs={1} md={4} className="g-3">
        {physios.map((physio) => (
          <Col key={physio.id}>
            <Card>
              <Card.Img
                variant="top"
                src={images[Math.floor(Math.random() * images.length)]}
              />
              <Card.Body>
                <Card.Title>
                  {physio.user.first_name} {physio.user.last_name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* <Button
        className="button"
        variant="primary"
        size="sm"
        onClick={addDoctor}
        active
      >
        Add Doctor
      </Button> */}
    </div>
  );
};

export default Doctors;
